// generating regular expression literal in js...
let reg1 = /apple/ 
let reg2 = /orange/

console.log(reg1);
console.log(reg1.source); // getting the value of the regular expression

let str = "My favourite fruits are apple & mango, though i like apple more...";

console.log("------------------------------------------------------------------");
/* *************************************************************************** */
// FUNCTIONS TO MATCH EXPRESSIONS...

// 1) exec() => returns an array on match, and null if no matches
console.log(reg1.exec(str));
console.log(reg2.exec(str));

// FLAGS
//"g" => global
//"i" => case insensitive

let reg3 = /apple/g; // "g" here stands for global => the more we run exec, we obtain the subsequent values...
console.log(reg3.exec(str));
console.log(reg3.exec(str));
console.log(reg3.exec(str)); // now we get null, as no more "apple" is present

console.log("------------------------------------------------------------------");
/* *************************************************************************** */
// 2) test() => returns true if present, else false

console.log(/manGo/ig.test(str));
console.log(/orange/g.test(str));

console.log("------------------------------------------------------------------");
/* *************************************************************************** */
// 4) match()

console.log(str.match(/apple/g)); // returns array of results when used with "g"

console.log("------------------------------------------------------------------");
/* *************************************************************************** */
// 5) search() => returns index of first match, else -1

console.log(str.search(/apple/g));

console.log("------------------------------------------------------------------");
/* *************************************************************************** */
// 6) replace() => replaces :)

console.log(str.replace(/apple/, "Pineapple")); // replaces the first apple
console.log(str.replace(/apple/g, "Pineapple")); // replaces all the apples