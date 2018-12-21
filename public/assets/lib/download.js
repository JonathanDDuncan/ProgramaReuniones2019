
document.addEventListener("DOMContentLoaded", function (event) {


 
    document.getElementById("download-json").addEventListener("click", function () {
        table.download("json", "data.json");
    
      });
    

      window.app.ports.fillSemanasCallBack.subscribe(function (data) {
        console.log(JSON.stringify(data));
        downloadJSON(data, "fillSemanas");
      });
    
      window.app.ports.fillSemanasTemplCallBack.subscribe(function (data) {
        console.log(JSON.stringify(data));
        downloadJSON(data, "datosprograma");
        runtemplate(data);
      });
    
      window.app.ports.programasemanalbackupCallBack.subscribe(function (data) {
        console.log(JSON.stringify(data));
        downloadJSON(data, "programasemanalbackup");
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
    
});