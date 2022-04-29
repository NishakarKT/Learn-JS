// Document.write => writes in the html
let array = ["apple", "mango", "orange"];
document.write("Hello World!!!<br><br><i>Hello</i> Earth!!!<br>");
document.write("<ol>");
for(let i=0; i< array.length; i++){
    document.write(`<li>${array[i]}</li>`);
}
document.write("</ol>");

// code execution time
// start
console.time('timer'); // 'timer' is the identifier

// print/display error msgs
console.log("Hello World!!!")
// alert("ALERT MESSAGE !!!"); // alert warnings, page disabled until u respond

// printing an array
console.log([1,2.5,true,"happy"]);

// printing an object
console.log({
    name: 'Nishakar Kumar',
    roll: '20IE10019',
    section: '20'
});

// printing an object as a table
console.table({
    name: 'Nishakar Kumar',
    roll: '20IE10019',
    section: '20'
});

//printing a warning
console.warn('This is a warning');

//printing an error
console.error('This is an error message');

// assert: validity check
console.assert(500 < 190, 'This person doesn\'t exist !!!'); // displays an error msg when the condition fails.

//end
console.timeEnd('timer');

// clearing the console
// console.clear();
