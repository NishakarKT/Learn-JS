// old way
let name="Nishakar Kumar";
let roll = "20IE10019";

let obj1 = {
    name: name,
    roll: roll
}
console.log(obj1);

/* ****************************** (1) ********************************** */
// new way
// if the name of the key and the assigning variable is the same, we may simply write the name...
let obj2 = {
    name,
    roll
}
console.log(obj2);

/* ****************************** (2) ********************************** */

let n = "name";
let r = "roll";
let obj3 = {
    [n + "key"]: "Nishakar Kumar",
    [r]: "20IE10019",
    returnVal: function(){
        return `${this.namekey}`;
    }
}
console.log(obj3);
console.log(obj3.returnVal());

/* ****************************** (3) ********************************** */

// old way
let obj4 = {
    name: "Nishakar Kumar",
    show: function(){
        console.log(this.name);
    }
}
obj4.show();

// new way
let obj5 = {
    name: "Nishakar Kumar",
    show(){
        console.log(this.name);
    }
}
obj5.show();

/* ****************************** (4) ********************************** */

function returnObj(name, roll){
    return {name, roll};
}
console.log(returnObj("Nishakar Kumar", "20IE10019"));

/* ****************************** (4) ********************************** */
