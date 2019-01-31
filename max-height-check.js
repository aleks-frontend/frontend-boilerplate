function maxHeightCheck(orientation = 'portrait') {
  const textBlocks = document.querySelectorAll('[data-max-height]');
  textBlocks.forEach(block => {
    const computedStyle = window.getComputedStyle(block);
    const blockHeight = block.scrollHeight;
    // Getting the data-max-line attribute value (max number of lines allowed)
    const maxHeightAlt = block.dataset.maxHeightAlt || block.dataset.maxHeight;
    const maxHeight = (orientation == 'portrait') ? block.dataset.maxHeight : maxHeightAlt;
    // Setting the element's max-height 
    block.style.maxHeight = maxHeight + 'px';
    // Adding an 'overflow' class to an element if it's offset height exceedes the max-line-height
    if ( blockHeight > maxHeight ) {
      block.classList.add('overflow');
    } else {
      block.classList.remove('overflow');
    }
  });
}
