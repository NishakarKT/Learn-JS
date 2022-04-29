let arr = [1,2,3];

// old way
let num1 = arr[0];
let num2 = arr[1];
let num3 = arr[2];
console.log(num1,num2,num3);

// new way => destructuring array
let [num4, num5, num6] = arr;
let [num7 = 0, num8 = 0, num9 = 0] = arr; // 0 is the default value
console.log(num4,num5,num6)

let arr2 = [1,2,[3,4]]; // notice array pattern
let [a,b,[c,d]] = arr2;
console.log(a,b,c,d);

// selecting specific values
let [x,,y] = arr2;
console.log(x, y);

// using spread operator
let [e, ...f] = arr2; // f forms an object of the remaining elements
console.log("e = " + e + "\n" + "f = " + f);

// in functions
let sum = function([a,b,c]){
    return a+b+c;
}
console.log(sum([1,2,3])); // => a = 1, b = 2, c = 3

// in Objects
let user = {
    name: "Nishakar Kumar",
    age: 19
}
// let {name, age} = user; // same name keys get copied
// console.log(name, age);
// also
let {name: N, age: A} = user; // same name keys get copied
console.log(N, A);

