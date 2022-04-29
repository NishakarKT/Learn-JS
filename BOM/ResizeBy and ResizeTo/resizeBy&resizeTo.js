openBtn = document.getElementById('open');
resizeBtn = document.getElementById('resize');

openBtn.addEventListener('click', openFunc);
resizeBtn.addEventListener('click', resizeFunc);

let myWindow;

function openFunc(){
    myWindow = window.open("", "", "width=200px,height=200px");
    myWindow.focus();
}

function resizeFunc(){
    myWindow.resizeTo(400/*width*/,400/*height*/);
    myWindow.resizeBy(200/*width*/,200/*height*/);
    // resizeTo => absolute
    // resizeBy => relative
}