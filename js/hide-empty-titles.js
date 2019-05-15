// Temporary solution used cause conditional tags for text inputs
// that include heading formatting are not working
function hideEmptyTitles(selector) {
  const titles = document.querySelectorAll(selector);
  titles.forEach( title => {
    const isEmpty = title.innerText.trim().length == 0;
    isEmpty ? title.classList.add('u-hide') : title.classList.remove('u-hide');
  });
}
