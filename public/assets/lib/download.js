
document.addEventListener("DOMContentLoaded", function (event) {



  document.getElementById("download-json").addEventListener("click", function () {
    tablesemanasllenar.download("json", "semanas para llenar " + moment().format() + ".json");

  });


  window.app.ports.fillSemanasCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    directDownloadJSON(data, "fillSemanas" + moment().format());
  });

  window.app.ports.fillSemanasTemplCallBack.subscribe(function (data) {
    // console.log(JSON.stringify(data));
    // directDownloadJSON(data, "datosprograma" + moment().format());
    runtemplate(data);
  });

  window.app.ports.programasemanalbackupCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    directDownloadJSON(data, "programasemanalbackup" + moment().format());
  });


  var downloadJSON = function (obj, filename) {

    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = filename + '.json';
    a.innerHTML = 'download ' + filename + ' JSON';

    var container = document.getElementById('links');
    container.appendChild(a);
    var br = document.createElement('br');
    container.appendChild(br);
  };

  var directDownloadJSON = function (obj, filename) {
    var data = JSON.stringify(obj);

    var blob = new Blob([data], { type: 'text/json' }),
      e = document.createEvent('MouseEvents'),
      a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  };

});