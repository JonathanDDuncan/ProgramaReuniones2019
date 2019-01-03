(function () {
  var Tabulator = require('tabulator-tables');
  var tabulators = {};
  var blanksemanasllenar = function (uuid) {
    return {
      "id": uuid,
      "fechasabado": 0,
      "fechadomingo": 0,
      "starthour": 15,
      "startminute": 0,
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
      "domcancion2": 0,
      "domcancion3": 0,
      "elcversiculos": "",
      "elcnarradorid": "",
      "elcpersonajes": ""
    }
  };
  
  function createtablesemanasllenar(publicadores) {
    publicadores = sortpublicadores(publicadores);
    var tablesemanasllenar = new Tabulator("#example-table", {
      height: "311px",
      layout: "fitColumns",
      // dataTree: true,
      data: [],
      columns: [
        {
          formatter: deleteRow, width: 100, align: "center", cellClick: function (e, cell) {
            var r = confirm("Esta seguro que desea borrar esta semana?");
            if (r == true) {
              cell.getRow()._row.delete();
            }
          }
        },
        { title: "id", field: "id", visible: false },
        { title: "fecha sabado", field: "fechasabado", width: 150, editor: dateEditor("YYYY-MM-DD") },
        { title: "fecha domingo", field: "fechadomingo", width: 150, editor: dateEditor("YYYY-MM-DD") },
        { title: "Sábado hora inicio", field: "starthour", width: 150, editor: "number" },
        { title: "Sábado minutos inicio", field: "startminute", width: 150, editor: "number" },
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
        { title: "Domingo Cancion 2", field: "domcancion2", width: 150, editor: "number" },
        { title: "Domingo Cancion 3", field: "domcancion3", width: 150, editor: "number" },
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


    tabulators.tablesemanasllenar = tablesemanasllenar;
  };

  var addRow = function (tablename) {
    if (tablename == "tablesemanasllenar")
      jsApp.tabulators.tablesemanasllenar.addRow(blanksemanasllenar());
    else {
      if (!jsApp.tabulators[tablename])
        createtable(tablename);
      if (jsApp.tabulators[tablename])
        jsApp.tabulators[tablename].addRow({ id: uuidv4() });
    }
  }

  function createtable(tablename) {
    if (tablename == "tablesemanasllenar")
      createtablesemanasllenar([]);
    if (tablename == "tablepublicadores")
      createtablepublicadores([]);
    if (tablename == "tablecanciones")
      createtablecanciones([]);
    if (tablename == "tablesemanasanteriores")
      createtablesemanasanteriores([]);
  }

  var deleteRow = function (cell, formatterParams, onRendered) { //plain text value
    return "<button ><i class='fa fa-trash'></i> Delete</button>";
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

  function sortpublicadores(publicadores) {
    publicadores.sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
    return publicadores;
  };

  var dateEditor = function (inputformat) {
    return function (cell, onRendered, success, cancel) {
      //cell - the cell component for the editable cell
      //onRendered - function to call when the editor has been rendered
      //success - function to call to pass the successfuly updated value to Tabulator
      //cancel - function to call to abort the edit and return to a normal cell

      //create and style input
      var cellValue = moment(cell.getValue(), inputformat).format("YYYY-MM-DD"),
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
          success(moment(input.value, "YYYY-MM-DD").format(inputformat));
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
  }

  function createtablepublicadores(publicadores) {
    publicadores = sortpublicadores(publicadores);
    $('.ui.menu').find('.item').tab('change tab', 'tab-publicadores')
    var tablepublicadores = new Tabulator("#table-publicadores", {
      height: "311px",
      layout: "fitData",
      // dataTree: true,

      columns: [
        {
          formatter: deleteRow, width: 100, align: "center", cellClick: function (e, cell) {
            var r = confirm("Esta seguro que desea borrar este publicador?");
            if (r == true) {
              cell.getRow()._row.delete();
            }
          }
        },
        { title: "id", field: "id" },
        { title: "creado", field: "creado", visible: false },
        { title: "modificado", field: "modificado", visible: false },
        { title: "Nombre", field: "name", editor: "input" },
        { title: "Varón", field: "varon", editor: "tickCross" },
        { title: "Anciano", field: "anciano", editor: "tickCross" },
        { title: "Es video", field: "esvideo", editor: "tickCross" },
        { title: "Presidente Sábado", field: "presidentesabado", editor: "tickCross" },
        { title: "Tb1 Orador", field: "tb1orador", editor: "tickCross" },
        { title: "Perlas", field: "perlas", editor: "tickCross" },
        { title: "Lector  Biblia", field: "lecturabiblia", editor: "tickCross" },
        { title: "Oración", field: "oracion", editor: "tickCross" },
        { title: "Ayudante", field: "ayudante", editor: "tickCross" },
        { title: "Principiante", field: "principiante", editor: "tickCross" },
        { title: "SMM 1 Publicador", field: "smm1publicador", editor: "tickCross" },
        { title: "SMM 2 Publicador", field: "smm2publicador", editor: "tickCross" },
        { title: "SMM 3 Publicador", field: "smm3publicador", editor: "tickCross" },
        { title: "SMM 4 Publicador", field: "smm4publicador", editor: "tickCross" },
        { title: "SMM Discurso", field: "smmdiscurso", editor: "tickCross" },
        { title: "NVC", field: "nvc", editor: "tickCross" },
        { title: "Estudio Congregación", field: "estudiocongregacion", editor: "tickCross" },
        { title: "Lector Estudio Congregación", field: "lectorestudiocongregacion", editor: "tickCross" },
        { title: "Cámara", field: "camara", editor: "tickCross" },
        { title: "Aparatos", field: "aparatos", editor: "tickCross" },
        { title: "Cronómetro", field: "cronometro", editor: "tickCross" },
        { title: "Presidente Domingo", field: "presidentedomingo", editor: "tickCross" },
        { title: "Fecha no disponible inicio", field: "fechanodisponibleinicio", editor: dateEditor("X") },
        { title: "Fecha no disponible fin", field: "fechanodisponiblefin", editor: dateEditor("X") },
        { title: "familiaressexoopuesto", field: "familiaressexoopuesto", visible: false },


      ]
      , data: publicadores
    });
    tabulators.tablepublicadores = tablepublicadores;
  };

  function createtablecanciones(canciones) {
    $('.ui.menu').find('.item').tab('change tab', 'tab-canciones')

    var tablecanciones = new Tabulator("#table-canciones", {
      height: "311px",
      layout: "fitData",
      // dataTree: true,

      columns: [
        {
          formatter: deleteRow, width: 100, align: "center", cellClick: function (e, cell) {
            var r = confirm("Esta seguro que desea borrar esta canción?");
            if (r == true) {
              cell.getRow()._row.delete();
            }
          }
        },
        { title: "num", field: "num", editor: "input" },
        { title: "tema", field: "tema", editor: "input" },
        { title: "versiculo", field: "versiculo", editor: "input" },
        { title: "asignado", field: "asignado", editor: "input" },
        { title: "idasignado", field: "idasignado", editor: "input" },
      ],
      data: canciones
    });
    tabulators.tablecanciones = tablecanciones;
  };
  function createtablesemanasanteriores(anteriores) {
    $('.ui.menu').find('.item').tab('change tab', 'tab-anteriores')

    var tablesemanasanteriores = new Tabulator("#table-anteriores", {
      height: "311px",
      layout: "fitData",
      // dataTree: true,
      columns: [
        {
          formatter: deleteRow, width: 100, align: "center", cellClick: function (e, cell) {
            var r = confirm("Esta seguro que desea borrar esta semana anterior?");
            if (r == true) {
              cell.getRow()._row.delete();
            }
          }
        },
        { title: "id", field: "id", editor: "input" },
        { title: "creado", field: "creado", visible: false, editor: dateEditor("X") },
        { title: "modificado", field: "modificado", visible: false, editor: dateEditor("X") },
        { title: "starthour", field: "starthour", editor: "number" },
        { title: "startminute", field: "startminute", editor: "number" },
        { title: "sabado asamblea", field: "sabasamblea", editor: "tickCross" },
        { title: "sabado asamblea mensage", field: "sabasambleamensage", editor: "input" },
        { title: "fechasabado", field: "fechasabado", editor: "input" },
        { title: "fechadomingo", field: "fechadomingo", editor: "input" },
        { title: "presidenteid", field: "presidenteid", editor: "input" },
        { title: "presidentename", field: "presidentename", editor: "input" },
        { title: "cancion1", field: "cancion1", editor: "input" },
        { title: "cancion1id", field: "cancion1id", editor: "input" },
        { title: "cancion1name", field: "cancion1name", editor: "input" },
        { title: "cancion1tema", field: "cancion1tema", editor: "input" },
        { title: "cancion1versiculo", field: "cancion1versiculo", editor: "input" },
        { title: "oracion1id", field: "oracion1id", editor: "input" },
        { title: "oracion1name", field: "oracion1name", editor: "input" },
        { title: "tb1titulo", field: "tb1titulo", editor: "input" },
        { title: "tb1oradorid", field: "tb1oradorid", editor: "input" },
        { title: "tb1oradorname", field: "tb1oradorname", editor: "input" },
        { title: "tbperlasoradorid", field: "tbperlasoradorid", editor: "input" },
        { title: "tbperlasoradorname", field: "tbperlasoradorname", editor: "input" },
        { title: "consejolector", field: "consejolector", editor: "input" },
        { title: "tblectorid", field: "tblectorid", editor: "input" },
        { title: "tblectorname", field: "tblectorname", editor: "input" },
        { title: "lecturaversiculos", field: "lecturaversiculos", editor: "input" },
        { title: "smmleccionmaestros", field: "smmleccionmaestros", editor: "tickCross" },
        { title: "smmtema1", field: "smmtema1", editor: "input" },
        { title: "smmtema2", field: "smmtema2", editor: "input" },
        { title: "smmtema3", field: "smmtema3", editor: "input" },
        { title: "smmtema4", field: "smmtema4", editor: "input" },
        { title: "smmmin1", field: "smmmin1", editor: "input" },
        { title: "smmmin2", field: "smmmin2", editor: "input" },
        { title: "smmmin3", field: "smmmin3", editor: "input" },
        { title: "smmmin4", field: "smmmin4", editor: "input" },
        { title: "smmconsejo1", field: "smmconsejo1", editor: "input" },
        { title: "smmconsejo2", field: "smmconsejo2", editor: "input" },
        { title: "smmconsejo3", field: "smmconsejo3", editor: "input" },
        { title: "smmconsejo4", field: "smmconsejo4", editor: "input" },
        { title: "smmesvideo1", field: "smmesvideo1", editor: "tickCross" },
        { title: "smmesvideo2", field: "smmesvideo2", editor: "tickCross" },
        { title: "smmesvideo3", field: "smmesvideo3", editor: "tickCross" },
        { title: "smmesvideo4", field: "smmesvideo4", editor: "tickCross" },
        { title: "smmtieneayudante1", field: "smmtieneayudante1", editor: "tickCross" },
        { title: "smmtieneayudante2", field: "smmtieneayudante2", editor: "tickCross" },
        { title: "smmtieneayudante3", field: "smmtieneayudante3", editor: "tickCross" },
        { title: "smmtieneayudante4", field: "smmtieneayudante4", editor: "tickCross" },
        { title: "smm1esid", field: "smm1esid", editor: "input" },
        { title: "smm1esname", field: "smm1esname", editor: "input" },
        { title: "smm1ayuid", field: "smm1ayuid", editor: "input" },
        { title: "smm1ayuname", field: "smm1ayuname", editor: "input" },
        { title: "smm2esid", field: "smm2esid", editor: "input" },
        { title: "smm2esname", field: "smm2esname", editor: "input" },
        { title: "smm2ayuid", field: "smm2ayuid", editor: "input" },
        { title: "smm2ayuname", field: "smm2ayuname", editor: "input" },
        { title: "smm3esid", field: "smm3esid", editor: "input" },
        { title: "smm3esname", field: "smm3esname", editor: "input" },
        { title: "smm3ayuname", field: "smm3ayuname", editor: "input" },
        { title: "smm4esid", field: "smm4esid", editor: "input" },
        { title: "smm4esname", field: "smm4esname", editor: "input" },
        { title: "smm4ayuid", field: "smm4ayuid", editor: "input" },
        { title: "smm4ayuname", field: "smm4ayuname", editor: "input" },
        { title: "presentacionesmesid", field: "presentacionesmesid", editor: "input" },
        { title: "presentacionesmesname", field: "presentacionesmesname", editor: "input" },
        { title: "cancion2", field: "cancion2", editor: "input" },
        { title: "cancion2id", field: "cancion2id", editor: "input" },
        { title: "cancion2name", field: "cancion2name", editor: "input" },
        { title: "cancion2tema", field: "cancion2tema", editor: "input" },
        { title: "cancion2versiculo", field: "cancion2versiculo", editor: "input" },
        { title: "nvctitulo1", field: "nvctitulo1", editor: "input" },
        { title: "nvcmins1", field: "nvcmins1", editor: "input" },
        { title: "nvcorador1id", field: "nvcorador1id", editor: "input" },
        { title: "nvcorador1name", field: "nvcorador1name", editor: "input" },
        { title: "nvcanciano1", field: "nvcanciano1", editor: "input" },
        { title: "nvctitulo2", field: "nvctitulo2", editor: "input" },
        { title: "nvcmins2", field: "nvcmins2", editor: "input" },
        { title: "nvcorador2id", field: "nvcorador2id", editor: "input" },
        { title: "nvcorador2name", field: "nvcorador2name", editor: "input" },
        { title: "nvcanciano2", field: "nvcanciano2", editor: "input" },
        { title: "nvcestudiooradorid", field: "nvcestudiooradorid", editor: "input" },
        { title: "nvcestudiooradorname", field: "nvcestudiooradorname", editor: "input" },
        { title: "nvcestudiolectorid", field: "nvcestudiolectorid", editor: "input" },
        { title: "nvcestudiolectorname", field: "nvcestudiolectorname", editor: "input" },
        { title: "cancion3", field: "cancion3", editor: "input" },
        { title: "cancion3id", field: "cancion3id", editor: "input" },
        { title: "cancion3name", field: "cancion3name", editor: "input" },
        { title: "cancion3tema", field: "cancion3tema", editor: "input" },
        { title: "cancion3versiculo", field: "cancion3versiculo", editor: "input" },
        { title: "oracion2id", field: "oracion2id", editor: "input" },
        { title: "oracion2name", field: "oracion2name", editor: "input" },
        { title: "camaraid", field: "camaraid", editor: "input" },
        { title: "camaraname", field: "camaraname", editor: "input" },
        { title: "aparatosid", field: "aparatosid", editor: "input" },
        { title: "aparatosname", field: "aparatosname", editor: "input" },
        { title: "cronometroid", field: "cronometroid", editor: "input" },
        { title: "cronometroname", field: "cronometroname", editor: "input" },
        { title: "domasamblea", field: "domasamblea", editor: "tickCross" },
        { title: "domasambleamensage", field: "domasambleamensage", editor: "input" },
        { title: "dompresidenteid", field: "dompresidenteid", editor: "input" },
        { title: "dompresidentename", field: "dompresidentename", editor: "input" },
        { title: "domdiscursante", field: "domdiscursante", editor: "input" },
        { title: "domhaydiscursante", field: "domhaydiscursante", editor: "tickCross" },
        { title: "domcancion2", field: "domcancion2", editor: "input" },
        { title: "domcancion2id", field: "domcancion2id", editor: "input" },
        { title: "domcancion2name", field: "domcancion2name", editor: "input" },
        { title: "domcancion2tema", field: "domcancion2tema", editor: "input" },
        { title: "domcancion2versiculo", field: "domcancion2versiculo", editor: "input" },
        { title: "domcancion3", field: "domcancion3", editor: "input" },
        { title: "domcancion3id", field: "domcancion3id", editor: "input" },
        { title: "domcancion3name", field: "domcancion3name", editor: "input" },
        { title: "domcancion3tema", field: "domcancion3tema", editor: "input" },
        { title: "domcancion3versiculo", field: "domcancion3versiculo", editor: "input" },
        { title: "elcversiculos", field: "elcversiculos", editor: "input" },
        { title: "elcnarradorid", field: "elcnarradorid", editor: "input" },
        { title: "elcnarradorname", field: "elcnarradorname", editor: "input" },
        { title: "elcpersonajes", field: "elcpersonajes", editor: "textarea" },
      ]
      , data: anteriores

    });

    tabulators.tablesemanasanteriores = tablesemanasanteriores;
  };

  if (!window.jsApp)
    window.jsApp = {};

  window.jsApp.tabulator =
    {
      createtablesemanasllenar: createtablesemanasllenar,
      createtablepublicadores: createtablepublicadores,
      createtablecanciones: createtablecanciones,
      createtablesemanasanteriores: createtablesemanasanteriores,
      addRow: addRow
    }

  window.jsApp.tabulators = tabulators

}());