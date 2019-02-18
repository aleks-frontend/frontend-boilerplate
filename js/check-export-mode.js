// Adding class 'is-export-mode' to the body element in case template is in the export mode
function checkExport() {
  var isExportPage = window.location.href.indexOf('exports') > -1;
  
  if (isExportPage) {
    document.body.classList.add('is-export-mode');
  }
}
