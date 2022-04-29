// In javascript maps => we can use any type of keys or values...

let myMap = new Map();

// creating key-value pairs
let key1 = "Nishakar Kumar";
let key2 = {};
let key3 = function(){};

// setting map values
myMap.set(key1, "A string")
myMap.set(key2, "A blank object")
myMap.set(key3, "An empty function")

console.log(myMap);

// getting values
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);
console.log(value2);
console.log(value3);

// size of map
console.log(myMap.size);

// you can iterate using for..of loop
for(let [key, value] of myMap){
    console.log(`${key} => ${value}`);
}

// you can iterate using forEach loop
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})

// getting keys
for(let key of myMap.keys()){
    console.log(key);
}

// getting values
for(let value of myMap.values()){
    console.log(value);
}

// converting map to array
console.log(Array.from(myMap));

// converting map-keys to array
console.log(Array.from(myMap.keys()));

// converting map-values to array
console.log(Array.from(myMap.values()));