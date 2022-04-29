// variables can be created using, 'var', 'let' and 'const' keyword.

var str1 = "Hello "; // using single quotes
console.log(str1);
var str2 = "World!!!"; // using double quotes
console.log(str2);
var str3 = `" ${2} " + " ${3} " = ${2 + 3}` // can be used as fstrings, and also ' and " cane be used.
console.log(str3);

var variable;
console.log(variable); // prints "undefined" as the variable is only declared, but not initialized.
//const constVar; // throws an error as you 'must' initialize a const var, and not just leave it just declared.

// Rules for variable names
// A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign.
// A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.
// JavaScript variables are case sensitive. For example, a and A are different variables.

// Arrays
const arr = [1,2,3,4];
console.log(arr);
arr.push(5);
console.log(arr);
// even though it's const, you can push and pop elements, but you can't do this,
// arr = [1,2,3];

/* Most common programming case types:
1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 
*/