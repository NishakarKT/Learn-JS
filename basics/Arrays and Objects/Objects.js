let myObj = {
    name: "Harry",
    channel: "CWH",
    roll: "23",
    myArr: [1, 2, 3, 4, 5],
    'spaced key as a string': { // object inside an object
        name: "Nishakar Kumar",
        roll: "20IE10019"
    },
    sum: function (a, b) {
        return a + b;
    },
    getName: function(){
        return this.name;
    }
}

// accessing the elements of an object
console.log(myObj.name);
console.log(myObj.myArr);
console.log(myObj['spaced key as a string'].name);
console.log(myObj['spaced key as a string']['roll']);

// calling a function in an object
console.log(myObj.getName());
console.log(myObj['sum'](2, 3));

// another way to create objects
let myObj2 = new Object();
myObj2.name = "Manish Thakur";
myObj2.roll = 25;
console.log(myObj2);