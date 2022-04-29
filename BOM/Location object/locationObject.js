// you can check various location properties
console.log(location);

// location object methods
// assign()
location.assign("http://google.com"); /* doesn't delete the history of prev pages */

// reload()
// location.reload(); /* page reloads */

// replace
replace("http://google.com") /* deletes history of prev pages */