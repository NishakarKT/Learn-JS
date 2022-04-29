let success = true;

// is promise is fulfilled, we call resolve ()
// is promise is rejected, we call reject ()
// resolve/reject are in-built functions
// promise ~ substitute of/ beter than the call back functions...
let promise = new Promise((resolve, reject) => {
    if (success)
        resolve("I am successful :)"); // on resolve() call => "I am successful :)" message is sent...
    else
        reject("I failed :(");
});

// printing the sent message
console.log(promise);

/* ************************************************************************ */

function promFunc(success) {
    return new Promise((resolve, reject) => {
        if (success)
            resolve("I am successful :)");
        else
            reject("I have failed :(");
    })
}
console.log(promFunc(true));

let onSuccess = (result) => {
    console.log(result);
}

let onFailure = (error) => {
    console.log(error);
}

// calling onSuccess() and onFailure()
// using then & catch
// promFunc(true).then(onSuccess);
// promFunc(false).catch(onFailure);
// or
promFunc(true).then(onSuccess).catch(onFailure);