let arr = ["apple", "mango", "orange"];

let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next()); // done: true => values are over...

// helps us control the values we wanna print anf the values we don't wanna print
// like...
// console.log(iter.next().value);
// iter.next();
// console.log(iter.next().value);

// iteration
// let result = iter.next();
// while(!result.done){
//     console.log(result.value);
//     result = iter.next();

// }

// my iterator
function arrayIterator(arr) {
    let i = 0;
    return {
        next() {
            if (arr[i] == undefined)
                return {
                    value: arr[i++],
                    done: true
                }
            else
                return {
                    value: arr[i++],
                    done: false
                }
        }
    }
}

let myIter = arrayIterator(arr);
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
