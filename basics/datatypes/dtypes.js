//There are 2 types of datatypes in JS,
// 1) PRIMITIVE
// -> Ex:- string, boolean, number, null, undefined & symbol(latest)...
//-> memory allocation in stack

// 1) REFERENCE
// -> Ex:- arrays, object literals, functions, dates.....
//-> memory allocation in heap

let str = "Hello World!!!";

//typeof operator
// 2 ways to use,
console.log(typeof str);
console.log(typeof (str));

// bogus return value of 'null'
let nullVar = null;
console.log(typeof nullVar); // prints 'object', but 'null' is a primitve data type

// Arrays
// you can add any primitive datatype in an array, just like python lists
let arr1 = [1, "hello", true, undefined, null, 12.5];
let arr2 = new Array("world", 12, false, null);
console.log(typeof arr1, typeof arr2); // object datatype
console.log(arr1);
console.log(arr2);

// functions
function factorial(n) {
    let p = 1;
    for (let i = 1; i <= n; i++)
        p *= i;
    return p;
}
console.log(typeof factorial); // 'function' datatype
console.log(`${5}! = ${factorial(5)}`);

// 'object literals', like 'classes'
let marks = {
    name: "Nishakar Kumar",
    sum(a, b) {
        return a + b;
    },
    'Roll number': '20IE10019'
}
console.log(marks);
console.log(typeof marks); // object dataype
console.log(marks['Roll number']); // like python dictionaries
console.log(marks.sum(2, 3)); //using dot operator

// Date object
let timeReal = new Date();
console.log(timeReal); // current date
let timeRef = new Date(0);
console.log(timeRef); // reference date
let timeRefExtra = new Date(1000);
console.log(timeRefExtra); // reference date + 1000ms

// use data object, just like class
console.log(timeReal.getDate());
console.log(timeReal.getMonth()); // n => (n-1)th month
console.log(timeReal.getFullYear());
console.log(timeReal.getHours());

// total miliseconds from the ref time
console.log(timeReal.getTime());

