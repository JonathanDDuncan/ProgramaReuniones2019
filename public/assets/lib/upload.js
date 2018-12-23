document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById('selectFiles').onchange = function () {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
      console.log(e);
      var result = JSON.parse(e.target.result);
      tablesemanasllenar.setData(result);
    }

    fr.readAsText(files.item(0));
  };
 
  document.getElementById('cargarcopiaseguridad').onchange = function () {
    var files = document.getElementById('cargarcopiaseguridad').files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
      console.log(e);
      var result = JSON.parse(e.target.result);
      loadbackup(result);
    }

    fr.readAsText(files.item(0));
  };
});

function loadbackup( backup){
  window.publicadores = backup.publicadores;
  window.canciones = backup.canciones;
  window.semanasllenados = backup.semanasllenados;
 
  createtablepublicadores(window.publicadores);
  createtablecanciones(window.canciones);
  createtablesemanasanteriores(window.semanasllenados);
  $.tab('change tab', 'tab-cargar');
};

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

// function loadBackupData(callback) {
//   loadJSON('assets/json/programasemanalbackup.json', function (json) {
//     var data = {};
//     data.publicadores = json.publicadores;
//     data.canciones = json.canciones;
//     data.previoussemanasresult = json.semanasllenados;
//     data.ultimaActualizacion = json.ultimaActualizacion;

//     callback(data);
//   })
// };


function loadBackupData(callback) {
    var data = {};
    data.publicadores = window.publicadores;
    data.canciones = window.canciones;
    data.previoussemanasresult = window.semanasllenados;
    
    callback(data);  
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
  var data = window.tablesemanasllenar.getData();
  callback(data);
};