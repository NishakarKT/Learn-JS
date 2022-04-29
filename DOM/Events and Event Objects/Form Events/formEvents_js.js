inputNameElem = document.getElementById("name");
formElem = document.getElementById('myForm');

// Focus event
inputNameElem.addEventListener('focus', () => {
    inputNameElem.style.backgroundColor = 'yellow';
})

// Input event
inputNameElem.addEventListener('input', () => {
    inputNameElem.style.backgroundColor = 'lime';
})

// Blur event
inputNameElem.addEventListener('blur', () => {
    inputNameElem.style.backgroundColor = 'initial';
})

// change Event
inputNameElem.addEventListener('change', () => {
    inputNameElem.style.backgroundColor = 'blue';
})

// select Event (when the input value is selected)
inputNameElem.addEventListener('select', () => {
    inputNameElem.style.backgroundColor = 'lightblue';
})

// submit event
formElem.addEventListener('submit', () => {
    alert("You have submitted...");
})
// page reloads after submitting as we have not specified a path where to send the form data

// invalid event
inputNameElem.addEventListener('invalid', () => {
    alert("Enter your name");
})