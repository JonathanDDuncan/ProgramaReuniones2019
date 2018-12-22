import './main.css';
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

var app = Elm.Main.init({
  node: document.getElementById('root')
});
window.app = app;

registerServiceWorker();
$('.tabular.menu .item').tab();
$.tab('change tab', 'tab-llenar');