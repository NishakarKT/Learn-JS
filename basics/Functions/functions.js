function fibonacci(m = 0) { // m = 0 is the default value
    if (m == 0)
        return 0;
    else if (m == 1 || m == 2)
        return 1;

    return fibonacci(m - 1) + fibonacci(m - 2);
}

// method 2
// let fibonacci = function (m = 0) { // m = 0 is the default value
//     if (m == 0)
//         return 0;
//     else if (m == 1 || m == 2)
//         return 1;

//     return fibonacci(m - 1) + fibonacci(m - 2);
// }

console.log("Fibonacci sequence : ");

for (let i = 0; i <= 10; i++)
    console.log(fibonacci(i));


// functions inside objects
let myObj = {
    sum: function(a,b){
        return a+b;
    },
    diff: function(a,b){
        return a-b;
    }
}

console.log(myObj.sum(2,3));
console.log(myObj.diff(2,3));