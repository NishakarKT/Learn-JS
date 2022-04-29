// forEach is useful in iterating through an array
let myArr = ['a', 'b', 'c', 'd', 'e'];

myArr.forEach(function (element , index) {
    console.log(element + " " + index);
})

// using arrow function
myArr.forEach(element => {
    console.log(element);
})

// more parameters
myArr.forEach(function (element, index, array) {
    console.log(index, element, array);
})