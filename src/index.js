import './main.css';
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

var app = Elm.Main.init({
  node: document.getElementById('root')
});
window.app = app;

registerServiceWorker();

document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById("process").addEventListener("click", function () {
      getJsonData(function (data) {
        fillData(app, data);
      });
    });
  });