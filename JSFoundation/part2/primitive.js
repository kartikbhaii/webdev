// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);

// console.log(typeof(balance));
// console.log(typeof(anotherBalance))

// null and undefined

let firstname;
// console.log(firstname); // undefined -> not initialized, thats why undefined.
// console.log(first); // null -> because there is no variable declared with the name "first"

//String -> use single quote or double quote, both works perfectly fine.

let myString = "Hello";
let myStringOne = "Hello";
let username = "Kartikey";

let OldMethodGreet = myString + " Kartikey";
// console.log(OldMethodGreet);

let newMethodGreet = `Hello ${username}`;
// console.log(newMethodGreet);

let demoOne = `Value is ${2 + 2}`;
// console.log(demoOne);

//Symbol -> unique value

let sm1 = Symbol("ria");
let sm2 = Symbol("ria");
console.log(sm1 == sm2); // -> this give false, because symbol is always unique, 2 symbols can never be equal.
// symbol are guranteed to be unique. 
