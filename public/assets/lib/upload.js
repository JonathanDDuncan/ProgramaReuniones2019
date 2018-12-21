document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById('import').onclick = function () {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
      console.log(e);
      var result = JSON.parse(e.target.result);
      var formatted = JSON.stringify(result, null, 2);
      document.getElementById('result').value = formatted;
      table.setData(result);
    }

    fr.readAsText(files.item(0));
  };
 
});

function loadJSON(url, callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      var json = JSON.parse(xobj.responseText);
      callback(json);
    }
  };
  xobj.send(null);
}


function fillData(app, data) {
  var canciones = data.canciones;
  var defaultsemana = data.defaultsemana;
  var publicadores = data.publicadores;

  var semanasanteriores = data.previoussemanasresult;
  var semanasparallenar = data.semanasparallenar;

  var semanastofill = process(semanasparallenar, defaultsemana);

  var timebetween = 100;
  setTimeout(function () {

    window.app.ports.loadCanciones.send(JSON.stringify(canciones));
    setTimeout(function () {
      window.app.ports.loadPublicadores.send(JSON.stringify(publicadores));
      setTimeout(function () {
        window.app.ports.loadSemanasAnteriores.send(JSON.stringify(semanasanteriores));
        setTimeout(function () {
          window.app.ports.fillSemanas.send(JSON.stringify(semanastofill));
        }, timebetween)
      }, timebetween)
    }, timebetween)
  }, timebetween);
}

function loadCommonData(callback) {
  loadJSON('assets/json/commonData.json', function (json) {
    callback(json);
  })
};

function loadBackupData(callback) {
  loadJSON('assets/json/programasemanalbackup.json', function (json) {
    var data = {};
    data.publicadores = json.publicadores;
    data.canciones = json.canciones;
    data.previoussemanasresult = json.semanasllenados;
    data.ultimaActualizacion = json.ultimaActualizacion;

    callback(data);
  })
};

function getJsonData(callback) {

  getsemanasparallenar(function (semanas) {
    loadBackupData(function (backup) {
      loadCommonData(function (common) {
        var data = backup;
        data.defaultsemana = common.defaultsemana;
        data.semanasparallenar = semanas;
        callback(data);
      });
    });
  });

};
function getsemanasparallenar(callback) {
  var data = window.table.getData();
  callback(data);
};