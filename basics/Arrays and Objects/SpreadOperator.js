let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj1 = {
    name: "Mohan Thakur",
    roll: "20IE10019"
}
let obj2 = {
    cgpa: 9.08,
    branch: "Instrumentation Engineering"
}
/* ************************************************************************** */
// combining arrays
console.log([...arr1, ...arr2]);

// combining objects
console.log({ ...obj1, ...obj2 });

/* ************************************************************************** */
// passing the elements of the array in a functoin instead of individually ading it...
const sum = (a, b) => a + b;
console.log(sum(...[1, 2]));

/* ************************************************************************** */
// cloning array such that change in parent array doesn't effect the cloned array
// let arr3 = [arr1];
// // arr1.unshift(0);
// // console.log(arr3); // change is reflected
let arr3 = [...arr1];
arr1.unshift(0);
console.log(arr1);
console.log(arr3); // change in arr1 is not reflected in arr3

/* ************************************************************************** */
// spread operator also used as rest operator in functions
const func = (a, b, ...num) => {
    console.log(a, b, num);
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// ...num stores all the rest arguments as an array
// we can use this to create a sum function for unknown number of the arguments
const sum2 = (...num) => {
    let sum = 0;
    num.forEach((num) => {sum+=num});
    return sum;
}
console.log(sum2(1,2,3,4,5,6,7,8,9,10));

// rest operator in arrays
let [first, ...restElements] = arr3;
console.log(first, restElements);

/* ************************************************************************** */

