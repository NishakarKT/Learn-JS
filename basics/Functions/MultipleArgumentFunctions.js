let sum = (a, b) => a + b;
console.log(sum(2, 3));

// what if we want sum(2,3,4,5,6,9,4,8,2,7) and we are not aware of the number of arguments?
// we use the arguments feature which converts the arguments into an object... :)
// arguments doesn't work for arrow functions
let sum2 = function () {
    let sum = 0;
    for (let key in arguments)
        sum += arguments[key];
    return sum;
}
console.log(sum2(2, 3, 4));
console.log(sum2(2, 5));

// what if someone passes an argument like this => ("Nishakar Kumar", 12, 1, 19) ??? ===> we have to use the rest operator ("...")
// rest operator is used while defining functions
let sum3 = function (str, ...args) {
    let sum = 0;
    for (let key in args) {
        sum += args[key];
    }
    console.log(str);
    return sum;
}
console.log(sum3("Nishakar Kumar",12, 1, 19));

// another solution => filtering the non numbers...
let sum4 = function (str, ...args) {
    let sum = 0;
    for (let key in args) {
        if(typeof args[key] == "number")
            sum += args[key];
    }
    return sum;
}
console.log(sum4("Nishakar Kumar",12, "Manish Thakur", 19));

// what if someone passes an array of numbers instead of individual argumnets ?
// it will be converted as a single member object "args"
// so we need to split the array into multiple elements and then pass them as arguments...
// so we use the "spread operator => ..."
// spread operator is used while passing arguments
// spread operator splits the array into its elements and pass them as arguments
console.log(sum4("Nishkaar Kumar", ...[1,2,3,4,5]));
console.log("Spread Operator on [1,2,3,4,5] :", ...[1,2,3,4,5]);
console.log("back to array :", [...[1,2,3,4,5]]); // cloning

// CLONING
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
let arr3 = [...arr1]; // cloned arr1 assigned to arr3 => any further change arr1 will not reflect on arr3...
arr1.push(10);
console.log("arr1 : " + arr1);
console.log("arr2 : " + arr2);
console.log("arr3 : " + arr3);

// Concatenation of arrays & objects using "Spread Operator"
let arr4 = [12,...arr1,...arr2,...arr3,true,"apple"]; // sequence matters
console.log("arr4 : " + arr4);
