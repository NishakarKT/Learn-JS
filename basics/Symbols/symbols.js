// Symbol (unique value) datatype

let x = Symbol("Hello");
let y = Symbol("Hello");

// type = symbol
console.log("x :", x);
console.log("y :", y);
console.log("typeof x :", typeof x);
console.log("typeof y :", typeof y);

// x !== y
console.log(x === y);

// use => if we need a unique value variable...

// symbol to string
console.log(x.toString());
console.log(x.description); // "description" => get the data of the symbol
console.log(typeof x.toString());

// using symbol inside an object
let obj = {
    name: "Nishakar Kumar",
    [x]: "World"
}
console.log(obj);
obj[x] = "Earth";
console.log(obj);
console.log(obj[x]); // getting the value of the symbol key

// symbol key values are skipped in for-in loops & JSON.stringify()*
// so we have to first convert the symbol into a string => using .toString()