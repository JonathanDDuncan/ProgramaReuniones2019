
document.addEventListener("DOMContentLoaded", function (event) {

  var blanksemanasllenar = function (uuid) {
    return {
      "id": uuid,
      "fechasabado": 0,
      "fechadomingo": 0,
      "sabasamblea": false,
      "domasamblea": false,
      "domhaydiscursante": false,
      "domdiscursante": "",
      "cancion1": 0,
      "tb1titulo": "",
      "lecturaversiculos": "",
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
      "smmtieneayudante1": false,
      "smmtieneayudante2": false,
      "smmtieneayudante3": false,
      "smmtieneayudante4": false,
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
    }
  };
  var tabledata = [
    blanksemanasllenar(uuidv4()), blanksemanasllenar(uuidv4()), blanksemanasllenar(uuidv4()), blanksemanasllenar(uuidv4()), blanksemanasllenar(uuidv4())
  ];

  loadJSON('assets/json/publicadores.json', function (publicadores) {
    if (!window.publicadores)
      window.publicadores = publicadores;

      createtablesemanasllenar(window.publicadores)
  })

  function createtablesemanasllenar(publicadores){
    var tablesemanasllenar = new Tabulator("#example-table", {
      height: "311px",
      layout: "fitColumns",
      // dataTree: true,
      data: tabledata,
      columns: [
        { title: "id", field: "id", visible: false },
        { title: "fecha sabado", field: "fechasabado", width: 150, editor: dateEditor },
        { title: "fecha domingo", field: "fechadomingo", width: 150, editor: dateEditor },
        { title: "sab asamblea", field: "sabasamblea", width: 150, editor: "tickCross" },
        { title: "dom asamblea", field: "domasamblea", width: 150, editor: "tickCross" },
        { title: "dom hay discursante", field: "domhaydiscursante", width: 150, editor: "tickCross" },
        { title: "dom discursante", field: "domdiscursante", width: 150, editor: "input" },
        { title: "Sabado Cancion 1", field: "cancion1", width: 150, editor: "number" },
        { title: "Tesoros Título", field: "tb1titulo", width: 150, editor: "input" },
        { title: "Consejo Lector", field: "consejolector", width: 150, editor: "number" },
        { title: "Lector Versiculos", field: "lecturaversiculos", width: 150, editor: "input" },
        { title: "smm leccion maestros", field: "smmleccionmaestros", width: 150, editor: "tickCross" },
        { title: "smm tema 1", field: "smmtema1", width: 150, editor: "input" },
        { title: "smm tema 2", field: "smmtema2", width: 150, editor: "input" },
        { title: "smm tema 3", field: "smmtema3", width: 150, editor: "input" },
        { title: "smm tema 4", field: "smmtema4", width: 150, editor: "input" },
        { title: "smm min 1", field: "smmmin1", width: 150, editor: "number" },
        { title: "smm min 2", field: "smmmin2", width: 150, editor: "number" },
        { title: "smm min 3", field: "smmmin3", width: 150, editor: "number" },
        { title: "smm min 4", field: "smmmin4", width: 150, editor: "number" },
        { title: "smm consejo 1", field: "smmconsejo1", width: 150, editor: "number" },
        { title: "smm consejo 2", field: "smmconsejo2", width: 150, editor: "number" },
        { title: "smm consejo 3", field: "smmconsejo3", width: 150, editor: "number" },
        { title: "smm consejo 4", field: "smmconsejo4", width: 150, editor: "number" },
        { title: "smm esvideo 1", field: "smmesvideo1", width: 150, editor: "tickCross" },
        { title: "smm esvideo 2", field: "smmesvideo2", width: 150, editor: "tickCross" },
        { title: "smm esvideo 3", field: "smmesvideo3", width: 150, editor: "tickCross" },
        { title: "smm esvideo 4", field: "smmesvideo4", width: 150, editor: "tickCross" },
        { title: "smm tiene ayudante 1", field: "smmtieneayudante1", width: 150, editor: "tickCross" },
        { title: "smm tiene ayudante 2", field: "smmtieneayudante2", width: 150, editor: "tickCross" },
        { title: "smm tiene ayudante 3", field: "smmtieneayudante3", width: 150, editor: "tickCross" },
        { title: "smm tiene ayudante 4", field: "smmtieneayudante4", width: 150, editor: "tickCross" },
        { title: "Sabado Cancion 2", field: "cancion2", width: 150, editor: "number" },
        { title: "nvc Título 1", field: "nvctitulo1", width: 150, editor: "input" },
        { title: "nvc mins1 ", field: "nvcmins1", width: 150, editor: "number" },
        { title: "nvc anciano 1", field: "nvcanciano1", width: 150, editor: "tickCross" },
        { title: "nvc Título2", field: "nvctitulo2", width: 150, editor: "input" },
        { title: "nvc mins 2", field: "nvcmins2", width: 150, editor: "number" },
        { title: "nvc anciano 2", field: "nvcanciano2", width: 150, editor: "tickCross" },
        { title: "Sabado Cancion 3", field: "cancion3", width: 150, editor: "number" },
        { title: "Domingo Cancion 2", field: "domcancion1", width: 150, editor: "number" },
        { title: "Domingo Cancion 3", field: "domcancion2", width: 150, editor: "number" },
        { title: "ELC Versiculos", field: "elcversiculos", width: 150, editor: "input" },
        {
          title: "ELC Narrador", field: "elcnarradorid", width: 150, editor: "select", editorParams: {
           showListOnEmpty: true, //show all values when the list is empty,
           values: converttoselectitems(publicadores),
          }
        },
        { title: "ELC Personajes", field: "elcpersonajes", width: 150, editor: "textarea", formatter: "textarea" },
      ],
    });
    window.tablesemanasllenar = tablesemanasllenar;
  };

  function converttoselectitems(items) {
    var values = {};

    items.forEach(element => {
      values[element.name] = element.name;
    });
    return values;
  };

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
});


