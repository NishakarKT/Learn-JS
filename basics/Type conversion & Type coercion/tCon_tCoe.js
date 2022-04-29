let myVar = 34;
console.log(myVar, typeof myVar);

// TYPE CONVERSION
// to string
// myVar = myVar.toString();
myVar = String(myVar);
console.log(myVar, typeof myVar);
//string to number
myVar = Number(myVar);
console.log(myVar, typeof myVar);
// boolean to string
let bool = true;
console.log(bool, typeof bool);
bool = String(true);
console.log(bool, typeof bool);
// string to boolean
bool = Boolean(bool);
console.log(bool, typeof bool);
// boolean to number
bool = Number(bool);
console.log(bool, typeof bool); // true = 1, false  = 0

// date to string
let date = String(new Date());
console.log(date, typeof date);

// array to string
let arr = new Array(1, 2, 3, 4, 5);
arr = String(arr);
console.log(arr, typeof arr);

// parseInt()
let num = parseInt(12.745); // just like floor
console.log(num, typeof num);

// toFixed()
num = 1.545545;
console.log(num.toFixed(2)); // rounds to 2 decimal places

// TYPE COERCION 
myNum = 45;
myStr = '123'
console.log(myStr + myNum);
// here myNum get converted to 'String' and concatenates