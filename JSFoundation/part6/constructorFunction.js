// function Person(name, age){
//     this.name = name
//     this.age = age
// }

// function Car(make,model){
//     this.make = make;
//     this.model = model;
// }

// let myCar = new Car("Toyota", "camry")
// console.log(myCar);


// let myNewCar = new Car("Tata", "safari")
// console.log(myNewCar);

// function Tea(type){
//     this.type = type
//     this.describe = function (){
//         return `this is a cup of ${this.type}`
//     }
// }

// let lemon = new Tea("Lemon Tea")
// console.log(lemon.describe());


function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} make a sound`
}

let dog = new Animal("Dog")
// console.log(dog.sound());


function Drink(name){
    if (!new.target) {
        throw new Error("this is error")
    }
    this.name = name
}

let tea = new Drink("tea")
let coffee = Drink("Coffee")  // throws an error.



