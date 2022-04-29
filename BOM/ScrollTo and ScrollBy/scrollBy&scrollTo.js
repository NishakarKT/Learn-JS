scrollBtn = document.getElementById('scroll');
scrollBtn.addEventListener('click', scrollFunc);

function scrollFunc(){
    window.scrollTo(0/*x*/,0/*y*/);
    window.scrollBy(0/*x*/,20/*y*/);
    // scrollTo => absolute
    // scrollBy => relative
}