let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  // this is how functional constructors are created.
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.kartikey = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.kartikey());

//---------------------- OOPS CLASS AND OBJECTS --------------------------//

class Vehicle {
  constructor(make, model) {
    ((this.make = make), (this.model = model));
  }

  start() {
    // this is function but it is created inside `class` so its named changed to `methods`. `Functions` are known as `method` indide `class` so we didnt use `funciton` keyword and just wrote `start(){}`
    return `${this.model} is a car from ${this.make}`;
  }
}

// -------------------------- INHERITANCE -------------------------- //

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example.`;
  }
}

let myCar = new Car("vw", "virtus");
// console.log(myCar.start()); // access to parent
// console.log(myCar.drive()); // also access to own methods.

let veOne = new Vehicle("Tata", "Safari");
console.log(veOne.make);

// -------------------------- Encapsulation -------------------------- //

class BankAcc {
  #balance = 0; // using `#`: this `balance` variable will not be accessible outside the class. this is the definition.

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAcc();
console.log(account.getBalance());

// -------------------------- Abstraction -------------------------- //

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing Coffee`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} ${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// -------------------------- Polymorphism -------------------------- //

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));  //not allowed is we used `Static Method`

console.log(Calculator.add(2, 3));

// ------------------ GETTERS AND SETTERS ------------------- //

class Employee {
    #salary;
  constructor(name, salary) {
    if (salary<0) {
        throw new Error("Salary cannot be in negative")
    }
    this.name = name;
    this._salary = salary; //the underscore doesnt have any specific meaning in js. 
    this.#salary = salary; 
  }

  get salary() {
    return `You are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", -50000);
// console.log(emp.salary);  // we cannot access salary here
// console.log(emp._salary); // but when we use " _ " we actually accessing the salary.


