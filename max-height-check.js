function maxHeightCheck(orientation = 'portrait') {
  const textBlocks = document.querySelectorAll('[data-max-height]');
  textBlocks.forEach(block => {
    const bodyComputedStyle = window.getComputedStyle(document.body);
    const blockHeight = block.scrollHeight;
    const unit = block.dataset.maxUnit || 'px';
    // Getting the data-max-line attribute value (max number of lines allowed)
    const maxHeightAlt = block.dataset.maxHeightAlt || block.dataset.maxHeight;
    let maxHeight = (orientation == 'portrait') ? block.dataset.maxHeight : maxHeightAlt;
    // Setting the element's max-height 
    block.style.maxHeight = maxHeight + unit;

    if ( unit == 'rem' ) {
      maxHeight = maxHeight * parseFloat(bodyComputedStyle.fontSize);
    }
    
    // Adding an 'overflow' class to an element if it's offset height exceedes the max-line-height
    if ( blockHeight > maxHeight ) {
      block.classList.add('overflow');
    } else {
      block.classList.remove('overflow');
    }
  });
}
