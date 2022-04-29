openBtn = document.getElementById('open');
moveBtn = document.getElementById('move');

openBtn.addEventListener('click', openTab);
moveBtn.addEventListener('click', moveTab);

let myWindow;
function openTab(){
    myWindow = window.open("","","width=300px,height=200px");
    // default top = 0px and left = 0px
    myWindow.focus();
}

function moveTab(){
    myWindow.moveTo(100/*left*/,100/*right*/); // works only for tabs of your "own" website
    myWindow.moveBy(100/*left*/,100/*right*/); // works only for tabs of your "own" website
    // moveTo => absolute
    // moveBy => relative
}