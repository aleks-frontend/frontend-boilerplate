// PLACE CUSTOM JS SCRIPTS HERE

//--------------------------- crop and bleed -----------------------------------

var cropImage = 'https://outfit-v2-exports-production.s3-accelerate.amazonaws.com/media_library_items/bdb964a7c7fdc5ebc8bbde9204b62464/crop.svg'

Array.prototype.slice.call(document.querySelectorAll('.page'))
.forEach(function(page) {
    var parser = new DOMParser();
  	const pageHeight = '100vh'; /* Use this for Renderer 1 */
    /* const pageHeight = window.showCrop ? 'calc(100vh - 1px)' : '100vh'; */ /* Use this for Renderer 2 */
    page.style.cssText = `overflow: hidden; position: relative; height: ${pageHeight}; width: 100vw`;
    if ( window.showCrop ) document.body.classList.add('show-crop');

    var cropString = (
    '<div class="crop-marks">' +
    '<img style="height: 28.81px; width: 28.81px; position: absolute; top: 0; left: 0;" src="'+cropImage+'">' +
    '<img style="height: 28.81px; width: 28.81px; transform: rotate(90deg); position: absolute; top: 0; right: 0;" src="'+cropImage+'">' +
    '<img style="height: 28.81px; width: 28.81px; transform: rotate(180deg); position: absolute; bottom: 0; right: 0;" src="'+cropImage+'">' +
    '<img style="height: 28.81px; width: 28.81px; transform: rotate(270deg); position: absolute; bottom: 0; left: 0;" src="'+cropImage+'">' +
    '</div>'
    )

    var cropNode = parser.parseFromString(cropString, "text/html").body.firstChild;

    !!window.showCrop && page.insertBefore(cropNode, null);
}
);

// Fix for the resizable background images - fullscreen and digital vairaitons only
function checkCrop() {
  if (window.showCrop === true) {
  } else {
    [].forEach.call(document.querySelectorAll('.outfit-resizable-background'), function (el) {
      el.parentNode.style.left = '0';
      el.parentNode.style.right = '0';
      el.parentNode.style.top = '0';
      el.parentNode.style.bottom = '0';
      el.parentNode.style.width = '100%';
      el.parentNode.style.height = '100%';
    });
  }
}

Array.prototype.slice.call(document.querySelectorAll('.bleed'))
.forEach(function(bleed) {
    bleed.style.cssText = !!window.showCrop 
    ? 'position: absolute; top: 4.41mm; right: 4.41mm; bottom: 4.41mm; left: 4.41mm;'
    : 'position: absolute; top: -3mm; right: -3mm; bottom: -3mm; left: -3mm';
});   

// setSize

window.addEventListener("resize", setSize);

function setSize() {
    const vw = (showCrop ? window.innerWidth : window.innerWidth + 57.62) / 100;
    const vh = (showCrop ? window.innerHeight : window.innerHeight + 57.62) / 100;
    const vmin = Math.min(vw, vh);
    const vmax = Math.max(vw, vh);
    
    // Saving the preliminary font size calculation
    const preliminaryCalc = (vmin * 2) + (vmax * 1.4) + (vh * 2);
  
    // Checking if the document is currently in export mode
    const isExportMode = window.location.href.indexOf('exports') > -1;
  
    // Checking if the active browser is Firefox
    const isFirefox = navigator.userAgent.includes('Firefox');
    
    // Grabbing the data-export-font-reduce-by-percent from the body element
    const exportReduceVal = document.body.dataset.reduceExportFontSizeByPercent === undefined ? 0 : parseFloat(document.body.dataset.reduceExportFontSizeByPercent);
  
    // Grabbing the data-firefox-font-reduce-by-percent from the body element
    const firefoxReduceVal = document.body.dataset.reduceFirefoxFontSizeByPercent === undefined ? 0 : parseFloat(document.body.dataset.reduceFirefoxFontSizeByPercent);
  
	const exportModeFontSize = preliminaryCalc - (exportReduceVal / 100 * preliminaryCalc);
	const firefoxFontSize = preliminaryCalc - (firefoxReduceVal / 100 * preliminaryCalc);  
  
    // Reducing the preliminaryCalc value by reduceVal in export mode and in Firefox preview mode
    const finalCalc = isExportMode ?  exportModeFontSize : ( isFirefox ? firefoxFontSize : preliminaryCalc);
  
    document.documentElement.style.fontSize = `${finalCalc}px`;
}

setSize();

// Check if current browser is Firefox
function firefoxCheck() {
  if ( navigator.userAgent.includes('Firefox') ) document.body.classList.add('is-firefox');
}

firefoxCheck();

// Detecting if user is on MAC operating system
function detectSystem() {
  const isMac = window.navigator.appVersion.includes('Mac');
  if ( isMac ) document.body.classList.add('is-mac');
}

detectSystem();