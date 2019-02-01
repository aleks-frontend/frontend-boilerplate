function maxLineCheck(orientation = 'portrait') {
  const textBlocks = document.querySelectorAll('[data-max-line]');
  textBlocks.forEach(block => {
    const computedStyle = window.getComputedStyle(block);
    // Checking if line-height is not set and has a normal value set by default
    // That value is Nan
    const isNormal = computedStyle.getPropertyValue('line-height') == 'normal';
    // Getting the font-size of an element that will help us calculate the line-height
    // if the line-height is set to 'normal'
    const fontSize = parseFloat(computedStyle.getPropertyValue('font-size'));
    // If line-height is normal, we multiply the element's font-size with 1.14
    // otherwise we get the element's line-height
    const lineHeight = isNormal ? (fontSize * 1.14) : parseFloat(computedStyle.getPropertyValue('line-height'));
    const blockHeight = block.scrollHeight;
    // Getting the data-max-line attribute value (max number of lines allowed)
    const maxLineAlt = block.dataset.maxLineAlt || block.dataset.maxLine;
    const maxLine = (orientation == 'portrait') ? block.dataset.maxLine : maxLineAlt;
    // Setting the element's max-height 
    const limitHeight = (lineHeight * maxLine) + (lineHeight / 2);
    block.style.maxHeight = limitHeight + 'px';
    // Adding an 'overflow' class to an element if it's offset height exceedes the max-line-height
    if ( blockHeight > limitHeight ) {
      block.classList.add('overflow');
    } else {
      block.classList.remove('overflow');
    }
  });
}