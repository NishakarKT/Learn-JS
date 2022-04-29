function func(){
    console.log("A");
    console.log("B");
    console.log("C");
}

func();

// Generators => helps us have control over execution sequence on the function elements...
// Generators are functions that return an object which conforms to the Iterable- and Iterator protocols.
// generating a generator function...
function *func2(){
    // yield ~ pause
    yield "A";
    console.log("a");
    yield "B";
    yield "C";
}

// controlling the order of execution ...
let a = func2();
console.log(a.next());
console.log(a.return("Ends here"));// => just like return; => rest of the elements ahead are not executed
console.log(a.next()); // => executes till the next yield/stopping point
// console.log(a.next());

// gererator function
function *generateIt(){
    let result = [yield, yield, yield];
    console.log(result);
}
let g = generateIt();
g.next();
g.next(500);
g.next(600);
g.next(700);
// you can target yields (as codes, variables etc.) and navigate inside a function...