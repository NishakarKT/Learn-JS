// document.getElementById('heading').addEventListener('click', function(){}, useCapture)
// useCapture is used to deal with clashing events (setting the order)
// useCapture = true => parent has more priority
// useCapture = false (default) => parent has more priority

// Adding event listener
document.getElementById('heading').addEventListener('click', func, true);

// Removing event listener
document.getElementById('heading').removeEventListener('click', func);

function func(e) {
    // location.href = 'http://google.com';
    e.target; // returns an element, now you can use this element
    console.log(e.target) // target
    console.log(e.offsetX) // x distance relative to target block
    console.log(e.offsetY) // y distance relative to target block
    console.log(e.clientX) // x distance relative to browser window
    console.log(e.clientY) // y distance relative to browser window

    // self modifications using "this"
    this.style.backgroundColor = "yellow";
}
