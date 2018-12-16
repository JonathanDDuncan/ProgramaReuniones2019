import './main.css';
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

var app = Elm.Main.init({
  node: document.getElementById('root')
});

registerServiceWorker();

// --------

document.addEventListener("DOMContentLoaded", function (event) {


  var blank = {
    "id": "",
    "fechasabado": 0,
    "fechadomingo": 0,
    "sabasamblea": false,
    "domasamblea": false,
    "domhaydiscursante": false,
    "domdiscursante": "",
    "cancion1": 0,
    "tb1titulo": "",
    "lecturaversículos": "",
    "consejolector": 0,
    "smmleccionmaestros": false,
    "smmtema1": "",
    "smmtema2": "",
    "smmtema3": "",
    "smmtema4": "",
    "smmmin1": 0,
    "smmmin2": 0,
    "smmmin3": 0,
    "smmmin4": 0,
    "smmconsejo1": 0,
    "smmconsejo2": 0,
    "smmconsejo3": 0,
    "smmconsejo4": 0,
    "smmesvideo1": false,
    "smmesvideo2": false,
    "smmesvideo3": false,
    "smmesvideo4": false,
    "smmtieneayudante1": true,
    "smmtieneayudante2": true,
    "smmtieneayudante3": true,
    "smmtieneayudante4": true,
    "cancion2": 0,
    "nvctitulo1": "",
    "nvcmins1": 0,
    "nvcanciano1": false,
    "nvctitulo2": "",
    "nvcmins2": 0,
    "nvcanciano2": false,
    "cancion3": 0,
    "domcancion1": 0,
    "domcancion2": 0,
    "elcversiculos": "",
    "elcnarradorid": "",
    "elcpersonajes": ""
  };
  var tabledata = [
    blank, blank, blank, blank, blank
  ];

  document.getElementById('import').onclick = function () {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
      console.log(e);
      var result = JSON.parse(e.target.result);
      var formatted = JSON.stringify(result, null, 2);
      document.getElementById('result').value = formatted;
      table.setData(result);
      // var table = new Tabulator("#example-table", {
      //   height: "311px",
      //   dataTree: true,
      //   data: result,
      //   columns: [
      //     { title: "id", field: "id", width: 150, editor: "input" },
      //     { title: "fechasabado", field: "fechasabado", width: 150, editor: dateEditor },
      //     { title: "fechadomingo", field: "fechadomingo", width: 150, editor: dateEditor },
      //     { title: "sabasamblea", field: "sabasamblea", width: 150, editor: "tickCross" },
      //     { title: "domasamblea", field: "domasamblea", width: 150, editor: "tickCross" },
      //     { title: "domhaydiscursante", field: "domhaydiscursante", width: 150, editor: "tickCross" },
      //     { title: "domdiscursante", field: "domdiscursante", width: 150, editor: "input" },
      //     { title: "cancion1", field: "cancion1", width: 150, editor: "number" },
      //     { title: "tb1titulo", field: "tb1titulo", width: 150, editor: "input" },
      //     { title: "consejolector", field: "consejolector", width: 150, editor: "number" },
      //     { title: "lecturaversículos", field: "lecturaversículos", width: 150, editor: "input" },
      //     { title: "smmleccionmaestros", field: "smmleccionmaestros", width: 150, editor: "tickCross" },
      //     { title: "smmtema1", field: "smmtema1", width: 150, editor: "input" },
      //     { title: "smmtema2", field: "smmtema2", width: 150, editor: "input" },
      //     { title: "smmtema3", field: "smmtema3", width: 150, editor: "input" },
      //     { title: "smmtema4", field: "smmtema4", width: 150, editor: "input" },
      //     { title: "smmmin1", field: "smmmin1", width: 150, editor: "number" },
      //     { title: "smmmin2", field: "smmmin2", width: 150, editor: "number" },
      //     { title: "smmmin3", field: "smmmin3", width: 150, editor: "number" },
      //     { title: "smmmin4", field: "smmmin4", width: 150, editor: "number" },
      //     { title: "smmconsejo1", field: "smmconsejo1", width: 150, editor: "number" },
      //     { title: "smmconsejo2", field: "smmconsejo2", width: 150, editor: "number" },
      //     { title: "smmconsejo3", field: "smmconsejo3", width: 150, editor: "number" },
      //     { title: "smmconsejo4", field: "smmconsejo4", width: 150, editor: "number" },
      //     { title: "smmesvideo1", field: "smmesvideo1", width: 150, editor: "tickCross" },
      //     { title: "smmesvideo2", field: "smmesvideo2", width: 150, editor: "tickCross" },
      //     { title: "smmesvideo3", field: "smmesvideo3", width: 150, editor: "tickCross" },
      //     { title: "smmesvideo4", field: "smmesvideo4", width: 150, editor: "tickCross" },
      //     { title: "smmtieneayudante1", field: "smmtieneayudante1", width: 150, editor: "tickCross" },
      //     { title: "smmtieneayudante2", field: "smmtieneayudante2", width: 150, editor: "tickCross" },
      //     { title: "smmtieneayudante3", field: "smmtieneayudante3", width: 150, editor: "tickCross" },
      //     { title: "smmtieneayudante4", field: "smmtieneayudante4", width: 150, editor: "tickCross" },
      //     { title: "cancion2", field: "cancion2", width: 150, editor: "number" },
      //     { title: "nvctitulo1", field: "nvctitulo1", width: 150, editor: "input" },
      //     { title: "nvcmins1", field: "nvcmins1", width: 150, editor: "number" },
      //     { title: "nvcanciano1", field: "nvcanciano1", width: 150, editor: "tickCross" },
      //     { title: "nvctitulo2", field: "nvctitulo2", width: 150, editor: "input" },
      //     { title: "nvcmins2", field: "nvcmins2", width: 150, editor: "number" },
      //     { title: "nvcanciano2", field: "nvcanciano2", width: 150, editor: "tickCross" },
      //     { title: "cancion3", field: "cancion3", width: 150, editor: "number" },
      //     { title: "domcancion1", field: "domcancion1", width: 150, editor: "number" },
      //     { title: "domcancion2", field: "domcancion2", width: 150, editor: "number" },
      //     { title: "elcversiculos", field: "elcversiculos", width: 150, editor: "input" },
      //     { title: "elcnarradorid", field: "elcnarradorid", width: 150, editor: "input" },
      //     { title: "elcpersonajes", field: "elcpersonajes", editor: "textarea" },


      //     // { title: "Location", field: "location", width: 130, editor: "autocomplete", editorParams: { allowEmpty: true, showListOnEmpty: true, values: true } },
      //     // { title: "Progress", field: "progress", sorter: "number", align: "left", formatter: "progress", width: 140, editor: true },
      //     // { title: "Gender", field: "gender", editor: "select", editorParams: { values: { "male": "Male", "female": "Female", "unknown": "Unknown" } } },
      //     // { title: "Rating", field: "rating", formatter: "star", align: "center", width: 100, editor: true },
      //     // { title: "Date Of Birth", field: "dob", align: "center", sorter: "date", editor: dateEditor },
      //     // { title: "Driver", field: "car", align: "center", editor: true, formatter: "tickCross" },
      //   ],
      // });
    }

    fr.readAsText(files.item(0));
  };
  var tabledatahuge = [];
  document.getElementById("download-json").addEventListener("click", function () {
    table.download("json", "data.json");

  });

  // for (var i = 1; i <= 1000; i++) {
  //   tabledatahuge.push({ id: i, name: faker.name.findName(), progress: Math.floor(Math.random() * 100) + 1, gender: faker.random.boolean() ? "male" : "female", rating: Math.floor(Math.random() * 5) + 1, col: faker.commerce.color(), dob: moment(faker.date.past()).format("DD/MM/YYYY"), lucky_no: Math.floor(Math.random() * 20) + 1 })
  // }
  var dateEditor = function (cell, onRendered, success, cancel) {
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass the successfuly updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell

    //create and style input
    var cellValue = moment(cell.getValue(), "X").format("YYYY-MM-DD"),
      input = document.createElement("input");

    input.setAttribute("type", "date");

    input.style.padding = "4px";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";

    input.value = cellValue;

    onRendered(function () {
      input.focus();
      input.style.height = "100%";
    });

    function onChange() {
      if (input.value != cellValue) {
        success(moment(input.value, "YYYY-MM-DD").format("X"));
      } else {
        cancel();
      }
    }

    //submit new value on blur or change
    input.addEventListener("change", onChange);
    input.addEventListener("blur", onChange);

    //submit new value on enter
    input.addEventListener("keydown", function (e) {
      if (e.keyCode == 13) {
        onChange();
      }

      if (e.keyCode == 27) {
        cancel();
      }
    });

    return input;
  };
  var table = new Tabulator("#example-table", {
    height: "311px",
    dataTree: true,
    data: tabledata,
    columns: [
      { title: "id", field: "id", width: 150, editor: "input" },
      { title: "fechasabado", field: "fechasabado", width: 150, editor: dateEditor },
      { title: "fechadomingo", field: "fechadomingo", width: 150, editor: dateEditor },
      { title: "sabasamblea", field: "sabasamblea", width: 150, editor: "tickCross" },
      { title: "domasamblea", field: "domasamblea", width: 150, editor: "tickCross" },
      { title: "domhaydiscursante", field: "domhaydiscursante", width: 150, editor: "tickCross" },
      { title: "domdiscursante", field: "domdiscursante", width: 150, editor: "input" },
      { title: "cancion1", field: "cancion1", width: 150, editor: "number" },
      { title: "tb1titulo", field: "tb1titulo", width: 150, editor: "input" },
      { title: "consejolector", field: "consejolector", width: 150, editor: "number" },
      { title: "lecturaversículos", field: "lecturaversículos", width: 150, editor: "input" },
      { title: "smmleccionmaestros", field: "smmleccionmaestros", width: 150, editor: "tickCross" },
      { title: "smmtema1", field: "smmtema1", width: 150, editor: "input" },
      { title: "smmtema2", field: "smmtema2", width: 150, editor: "input" },
      { title: "smmtema3", field: "smmtema3", width: 150, editor: "input" },
      { title: "smmtema4", field: "smmtema4", width: 150, editor: "input" },
      { title: "smmmin1", field: "smmmin1", width: 150, editor: "number" },
      { title: "smmmin2", field: "smmmin2", width: 150, editor: "number" },
      { title: "smmmin3", field: "smmmin3", width: 150, editor: "number" },
      { title: "smmmin4", field: "smmmin4", width: 150, editor: "number" },
      { title: "smmconsejo1", field: "smmconsejo1", width: 150, editor: "number" },
      { title: "smmconsejo2", field: "smmconsejo2", width: 150, editor: "number" },
      { title: "smmconsejo3", field: "smmconsejo3", width: 150, editor: "number" },
      { title: "smmconsejo4", field: "smmconsejo4", width: 150, editor: "number" },
      { title: "smmesvideo1", field: "smmesvideo1", width: 150, editor: "tickCross" },
      { title: "smmesvideo2", field: "smmesvideo2", width: 150, editor: "tickCross" },
      { title: "smmesvideo3", field: "smmesvideo3", width: 150, editor: "tickCross" },
      { title: "smmesvideo4", field: "smmesvideo4", width: 150, editor: "tickCross" },
      { title: "smmtieneayudante1", field: "smmtieneayudante1", width: 150, editor: "tickCross" },
      { title: "smmtieneayudante2", field: "smmtieneayudante2", width: 150, editor: "tickCross" },
      { title: "smmtieneayudante3", field: "smmtieneayudante3", width: 150, editor: "tickCross" },
      { title: "smmtieneayudante4", field: "smmtieneayudante4", width: 150, editor: "tickCross" },
      { title: "cancion2", field: "cancion2", width: 150, editor: "number" },
      { title: "nvctitulo1", field: "nvctitulo1", width: 150, editor: "input" },
      { title: "nvcmins1", field: "nvcmins1", width: 150, editor: "number" },
      { title: "nvcanciano1", field: "nvcanciano1", width: 150, editor: "tickCross" },
      { title: "nvctitulo2", field: "nvctitulo2", width: 150, editor: "input" },
      { title: "nvcmins2", field: "nvcmins2", width: 150, editor: "number" },
      { title: "nvcanciano2", field: "nvcanciano2", width: 150, editor: "tickCross" },
      { title: "cancion3", field: "cancion3", width: 150, editor: "number" },
      { title: "domcancion1", field: "domcancion1", width: 150, editor: "number" },
      { title: "domcancion2", field: "domcancion2", width: 150, editor: "number" },
      { title: "elcversiculos", field: "elcversiculos", width: 150, editor: "input" },
      { title: "elcnarradorid", field: "elcnarradorid", width: 150, editor: "input" },
      { title: "elcpersonajes", field: "elcpersonajes", editor: "textarea" },

      // { title: "Location", field: "location", width: 130, editor: "autocomplete", editorParams: { allowEmpty: true, showListOnEmpty: true, values: true } },
      // { title: "Progress", field: "progress", sorter: "number", align: "left", formatter: "progress", width: 140, editor: true },
      // { title: "Gender", field: "gender", editor: "select", editorParams: { values: { "male": "Male", "female": "Female", "unknown": "Unknown" } } },
      // { title: "Rating", field: "rating", formatter: "star", align: "center", width: 100, editor: true },
      // { title: "Date Of Birth", field: "dob", align: "center", sorter: "date", editor: dateEditor },
      // { title: "Driver", field: "car", align: "center", editor: true, formatter: "tickCross" },
    ],
  });

  //  var tabledata = [
  //   {
  //     "id": "5dc172cf-53cc-4fa1-96a7-d0ab8b5fa850",
  //     "fechasabado": 0,
  //     "fechadomingo": 0,

  //     "sabasamblea": false,
  //     "domasamblea": false,
  //     "domhaydiscursante": false,
  //     "domdiscursante": "",
  //     "cancion1": 18,
  //     "tb1titulo": "Demostremos agradecimiento",
  //     "lecturaversículos": "Ro 4:1-15",
  //     "consejolector": 4,
  //     "smmleccionmaestros": true,
  //     "smmtema1": "Video de la primera conversación",
  //     "smmtema2": "Primera",
  //     "smmtema3": "Curso bíblico",
  //     "smmtema4": "Curso bíblico",
  //     "smmmin1": 4,
  //     "smmmin2": 3,
  //     "smmmin3": 6,
  //     "smmmin4": 6,
  //     "smmconsejo1": 4,
  //     "smmconsejo2": 3,
  //     "smmconsejo3": 6,
  //     "smmconsejo4": 6,
  //     "smmesvideo1": true,
  //     "smmesvideo2": false,
  //     "smmesvideo3": false,
  //     "smmesvideo4": false,
  //     "smmtieneayudante1": true,
  //     "smmtieneayudante2": false,
  //     "smmtieneayudante3": false,
  //     "smmtieneayudante4": false,
  //     "cancion2": 39,
  //     "nvctitulo1": "Acuérdense de la esposa de Lot",
  //     "nvcmins1": 15,
  //     "nvcanciano1": false,
  //     "nvctitulo2": "",
  //     "nvcmins2": 0,
  //     "nvcanciano2": false,
  //     "cancion3": 117,
  //     "domcancion1": 77,
  //     "domcancion2": 59,
  //     "elcversiculos": "MATEO 12:15-21  MARCOS 3:7-12",
  //     "elcnarradorid": "Fran-David",
  //     "elcelcpersonajes": [
  //       "Demonio"
  //     ],
  //     "elcelcpersonajeslectid": [
  //       "Alex"
  //     ]
  //   },
  //   {
  //     "id": "36280f51-0e97-4697-aaae-04c6f4be378e",
  //     "fechasabado": 0,
  //     "fechadomingo": 0,

  //     "sabasamblea": false,
  //     "domasamblea": false,
  //     "domhaydiscursante": false,
  //     "domdiscursante": "",
  //     "cancion1": 84,
  //     "tb1titulo": "¿Qué aprendemos de la parábola de las 10 minas?",
  //     "lecturaversículos": "Ro 4:1-15",
  //     "consejolector": 5,
  //     "smmleccionmaestros": true,
  //     "smmtema1": "Video de la primera conversación",
  //     "smmtema2": "Primera",
  //     "smmtema3": "Curso bíblico",
  //     "smmtema4": "Curso bíblico",
  //     "smmmin1": 4,
  //     "smmmin2": 3,
  //     "smmmin3": 6,
  //     "smmmin4": 6,
  //     "smmconsejo1": 4,
  //     "smmconsejo2": 3,
  //     "smmconsejo3": 6,
  //     "smmconsejo4": 6,
  //     "smmesvideo1": true,
  //     "smmesvideo2": false,
  //     "smmesvideo3": false,
  //     "smmesvideo4": false,
  //     "smmtieneayudante1": true,
  //     "smmtieneayudante2": false,
  //     "smmtieneayudante3": false,
  //     "smmtieneayudante4": false,
  //     "cancion2": 83,
  //     "nvctitulo1": "Mejore sus habilidades en el ministerio: Aprenda a usar jw.org",
  //     "nvcmins1": 15,
  //     "nvcanciano1": false,
  //     "nvctitulo2": "",
  //     "nvcmins2": 0,
  //     "nvcanciano2": false,
  //     "cancion3": 116,
  //     "domcancion1": 77,
  //     "domcancion2": 59,
  //     "elcversiculos": "MATEO 12:15-21  MARCOS 3:7-12",
  //     "elcnarradorid": "Fran-David",
  //     "elcelcpersonajes": [
  //       "Demonio"
  //     ],
  //     "elcelcpersonajeslectid": [
  //       "Alex"
  //     ]
  //   },
  //   {
  //     "id": "094a789e-38e4-4e99-804d-44d6a441b484",
  //     "fechasabado": 0,
  //     "fechadomingo": 0,
  //     "sabasamblea": false,
  //     "domasamblea": false,
  //     "domhaydiscursante": false,
  //     "domdiscursante": "",
  //     "cancion1": 27,
  //     "tb1titulo": "Nuestra liberación se acerca",
  //     "lecturaversículos": "Ro 4:1-15",
  //     "consejolector": 6,
  //     "smmleccionmaestros": true,
  //     "smmtema1": "Video de la primera conversación",
  //     "smmtema2": "Primera",
  //     "smmtema3": "Curso bíblico",
  //     "smmtema4": "Curso bíblico",
  //     "smmmin1": 4,
  //     "smmmin2": 3,
  //     "smmmin3": 6,
  //     "smmmin4": 6,
  //     "smmconsejo1": 4,
  //     "smmconsejo2": 3,
  //     "smmconsejo3": 6,
  //     "smmconsejo4": 6,
  //     "smmesvideo1": true,
  //     "smmesvideo2": false,
  //     "smmesvideo3": false,
  //     "smmesvideo4": false,
  //     "smmtieneayudante1": true,
  //     "smmtieneayudante2": false,
  //     "smmtieneayudante3": false,
  //     "smmtieneayudante4": false,
  //     "cancion2": 136,
  //     "nvctitulo1": "Necesidades de la congregación",
  //     "nvcmins1": 15,
  //     "nvcanciano1": true,
  //     "nvctitulo2": "",
  //     "nvcmins2": 0,
  //     "nvcanciano2": false,
  //     "cancion3": 41,
  //     "domcancion1": 77,
  //     "domcancion2": 59,
  //     "elcversiculos": "MATEO 12:15-21  MARCOS 3:7-12",
  //     "elcnarradorid": "Fran-David",
  //     "elcelcpersonajes": [
  //       "Demonio"
  //     ],
  //     "elcelcpersonajeslectid": [
  //       "Alex"
  //     ]
  //   },
  //   {
  //     "id": "d47f8578-cf2e-4880-aec3-8463f2ad94df",
  //     "fechasabado": 0,
  //     "fechadomingo": 0,
  //     "sabasamblea": false,
  //     "domasamblea": false,
  //     "domhaydiscursante": false,
  //     "domdiscursante": "",
  //     "cancion1": 130,
  //     "tb1titulo": "Estemos dispuestos a perdonar",
  //     "lecturaversículos": "Ro 4:1-15",
  //     "consejolector": 7,
  //     "smmleccionmaestros": true,
  //     "smmtema1": "Video de la primera conversación",
  //     "smmtema2": "Primera",
  //     "smmtema3": "Curso bíblico",
  //     "smmtema4": "Curso bíblico",
  //     "smmmin1": 4,
  //     "smmmin2": 3,
  //     "smmmin3": 6,
  //     "smmmin4": 6,
  //     "smmconsejo1": 4,
  //     "smmconsejo2": 3,
  //     "smmconsejo3": 6,
  //     "smmconsejo4": 6,
  //     "smmesvideo1": true,
  //     "smmesvideo2": false,
  //     "smmesvideo3": false,
  //     "smmesvideo4": false,
  //     "smmtieneayudante1": true,
  //     "smmtieneayudante2": false,
  //     "smmtieneayudante3": false,
  //     "smmtieneayudante4": false,
  //     "cancion2": 20,
  //     "nvctitulo1": "Jesús también murió por nuestros hermanos",
  //     "nvcmins1": 15,
  //     "nvcanciano1": false,
  //     "nvctitulo2": "",
  //     "nvcmins2": 0,
  //     "nvcanciano2": false,
  //     "cancion3": 82,
  //     "domcancion1": 77,
  //     "domcancion2": 59,
  //     "elcversiculos": "MATEO 12:15-21  MARCOS 3:7-12",
  //     "elcnarradorid": "Fran-David",
  //     "elcelcpersonajes": [
  //       "Demonio"
  //     ],
  //     "elcelcpersonajeslectid": [
  //       "Alex"
  //     ]
  //   }
  // ];
});

