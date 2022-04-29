// async functions return a "promise"

// async normal functions
async function test(){
    return " Hello World!!!";
}

// async arrow functions
let test2 = async () => {
    console.log("A");
    await console.log("B"); // await => executes this line and moves to next set of codes after the function block, after completing all the next set of codes, it comes back to the next line after await declaration...
    console.log("C");
    console.log("D");
}
console.log("E");
console.log("F");
// await usually used in time consuming steps like fetching data from the server

// test() => returns a promise
test().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

test2();
// E & F are printed first as all the other procedures are "asynchronous"...