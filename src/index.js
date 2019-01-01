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

  progreunion.load.loadJSON('assets/json/publicadores.json', function (publicadores) {
    if (!window.publicadores)
      window.publicadores = publicadores;

    progreunion.tabulator.createtablesemanasllenar(window.publicadores)
  })

  document.getElementById("download-json").addEventListener("click", function () {
    tablesemanasllenar.download("json", "semanas para llenar " + moment().format() + ".json");

  });

  document.getElementById("process").addEventListener("click", function () {
    progreunion.load.getJsonData(function (data) {
      var canciones = data.canciones;
      var defaultsemana = data.defaultsemana;
      var publicadores = data.publicadores;

      var semanasanteriores = data.previoussemanasresult;
      var semanasparallenar = data.semanasparallenar;

      var semanastofill = progreunion.process.preprocesssemanas(semanasparallenar, defaultsemana);

      var timebetween = 100;
      setTimeout(function () {
        app.ports.clear.send("clear");
        setTimeout(function () {
          app.ports.loadCanciones.send(JSON.stringify(canciones));
          setTimeout(function () {
            app.ports.loadPublicadores.send(JSON.stringify(publicadores));
            setTimeout(function () {
              app.ports.loadSemanasAnteriores.send(JSON.stringify(semanasanteriores));
              setTimeout(function () {
                app.ports.fillSemanas.send(JSON.stringify(semanastofill));
              }, timebetween)
            }, timebetween)
          }, timebetween)
        }, timebetween)
      }, timebetween);
    });
  });

  progreunion.load.loadfile('cargarcopiaseguridad', function (result) {
    if (result.publicadores && result.canciones && result.semanasllenados) {

      var backup = result;
      window.publicadores = backup.publicadores;
      window.canciones = backup.canciones;
      window.semanasllenados = backup.semanasllenados;

      progreunion.tabulator.createtablepublicadores(window.publicadores);
      progreunion.tabulator.createtablecanciones(window.canciones);
      progreunion.tabulator.createtablesemanasanteriores(window.semanasllenados);

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