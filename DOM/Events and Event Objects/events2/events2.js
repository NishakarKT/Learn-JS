let btn = document.getElementById('btn');

btn.addEventListener("click", func1); // left click
btn.addEventListener("contextmenu", func2); // right click
btn.addEventListener("dblclick", func3);
btn.addEventListener("mousedown", func4); // mouse down ==> any of 3 mouse buttons are 'pressed'
btn.addEventListener("mouseup", func5); // mouse up ==> all of 3 mouse buttons are 'unpressed'
btn.addEventListener("mouseover", func6);
btn.addEventListener("mouseenter", func7);
btn.addEventListener("mouseleave", func8);
btn.addEventListener("mousemove", func9);
function func1(e) {
    console.log("single left click", e);
    e.preventDefault(); // deactivates page from default reloading/submission of the 'button'
}

function func2(e) {
    console.log("single right click", e);
    e.preventDefault();
}

function func3(e) {
    console.log("double click", e);
    e.preventDefault();
}

function func4(e) {
    console.log("mouse down", e);
    e.preventDefault();
}

function func5(e) {
    console.log("mouse up", e);
    e.preventDefault();
}

function func6(e) {
    console.log("mouse over", e);
    e.preventDefault();
}

function func7(e) {
    console.log("mouse entered", e);
    e.preventDefault();
}

function func8(e) {
    console.log("mouse left", e);
    e.preventDefault();
}

function func9(e) {
    console.log("mouse moved", e);
    e.preventDefault();
}

hover = document.querySelector(".container");

hover.addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${(e.offsetX)%255}, ${(e.offsetY)%255}, ${(e.offsetX+e.offsetY)%255})`;
})