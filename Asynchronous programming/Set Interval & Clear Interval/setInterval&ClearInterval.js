// Set Interval
let interval = setInterval(func, 1000); // this function is called repeatedly after every second (interval)

// Clear Interval
let i=0;
function func(){
    console.log(i++);
    if(i === 5)
        clearInterval(interval);
}
