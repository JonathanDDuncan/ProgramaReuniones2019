var now = epochTime(new Date());

function epochTime(date) {
  return Math.trunc(date.getTime() / 1000);
};
function semanatemplate(semanadefault, semanatofill) {
  semanadefault.id = semanatofill.id;
  
  semanadefault.fechasabado = parseInt(moment(semanatofill.fechasabado, "YYYY-MM-DD").format("X"))

  semanadefault.starthour = semanatofill.starthour;
  semanadefault.startminute = semanatofill.startminute;
  semanadefault.fechadomingo =parseInt(moment(semanatofill.fechadomingo, "YYYY-MM-DD").format("X"))
  semanadefault.sabasamblea = semanatofill.sabasamblea;
  semanadefault.domasamblea = semanatofill.domasamblea;
  semanadefault.domhaydiscursante = semanatofill.domhaydiscursante;
  if (semanatofill.domdiscursante)
    semanadefault.domdiscursante = semanatofill.domdiscursante;
  semanadefault.cancion1 = semanatofill.cancion1;
  semanadefault.tb1titulo = semanatofill.tb1titulo;
  semanadefault.lecturaversiculos = semanatofill.lecturaversiculos;
  semanadefault.consejolector = semanatofill.consejolector;
  semanadefault.smmleccionmaestros = semanatofill.smmleccionmaestros;
  semanadefault.smmtema1 = semanatofill.smmtema1;
  semanadefault.smmtema2 = semanatofill.smmtema2;
  semanadefault.smmtema3 = semanatofill.smmtema3;
  semanadefault.smmtema4 = semanatofill.smmtema4;
  if (semanatofill.smmmin1)
    semanadefault.smmmin1 = semanatofill.smmmin1;
  if (semanatofill.smmmin2)
    semanadefault.smmmin2 = semanatofill.smmmin2;
  if (semanatofill.smmmin3)
    semanadefault.smmmin3 = semanatofill.smmmin3;
  if (semanatofill.smmmin4)
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
  if (semanatofill.nvctitulo1)
    semanadefault.nvctitulo1 = semanatofill.nvctitulo1
  if (semanatofill.nvcmins1)
    semanadefault.nvcmins1 = semanatofill.nvcmins1;
  if (semanatofill.nvcanciano1)
    semanadefault.nvcanciano1 = semanatofill.nvcanciano1;
  if (semanatofill.nvctitulo2)
    semanadefault.nvctitulo2 = semanatofill.nvctitulo2;
  if (semanatofill.nvcmins2)
    semanadefault.nvcmins2 = semanatofill.nvcmins2;
  if (semanatofill.nvcanciano2)
    semanadefault.nvcanciano2 = semanatofill.nvcanciano2;
  semanadefault.cancion3 = semanatofill.cancion3;
  semanadefault.domcancion2 = semanatofill.domcancion2;
  semanadefault.domcancion3 = semanatofill.domcancion3;
  semanadefault.elcversiculos = semanatofill.elcversiculos
  if (semanatofill.elcnarradorid)
    semanadefault.elcnarradorid = semanatofill.elcnarradorid
  if (semanatofill.elcpersonajes)
    semanadefault.elcpersonajes = semanatofill.elcpersonajes;
  if (semanatofill.elcpersonajeslectids)
    semanadefault.elcpersonajeslectids = semanatofill.elcpersonajeslectids;
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


  // get the id from the name
  window.publicadores.forEach(element => {
    if (element.name == semanatofill.elcnarradorid)
      semanatofill.elcnarradorid = element.id;
  });

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
