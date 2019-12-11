// mapObj object is passed as an argument, so it would be possible to add this to snippets
// and create some conventions and rules for these marks and add new ones
const mapObj = {
    '{b': '<strong>',
    'b}': '</strong>',
    '{i': '<i>',
    'i}': '</i>',
    '{h1': '<h1>',
    'h1}': '</h1>',
    '{h2': '<h2>',
    'h2}': '</h2>',
    '{nl}': '<br>'
  };
  
  function customRichText(mapObj) {
    const sources = document.querySelectorAll('.js-customRichText-src');
    sources.forEach((source, index) => {
      // Hiding all the source elements
      source.style.cssText = 'opacity: 0; position: absolute;';
      // Adding 'position: relative' to parent element so the source is absolutely positioned
      // according to it's first parent
      source.parentNode.style.position = 'relative';
      let formated = source.innerText;
      // Creating a regular expression with all the keys from the mapObj
      const regexp = new RegExp(Object.keys(mapObj).join('|'), 'gi');
      // Running a replace method and providing the created regExp 
      // and adding a function as a second argument
      formated = formated.replace(regexp, (matched) => {
        return mapObj[matched.toLowerCase()];
      });
      if (source.parentNode.querySelector('.js-customRichText-target') === null) {
        const target = document.createElement('div');
        target.classList.add('js-customRichText-target');
        source.parentNode.appendChild(target);
        target.innerHTML = formated;
      }
    })
  };
  