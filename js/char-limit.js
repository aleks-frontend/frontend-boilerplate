// Adding limit for the word length
function charLimit() {
  const elements = document.querySelectorAll("[data-char-limit]");

  elements.forEach(element => {
    const limit = element.dataset.charLimit;

    if(element == null) { return }
    var tokenValue = element.querySelectorAll(".token-value");

    if(tokenValue.length != 0) {
      element = tokenValue.item(0);
    }
    var code = element.innerText;
    if(code.length > limit) {
      // Check Token Again
      if(tokenValue.length != 0) {
        element.parentNode.classList.add("overflow");  
      }
      else {
        element.classList.add("overflow");
      }
    }
    else {
      // Check Token Again
      if(tokenValue.length != 0) {
        element.parentNode.classList.remove("overflow");  
      }
      else {
        element.classList.remove("overflow");
      }
    }
  })
}    
