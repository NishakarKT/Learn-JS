// A "set" stores unique values

/* ********************* set creation and addition **************** */
let mySet = new Set();
// adding set elements
// repeated values are ignored while adding to a set
mySet.add(1);
mySet.add(true);
mySet.add(1);
console.log(mySet);

/* ******************* another way to create sets ****************** */
let mySet2 = new Set([1,true, 2,1, "Nishakar Kumar", {name: "Nishakar Kumar", roll: "20IE10019"}]);
console.log(mySet2);

/* ************************** Clearing the set ********************* */
mySet.clear();
console.log(mySet);

/* *********************** deleting set elements ******************* */
console.log(mySet2.delete(2));
console.log(mySet2);
// delete returns true, if the element is present, else returns false...

/* ***************************** size ****************************** */
console.log(mySet2.size);

/* ******************** entries for iteration *********************** */
console.log(mySet2.entries());

/* ******************** "has" ~ includes *********************** */
console.log(mySet2.has(1));

/* *********************** set ===> array ************************ */
// Array.from(set)
console.log(Array.from(mySet2));
