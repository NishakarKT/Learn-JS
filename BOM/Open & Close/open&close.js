button1 = document.querySelector('#button1');
button2 = document.querySelector('#button2');

button1.addEventListener('click', openFunc);
button2.addEventListener('click', closeFunc);

var myWindow;

function openFunc(){
    myWindow = window.open("http://google.com", "_blank", "width=500px,height=200px,left=100px,top=50px"); // new tab window (default)
    // window.open('http://google.com', "_parent", "width=500px,height=200px,left=400px,top=100px") // replaces current window
    // window.open('http://google.com', "_self", "width=500px,height=200px,left=400px,top=100px")
    // window.open('http://google.com', "_top", "width=500px,height=200px,left=400px,top=100px")
}

function closeFunc(){
    myWindow.close(myWindow);
}