// using try-catch method
let condition = false;

// throw new error => throws error and stops the program
if(!condition){
    throw new Error("This is an error....");
}
else{
    console.log("Execution - success...");
}

// try & catch
try{
    console.log("Start...");
    if(!condition){
        throw new Error("Jump to catch");
    }
    blabla;
    console.log("End...");
}
catch(error){
    console.log("An error has occured");
    // console.log(error);
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack); // complete error message
}
finally{
    console.log("Finally is optional...")
}

// try-catch helps us locate errors easily
// asynchronous function errors are not detected,
// to detect asynchronous errors we must put the try-catch inside the asynchronous function...

// Different types of errors...
// 1) EvalError
// 2) RangeError
// 3) ReferenceError
// 4) SyntaxError
// 5) TypeError
// 6) URIError
// 7) AggregateError