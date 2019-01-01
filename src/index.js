import './main.css';
import './lib/upload.js';
import './lib/mytabulator.js';
import './lib/download.js';
import './lib/templator.js';
import './lib/processdata.js';
import { Elm } from './Main.elm';
import { saveAs } from 'file-saver';
import registerServiceWorker from './registerServiceWorker';
var moment = require('moment');

var app = Elm.Main.init({
  node: document.getElementById('root')
});

registerServiceWorker();
$('.tabular.menu .item').tab();
$('.ui.menu').find('.item').tab('change tab', 'tab-llenar')

var getstate = function () {
  if (!window.jsApp)
    window.jsApp = {};
  if (!window.jsApp.state)
    window.jsApp.state = {};
  return window.jsApp.state;
}

document.addEventListener("DOMContentLoaded", function (event) {
  // Run immediatetly on content load
  jsApp.load.loadCommonData(function (commonData) {
    var state = getstate();
    state.defaultsemana = commonData.defaultsemana;
    state.puntosMejoresLectoresMaestros = commonData.puntosMejoresLectoresMaestros;
  });

  jsApp.load.loadJSON('assets/json/publicadores.json', function (publicadores) {
    var state = getstate();

    state.publicadores = publicadores;
    jsApp.tabulator.createtablesemanasllenar(state.publicadores)
  })

  // Event listeners
  jsApp.load.loadfile('cargarcopiaseguridad', function (result) {
    if (result.publicadores && result.canciones && result.semanasllenados) {

      var state = getstate();

      state.publicadores = result.publicadores;
      state.canciones = result.canciones;
      state.semanasllenados = result.semanasllenados;

      jsApp.tabulator.createtablepublicadores(state.publicadores);
      jsApp.tabulator.createtablecanciones(state.canciones);
      jsApp.tabulator.createtablesemanasanteriores(state.semanasllenados);

      $('.ui.menu').find('.item').tab('change tab', 'tab-publicadores');
    }
    else {
      var mensaje = "No es archivo de copia de seguridad"
      console.log(mensaje);
      alert(mensaje)
    }
  });

  jsApp.load.loadfile('selectFiles', function (result) {
    jsApp.tabulators.tablesemanasllenar.setData(result);
    $('.ui.menu').find('.item').tab('change tab', 'tab-llenar');
  });

  document.getElementById("download-json").addEventListener("click", function () {
    jsApp.tabulators.tablesemanasllenar.download("json", "semanas para llenar " + moment().format() + ".json");

  });

  document.getElementById("process").addEventListener("click", function () {
    var state = getstate();
    state.semanasparallenar = jsApp.tabulators.tablesemanasllenar.getData();
    var semanastofill = jsApp.process.preprocesssemanas(moment, state.semanasparallenar, state.defaultsemana, state.publicadores);

    var timebetween = 100;
    setTimeout(function () {
      app.ports.clear.send("clear");
      setTimeout(function () {
        app.ports.loadCanciones.send(JSON.stringify(state.canciones));
        setTimeout(function () {
          app.ports.loadPublicadores.send(JSON.stringify(state.publicadores));
          setTimeout(function () {
            app.ports.loadSemanasAnteriores.send(JSON.stringify(state.semanasllenados));
            setTimeout(function () {
              app.ports.fillSemanas.send(JSON.stringify(semanastofill));
            }, timebetween)
          }, timebetween)
        }, timebetween)
      }, timebetween)
    }, timebetween);
  });


  // Elm Ports
  app.ports.fillSemanasCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    jsApp.download.directDownloadJSON(data, "fillSemanas" + moment().format());
  });

  app.ports.fillSemanasTemplCallBack.subscribe(function (data) {
    jsApp.template.create(saveAs, moment, data);
  });

  app.ports.programasemanalbackupCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    jsApp.download.directDownloadJSON(data, "programasemanalbackup" + moment().format());
  });

  app.ports.fillSemanaCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
  });
});