document.addEventListener("DOMContentLoaded", function (event) {




  function epochTime(date) {
    return Math.trunc(date.getTime() / 1000);
  };

  var now = epochTime(new Date());

  function semanatemplate(semanadefault, semanatofill) {
    semanadefault.id = semanatofill.id;
    semanadefault.fecha = semanatofill.fecha;

    semanadefault.starthour = semanatofill.starthour;
    semanadefault.startminute = semanatofill.startminute;
    semanadefault.fechadomingo = semanatofill.fechadomingo;
    semanadefault.sabasamblea = semanatofill.sabasamblea;
    semanadefault.domasamblea = semanatofill.domasamblea;
    semanadefault.domhaydiscursante = semanatofill.domhaydiscursante;
    semanadefault.domdiscursante = semanatofill.domdiscursante;
    semanadefault.cancion1 = semanatofill.cancion1;
    semanadefault.tb1titulo = semanatofill.tb1titulo;
    semanadefault.lecturaversículos = semanatofill.lecturaversículos;
    semanadefault.consejolector = semanatofill.consejolector;
    semanadefault.smmleccionmaestros = semanatofill.smmleccionmaestros;
    semanadefault.smmtema1 = semanatofill.smmtema1;
    semanadefault.smmtema2 = semanatofill.smmtema2;
    semanadefault.smmtema3 = semanatofill.smmtema3;
    semanadefault.smmtema4 = semanatofill.smmtema4;
    semanadefault.smmmin1 = semanatofill.smmmin1;
    semanadefault.smmmin2 = semanatofill.smmmin2;
    semanadefault.smmmin3 = semanatofill.smmmin3;
    semanadefault.smmmin4 = semanatofill.smmmin4;
    semanadefault.smmconsejo1 = semanatofill.smmconsejo1;
    semanadefault.smmconsejo2 = semanatofill.smmconsejo2;
    semanadefault.smmconsejo3 = semanatofill.smmconsejo3;
    semanadefault.smmconsejo4 = semanatofill.smmconsejo4;
    semanadefault.smmesvideo1 = semanatofill.smmesvideo1;
    semanadefault.smmesvideo2 = semanatofill.smmesvideo2;
    semanadefault.smmesvideo3 = semanatofill.smmesvideo3;
    semanadefault.smmesvideo4 = semanatofill.smmesvideo4;
    semanadefault.smmtieneayudante1 = semanatofill.smmtieneayudante1;
    semanadefault.smmtieneayudante2 = semanatofill.smmtieneayudante2;
    semanadefault.smmtieneayudante3 = semanatofill.smmtieneayudante3;
    semanadefault.smmtieneayudante4 = semanatofill.smmtieneayudante4;
    semanadefault.cancion2 = semanatofill.cancion2;
    semanadefault.nvctitulo1 = semanatofill.nvctitulo1
    semanadefault.nvcmins1 = semanatofill.nvcmins1;
    semanadefault.nvcanciano1 = semanatofill.nvcanciano1;
    semanadefault.nvctitulo2 = semanatofill.nvctitulo2;
    semanadefault.nvcmins2 = semanatofill.nvcmins2;
    semanadefault.nvcanciano2 = semanatofill.nvcanciano2;
    semanadefault.cancion3 = semanatofill.cancion3;
    semanadefault.domcancion1 = semanatofill.domcancion1;
    semanadefault.domcancion2 = semanatofill.domcancion2;
    semanadefault.elcversiculos = semanatofill.elcversiculos
    semanadefault.elcnarradorid = semanatofill.elcnarradorid
    semanadefault.elcelcpersonajes = semanatofill.elcelcpersonajes;
    semanadefault.elcelcpersonajeslectids = semanatofill.elcelcpersonajeslectids;
    return semanadefault;
  }

  function setcreatemodifieddates(defsemana) {
    var semanatofill = JSON.parse(JSON.stringify(defsemana));
    semanatofill.creado = now;
    semanatofill.modificado = now;
    return semanatofill;
  };

  function postsemanaprocess(semanatofill) {

    if (semanatofill.sabasamblea)
      semanatofill.sabasambleamensage = "Hay asamblea";
    else
      semanatofill.sabasambleamensage = "";
    if (semanatofill.domasamblea)
      semanatofill.domasambleamensage = "Hay asamblea";
    else
      semanatofill.domasambleamensage = "";

    if (!semanatofill.starthour) semanatofill.starthour = 15;
    if (!semanatofill.startminute) semanatofill.startminute = 0;

    return semanatofill;
  };

  function process(arr, defaultsemana) {
    var semanas = []

    for (var i = 0, len = arr.length; i < len; i++) {
      var semana = postsemanaprocess(semanatemplate(setcreatemodifieddates(defaultsemana), arr[i]));
      semanas.push(semana);
    }

    return semanas;
  };

  app.ports.fillSemanaCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
  });

  app.ports.fillSemanasCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    downloadJSON(data, "fillSemanas");
  });

  app.ports.fillSemanasTemplCallBack.subscribe(function (data) {
    console.log(JSON.stringify(data));
    downloadJSON(data, "datosprograma");
  });

  app.ports.programasemanalbackupCallBack.subscribe(function (data) {
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
  function getsemanasparallenar(callback) {
    loadJSON('assets/json/semanasparallenar.json', function (json) {
      callback(json);
    })
  };


  function loadCommonData(callback) {
    loadJSON('assets/json/commonData.json', function (json) {
      callback(json);
    })
  };

  function loadBackupData(callback) {
    loadJSON('assets/json/programasemanalbackup.json', function (json) {
      var data = {};
      data.publicadores = json.publicadores;
      data.canciones = json.canciones;
      data.previoussemanasresult = json.semanasllenados;
      data.ultimaActualizacion = json.ultimaActualizacion;

      callback(data);
    })
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

  function fillData(app, data) {
    var canciones = data.canciones;
    var defaultsemana = data.defaultsemana;
    var publicadores = data.publicadores;

    var semanasanteriores = data.previoussemanasresult;
    var semanasparallenar = data.semanasparallenar;

    var semanastofill = process(semanasparallenar, defaultsemana);

    var timebetween = 100;
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
    }, timebetween);
  }

  // For testing
  getJsonData(function (data) {
    fillData(app, data);
  });
});