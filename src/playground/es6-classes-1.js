class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    }

    getGreeting() {
        return `Hi, I'm ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // calls the parent constructor
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // double not returns 
    }
    getDescription() {
        let description = super.getDescription(); // calls the parent's getDescription method

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();

        if (this.homeLocation) {
            description += ` I'm visiting from ${this.homeLocation}.`
        }

        return description;
    }
}

const me = new Student('Ryan Yan', 23, 'Mathematical Biology');
console.log(me.getDescription());

const other = new Traveler('Ryan', 23, 'DC');
console.log(other.getGreeting());

const other2 = new Traveler();
console.log(other2.getGreeting());
