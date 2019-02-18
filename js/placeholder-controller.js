// Dynamic controls for the placeholder image
function lockPlaceholder() {
  this.parentNode.classList.toggle('u-placeholder-locked');
}

function injectHTML() {
  const bleeds = document.querySelectorAll('.bleed');
  const placeholderBgs = document.querySelectorAll('.placeholderMaster__item');  
  const placeholderOpacity = document.querySelector('.placeholderMaster').dataset.opacity;

  // Prepending placeholder trigger and container to every bleed element
  bleeds.forEach((bleed, index) => {
    // Creating placeholder trigger element
    const placeholderTrigger = document.createElement('div');  
    placeholderTrigger.classList.add('placeholder__trigger');
    placeholderTrigger.innerHTML = `
      <svg viewBox="0 0 144 100" preserveAspectRatio xmlns="http://www.w3.org/2000/svg">
      <g>
      <title>background</title>
      <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
      </g>
      <g>
      <title>Layer 1</title>
      <path fill="#ffffff" id="svg_1" d="m89.668,38.786c0,-10.773 -8.731,-19.512 -19.51,-19.512s-19.512,8.736 -19.512,19.512c0,10.774 8.732,19.511 19.512,19.511c10.776,0 19.51,-8.736 19.51,-19.511m38.684,-0.059c-13.315,17.599 -34.426,28.972 -58.193,28.972c-23.77,0 -44.879,-11.373 -58.194,-28.972c13.314,-17.598 34.424,-28.971 58.193,-28.971c23.769,0 44.878,11.373 58.194,28.971m11.962,0.033c-14.648,-23.282 -40.589,-38.76 -70.156,-38.76s-55.51,15.478 -70.158,38.76c14.648,23.312 40.591,38.81 70.158,38.81s55.508,-15.498 70.156,-38.81"/>
      </g>
      </svg>
      `;

    // Creating placeholder container element
    const placeholderContainer = document.createElement('div');
    placeholderContainer.classList.add('placeholder__container');
    placeholderContainer.innerHTML = `<div class="placeholder"></div>`;

    bleed.classList.add('u-placeholder-locked');
    bleed.prepend(placeholderContainer);
    const placeholder = placeholderContainer.querySelector('.placeholder');

    if ( placeholderBgs[index] !== undefined ) {
      placeholder.style.backgroundImage = `url(${placeholderBgs[index].dataset.bg})`;
      placeholder.style.opacity = placeholderOpacity; 
    }

    bleed.prepend(placeholderTrigger);    
  });
}

function placeholderController() {
  injectHTML();

  const lockButtons = document.querySelectorAll('.placeholder__trigger');
  const placeholders = document.querySelectorAll('.placeholder');

  lockButtons.forEach(lockButton => {
    lockButton.addEventListener('click', lockPlaceholder);
  });
}    
