// Temporary solution used cause conditional tags for text inputs 
// that include heading formatting are not working
function hideEmptyTitles() {
  const titles = document.querySelectorAll('.u-heading-patch');
  
  if ( titles === null ) return;
  
  titles.forEach( title => {
    const isEmpty = title.innerText.trim().length == 0;
    isEmpty ? title.classList.add('u-hide') : title.classList.remove('u-hide');
  });
}
