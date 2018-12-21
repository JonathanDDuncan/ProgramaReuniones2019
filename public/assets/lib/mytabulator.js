
document.addEventListener("DOMContentLoaded", function (event) {

    var blank = function(uuid){return {
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
      }};
      var tabledata = [
        blank(uuidv4()), blank(uuidv4()), blank(uuidv4()), blank(uuidv4()), blank(uuidv4())
      ];

      
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

  loadJSON('assets/json/publicadores.json', function (publicadores) {
    window.publicadores = publicadores;
    var table = new Tabulator("#example-table", {
      height: "311px",
      // dataTree: true,
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
        { title: "lecturaversiculos", field: "lecturaversiculos", width: 150, editor: "input" },
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
        { title: "elcnarradorid", field: "elcnarradorid", width: 150, editor: "select" , editorParams:{
                 showListOnEmpty:true, //show all values when the list is empty,
          freetext:true, //allow the user to set the value of the cell to a free text entry
          allowEmpty:true, //allow empty string values
          searchFunc:function(term, values){ //search for exact matches
              var matches = []
      
              values.forEach(function(item){
                  if(item.value === term){
                      matches.push(item);
                  }
              });
      
              return matches;
          },
         
         values: converttoselectitems(publicadores) ,
        } }
      ,
        { title: "elcpersonajes", field: "elcpersonajes", editor: "textarea" },
      ],
    });
    window.table = table;
  })
  function converttoselectitems(items) {
    var values = {};

    items.forEach(element => {
            values[element.name] = element.name;
    });
    return values;
  };
  
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
});