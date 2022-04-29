function greet(){
    console.log("Good Morning !!!");
}

// Set Timeout => call a function after some time
let id = setTimeout(greet, 2000);

// clear Timeout => clears the Set Timeout
clearTimeout(id);
