// creating a class
class employee {
    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }

    greet() {
        console.log(`I am ${this.name}, and I have ${this.experience} years of experience...`);
    }

    static add(a,b){ // functions that dont have any class parameters involved, can  be made static and be used without even creating a class object
        return a+b;
    }
}

// creating a class object
let e1 = new employee("Nishakar Kumar", 10);

console.log(e1);
console.log(typeof e1); // object
console.log(e1.name);
console.log(e1.experience);
e1.greet();

// using static class functions
console.log(employee.add(2,3));

// Inheritance
class programmer extends employee{
    constructor(name, experience, lang) {
        super(name, experience); // takes the inputs just like parent class
        // you have to call the constructor of the parent class using "super", else an error is thrown...
        // super ~ parent class object => super(name,experience), super.greet() etc...
        this.lang = lang;
    }
}
let p1 = new programmer("Rohan", 10, "C++");
console.log(p1);
console.log(p1.add(12, 3)); // wrong
console.log(programmer.add(12, 3)); // right