var dateEditor = function (cell, onRendered, success, cancel) {
  //cell - the cell component for the editable cell
  //onRendered - function to call when the editor has been rendered
  //success - function to call to pass the successfuly updated value to Tabulator
  //cancel - function to call to abort the edit and return to a normal cell

  //create and style input
  var cellValue = moment(cell.getValue(), "YYYY-MM-DD").format("YYYY-MM-DD"),
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
      success(moment(input.value, "YYYY-MM-DD").format("YYYY-MM-DD"));
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


function createtablepublicadores(publicadores){
  $.tab('change tab', 'tab-publicadores');
  var tablepublicadores = new Tabulator("#table-publicadores", {
    height: "311px",
    layout: "fitColumns",
    // dataTree: true,
 
    columns: [
      { title: "id", field: "id" },
      { title: "creado", field: "creado", visible: false },
      { title: "modificado", field: "modificado", visible: false },
      { title: "Nombre", field: "name", width: 150, editor: "input" },
      { title: "Varón", field: "varon", width: 150, editor: "tickCross" },
      { title: "Anciano", field: "anciano", width: 150, editor: "tickCross" },
      { title: "Es video", field: "esvideo", width: 150, editor: "tickCross" },
      { title: "Presidente Sábado", field: "presidentesabado", width: 150, editor: "tickCross" },
      { title: "Tb1 Orador", field: "tb1orador", width: 150, editor: "tickCross" },
      { title: "Perlas", field: "perlas", width: 150, editor: "tickCross" },
      { title: "Lector  Biblia", field: "lecturabiblia", width: 150, editor: "tickCross" },
      { title: "Oración", field: "oracion", width: 150, editor: "tickCross" },
      { title: "Ayudante", field: "ayudante", width: 150, editor: "tickCross" },
      { title: "Principiante", field: "principiante", width: 150, editor: "tickCross" },
      { title: "SMM 1 Publicador", field: "smm1publicador", width: 150, editor: "tickCross" },
      { title: "SMM 2 Publicador", field: "smm2publicador", width: 150, editor: "tickCross" },
      { title: "SMM 3 Publicador", field: "smm3publicador", width: 150, editor: "tickCross" },
      { title: "SMM 4 Publicador", field: "smm4publicador", width: 150, editor: "tickCross" },
      { title: "SMM Discurso", field: "smmdiscurso", width: 150, editor: "tickCross" },
      { title: "NVC", field: "nvc", width: 150, editor: "tickCross" },
      { title: "Estudio Congregación", field: "estudiocongregacion", width: 150, editor: "tickCross" },
      { title: "Lector Estudio Congregación", field: "lectorestudiocongregacion", width: 150, editor: "tickCross" },
      { title: "Lector Atalaya", field: "lectoreatalaya", width: 150, editor: "tickCross" },
      { title: "Cámara", field: "camara", width: 150, editor: "tickCross" },
      { title: "Aparatos", field: "aparatos", width: 150, editor: "tickCross" },
      { title: "Cronómetro", field: "cronometro", width: 150, editor: "tickCross" },
      { title: "Presidente Domingo", field: "presidentedomingo", width: 150, editor: "tickCross" },
      { title: "Fecha no disponible inicio", field: "fechanodisponibleinicio", width: 150, editor: dateEditor},
      { title: "Fecha no disponible fin", field: "fechanodisponiblefin", width: 150, editor: dateEditor },
      { title: "familiaressexoopuesto", field: "familiaressexoopuesto", visible: false },
    
     
      ]
     , data: publicadores
  });
  window.tablepublicadores = tablepublicadores;
};

function createtablecanciones(canciones){
  $.tab('change tab', 'tab-canciones');
  var tablecanciones = new Tabulator("#table-canciones", {
    height: "311px",
    layout: "fitColumns",
    // dataTree: true,
   
   columns: [
      { title: "num", field: "num" , editor: "input" },
      { title: "tema", field: "tema", editor: "input"  },
      { title: "versiculo", field: "versiculo",editor: "input" },
      { title: "asignado", field: "asignado", width: 150, editor: "input" },
      { title: "idasignado", field: "idasignado", width: 150, editor: "input" },
   ],
   data: canciones
  });
  window.tablecanciones = tablecanciones;
};
function createtablesemanasanteriores(anteriores){
  $.tab('change tab', 'tab-anteriores');
  var tablesemanasanteriores = new Tabulator("#table-anteriores", {
    height: "311px",
    layout: "fitColumns",
    // dataTree: true,
    data: anteriores
    
  });
  window.tablesemanasanteriores = tablesemanasanteriores;
};
