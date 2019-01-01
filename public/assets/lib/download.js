
(function () {
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

if (!window.progreunion)
window.progreunion = {};

window.progreunion.download =
{
  directDownloadJSON: directDownloadJSON 
}
}());