import './main.css';
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

var app = Elm.Main.init({
  node: document.getElementById('root')
});

registerServiceWorker();
$('.tabular.menu .item').tab();
$('.ui.menu').find('.item').tab('change tab', 'tab-llenar')

document.addEventListener("DOMContentLoaded", function (event) {
  var getstate = function () {
    if (!window.progreunion)
      window.progreunion = {};
    if (!window.progreunion.state)
      window.progreunion.state = {};
    return window.progreunion.state;
  }

  progreunion.load.loadCommonData(function (commonData) {
    var state = getstate();
    state.defaultsemana = commonData.defaultsemana;
    state.puntosMejoresLectoresMaestros = commonData.puntosMejoresLectoresMaestros;
  });


  progreunion.load.loadJSON('assets/json/publicadores.json', function (publicadores) {
    var state = getstate();
    
    state.publicadores = publicadores;

    progreunion.tabulator.createtablesemanasllenar(state.publicadores)
  })

  document.getElementById("download-json").addEventListener("click", function () {
    tablesemanasllenar.download("json", "semanas para llenar " + moment().format() + ".json");

  });

  document.getElementById("process").addEventListener("click", function () {
    var state = getstate();
    state.semanasparallenar = progreunion.tabulators.tablesemanasllenar.getData();     
    var semanastofill = progreunion.process.preprocesssemanas(state.semanasparallenar, state.defaultsemana, state.publicadores);

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


  progreunion.load.loadfile('cargarcopiaseguridad', function (result) {
    if (result.publicadores && result.canciones && result.semanasllenados) {

      var state = getstate();
      
      state.publicadores = result.publicadores;
      state.canciones = result.canciones;
      state.semanasllenados = result.semanasllenados;

      progreunion.tabulator.createtablepublicadores(state.publicadores);
      progreunion.tabulator.createtablecanciones(state.canciones);
      progreunion.tabulator.createtablesemanasanteriores(state.semanasllenados);

      $('.ui.menu').find('.item').tab('change tab', 'tab-publicadores');
    }
    else {
      var mensaje = "No es archivo de copia de seguridad"
      console.log(mensaje);
      alert(mensaje)
    }
  });

  progreunion.load.loadfile('selectFiles', function (result) {
    progreunion.tabulators.tablesemanasllenar.setData(result);
    $('.ui.menu').find('.item').tab('change tab', 'tab-llenar');
  });

  app.ports.fillSemanasCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    progreunion.download.directDownloadJSON(data, "fillSemanas" + moment().format());
  });

  app.ports.fillSemanasTemplCallBack.subscribe(function (data) {
    progreunion.template.create(data);
  });

  app.ports.programasemanalbackupCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    progreunion.download.directDownloadJSON(data, "programasemanalbackup" + moment().format());
  });

  app.ports.fillSemanaCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
  });
});