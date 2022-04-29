const arr = [null, 1, true, "hello", 12.35, undefined];

// even though it's a const arr, u can assign elements, push, pop...
arr[3] = null;
// what you can't do is ,
// arr = [1,2,3];

// Array Manipulation
// PUSH
arr.push("world"); // pushes elements at the end
console.log(arr);

// UNSHIFT
arr.unshift("world"); // pushes elements at the start
console.log(arr);

// POP
arr.pop(); // pops elements from the end
arr.pop();
console.log(arr);

// SHIFT
arr.shift("world"); // pops elements from the start
console.log(arr);

// SLICE => slice(starting index, ending index) (default ending index = -1)
console.log(arr.slice(1, 4));

// SPLICE : splice(start index, number of elements to be removed, new value)
arr.splice(1, 1, 3); // or
console.log(arr);

// SORT : sorts numbers, words etc.
arr.sort();
console.log(arr);

// REVERSE
arr.reverse();
console.log(arr);

// LENGTH is a 'Property', as it doesn't take any parameters
console.log(arr.length);

// INCLUDES
console.log(arr.includes("Shah Rukh Khan"));

// ISARRAY
console.log(Array.isArray(arr))

// INDEXOF & LASTINDEXOF
console.log(arr.indexOf(null));
console.log(arr.indexOf('lol')); // returns -1, if not present
console.log(arr.lastIndexOf(null));

// CONCAT
let arr2 = [1, 2, 3, 4, 5];
arr.concat(arr2); // doesn't change actual array
console.log(arr.concat(arr2));
console.log("\n")

// JOIN
arr2.join(" "); // doesn't change actual array
console.log(arr2.join("--")); /* converts the array into a string with joints given as arguments */
console.log("\n");

// SOME
function checkAdult(age) {
    if (age >= 18)
        return true;
    return false;
}
let ages = [12, 15, 18, 20];
console.log(ages.some(checkAdult)); /* returns true if any 1 element satisfies the condition "checkAdult()" */
console.log("\n");

// EVERY
console.log(ages.every(checkAdult)); /* returns true if "every" element satisfies the condition "checkAdult()" */
console.log("\n");

// FIND
console.log(ages.find(checkAdult)); /* returns first element satisfying the condition "checkAdult()" */
console.log("\n");

// FINDIDEX
console.log(ages.findIndex(checkAdult)); /* returns index of first element satisfying the condition "checkAdult()" */
console.log("\n");

// FILTER
console.log(ages.filter(checkAdult)); /* returns array of elements satisfying the condition "checkAdult()" */
console.log("\n");

// TOSTRING
console.log(ages.toString()); /* converts an array to a string */
console.log("\n");

// VALUEOF ( not needed much )
console.log(ages.valueOf()); /* prints array */
console.log("\n");

// MAP
function double(x, index, oldArr){
    return index + " : " + x*2;
}
console.log(ages.map(double));
console.log("\n");

// FILL
console.log(ages.fill("apple")); /* returns and replaces all elements of an array by "apple" */
console.log("\n");
console.log("**********************");

/* ************************************************************************** */
// another method to create arrays
// let arr3 = new Array();
// now you may initialize the array in any way you want
// arr3[0] = 0;
// arr3[1] = 1;
// arr3[3] = 3;
// or
let arr3 = new Array(0, 1, 3);

// undefined elements are printed in the for loop
for (let i = 0; i < arr3.length; i++)
    console.log(arr3[i]);
console.log("\n");

// undefined elements are not printed in the for-each loop
arr3.forEach(element => {
    console.log(element);
})
console.log("\n");

// defining the array length using new array
let arr4 = new Array(10); // creates an empty array of length = 10
arr4[0] = 0;
arr4[1] = 1;
arr4[3] = 3;
arr4[5] = 5;
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
console.log("\n");

// delete
delete arr4[1]; /* makes the value undefined... (the space is not deleted)* */
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
console.log("\n");
