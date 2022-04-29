// JavaScript is a prototype-based language. Whenever we create a function using JavaScript, the JavaScript engine adds a prototype property inside a function. The prototype property is an object where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

let obj = {
    name: "Nishakar Kumar",
    roll: "20IE10019"
}

console.log(obj); // displays something "__proto__" in the console
// this "__proto__" is nothing but, all the prev created objects.

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}