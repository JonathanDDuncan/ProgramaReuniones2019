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

  document.getElementById("download-json").addEventListener("click", function () {
    tablesemanasllenar.download("json", "semanas para llenar " + moment().format() + ".json");

  });

  document.getElementById("process").addEventListener("click", function () {
    getJsonData(function (data) {
      fillData(app, data);
    });
  });

  loadfile('cargarcopiaseguridad', function (result) {
    if (result.publicadores && result.canciones && result.semanasllenados ){
      loadbackup(result);
      $('.ui.menu').find('.item').tab('change tab', 'tab-publicadores');
    }
    else{
      var mensaje = "No es archivo de copia de seguridad"
      console.log("No es archivo de copia de seguridad");
      alert("No es archivo de copia de seguridad")
    }
  });

  loadfile('selectFiles', function (result) {
    tablesemanasllenar.setData(result);
    $('.ui.menu').find('.item').tab('change tab', 'tab-llenar');
  });

});

// Setup ports
document.addEventListener("DOMContentLoaded", function (event) {

  app.ports.fillSemanasCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    directDownloadJSON(data, "fillSemanas" + moment().format());
  });

  app.ports.fillSemanasTemplCallBack.subscribe(function (data) {
    runtemplate(data);
  });

  app.ports.programasemanalbackupCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    directDownloadJSON(data, "programasemanalbackup" + moment().format());
  });

  app.ports.fillSemanaCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
  });
});