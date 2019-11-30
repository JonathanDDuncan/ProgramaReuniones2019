(function() {
  var PizZip = require('pizzip');
  var Docxtemplater = require('docxtemplater');
  function runtemplate(saveAs, json) {
    let result = loadFile('assets/templates/S-140-S-template.docx', function(
      error,
      content
    ) {
      if (error) {
        throw error;
      }
      var zip = new PizZip(content);
      var doc = new Docxtemplater().loadZip(zip);

      doc.setData({
        cong: 'Congregación Danlí Señas',
        semanas: json
      });

      try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render();
      } catch (error) {
        var e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties
        };
        console.log(JSON.stringify({ error: e }));
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
        throw error;
      }
      var out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      }); //Output the document using Data-URI
      saveAs(
        out,
        'VIDA Y MINISTERIO CRISTIANOS ' + moment().format() + '.docx'
      );
    });
  }

  function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }

  if (!window.jsApp) window.jsApp = {};

  window.jsApp.template = {
    create: runtemplate
  };
})();
