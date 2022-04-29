// promise.all is like => (promise1() && promise2 && ...)
// where even if a single failed promise results in the rejection...

function promise1(success) {
    return new Promise((resolve, reject) => {
        if (success)
            resolve("Promise1 succeeded...");
        else
            reject("Promise1 failed...");
    });
}

function promise2(success){
    return new Promise((resolve,reject)=>{
        if(success)
            resolve("Promise2 succeeded...");
        else
            reject("Promise2 failed...");
    });
}

function promise3(success){
    return new Promise((resolve, reject) => {
        if(success)
            resolve("Promise3 succeeded...");
        else
            reject("Promise3 failed...");
    });
}

// Success function
let onSuccess = (result) => console.log(result);
// Failure function
let onFailure = (error) => console.log(error);

// promise.all
Promise.all([promise1(true), promise2(true), promise3(true)]).then(onSuccess).catch(onFailure);
Promise.all([promise1(true), promise2(false), promise3(true)]).then(onSuccess).catch(onFailure);
