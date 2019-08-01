function injectDynamicContent() {
    const sources = document.querySelectorAll('.js-inject-src');
    sources.forEach(source => {
      const targetID = source.dataset.targetId;
      const targets = document.querySelectorAll(`[data-target="${targetID}"]`);
      const repositionCheck = ( source.dataset.isReposition == 'true' );

      if ( repositionCheck ) {
        const targetInfo = targets[0].getBoundingClientRect();
        const sourceCss = `position:absolute;left:0;top:0;opacity:0;width:${targetInfo.width}px;height:${targetInfo.height}px;`;
        source.style.cssText = sourceCss;
      } else {
        source.style.display = 'none';
      }

      targets.forEach(target => {
        const imageCheck = ( source.dataset.isImage == 'true' );

        if ( imageCheck ) { // Checking if input is regular image input (not using reposition tool)
          target.src = `${source.innerText}`;
        } else if ( repositionCheck ) { // Checking if input is image input with reposition tool
          target.innerHTML = `<div class="reposition-fix">${source.innerHTML}</div>`;
        } else { // Input is just a regular or rich text input
          target.innerHTML = source.innerHTML;
        }
      });
    });
}

injectDynamicContent();