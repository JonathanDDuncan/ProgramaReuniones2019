(function () {
  function loadfile(id, callback) {
    document.getElementById(id).onchange =

      function () {
        var files = document.getElementById(id).files;
        console.log(files);
        if (files.length <= 0) {
          return false;
        }

        var fr = new FileReader();

        fr.onload = function (e) {
          console.log(e);
          var result = JSON.parse(e.target.result);
          callback(result);
        }

        fr.readAsText(files.item(0));
      };
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
    var data = progreunion.tabulators.tablesemanasllenar.getData();
    callback(data);
  };

  if (!window.progreunion)
    window.progreunion = {};

  window.progreunion.load =
    {
      loadJSON: loadJSON,
      getJsonData: getJsonData,
      loadfile: loadfile
    }
}());