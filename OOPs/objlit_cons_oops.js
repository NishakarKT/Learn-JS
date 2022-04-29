// object literals
let obj1 = {
    name: "Nishakar Kumar",
    roll: "20IE10019",
    cgpa: 9.08,
    greetMyself: function () {
        console.log(`Good morning, ${this.name} !!!`);
    }
}
obj1.greetMyself();

// constructors
// using constructors => let date = newDate();

// creating constructors
function generalCar(nme, topSpd) {
    this.name = nme;
    this.topSpeed = topSpd;
    this.run = function () {
        console.log("the car is running");
    }
}
let car1 = new generalCar('BMW', 180);
console.log(car1.name);
console.log(car1.topSpeed);
car1.run();
