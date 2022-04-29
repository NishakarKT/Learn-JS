// asynchronous programming allows multiple things to happen at the same time
// few ways to write asynchronous code,
// 1) async/await
// 2) callbacks
// 3) promises

// synchronous
for (let i = 1; i <= 10; i++)
    console.log(i);
console.log("Done printing"); // prints after the looping is done

// asynchronous using setTimeOut
setTimeout(() => {
    for (let i = 1; i <= 10; i++)
        console.log(i);
}, 0);
console.log("Done printing"); // prints first