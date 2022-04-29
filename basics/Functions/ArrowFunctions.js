// function 1
function greetGM(fName, lName) {
    return `Good Morning, ${fName} ${lName}`;
}

// function 2
let greetGA = function (fName, lName) {
    return `Good Afternoon, ${fName} ${lName}`;
}

// ARROW FUNCTIONS
// arrow function (no need of {} or return for single line of code)...
let greetGN = (fName, lName) => `Good Night, ${fName} ${lName}`;
// if only 1 argument is passed, we may even omit the round braces...
let greetGN2 = fName => `Good Night, ${fName}`;

console.log(greetGM("Nishakar", "Kumar"));
console.log(greetGA("Nishakar", "Kumar"));
console.log(greetGN("Nishakar", "Kumar"));
console.log(greetGN2("Nishakar", "Kumar"));

// to return objects...
let objReturn = () => ({name: "Nishakar Kumar", roll: "20IE10019"});
console.log(objReturn());