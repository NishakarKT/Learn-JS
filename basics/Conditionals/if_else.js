let age = -1;

// if-else ladder
if (age > 18 && age < 200)
    console.log("You can vote");
else if (age == 18)
    console.log("You just became eligible to vote");
else if (age >= 0 && age < 18)
    console.log("You can't vote");
else
    console.log("person doesn't exist");

// '==' checks just the value, but '===' checks both type and value
age = '56';
console.log(age == 56); // values match
console.log(age === 56); // values match, but type doesn't

// '!=' checks just the value, but '!==' checks both type and value
console.log(age != 56); // values match
console.log(age !== 56); // values match, but type doesn't

// checking types
let myVar;
if (typeof myVar !== undefined)
    console.log(myVar + " is defined");
else
    console.log(myVar + " is undefined")

// bools in if-else
let bool = true;
if(bool)
    console.log("bool =", bool);