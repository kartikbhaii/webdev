//Object

let username = {
  "first name": "Kartikey",
  isLoggedin: true,
};

username.firstname = "KK";
username.lastname = "Singh";

// console.log(username["first name"]);
// console.log(username.lastname);
// console.log(typeof(username));

let today = new Date();
// console.log(today.getDate());

// Array

let heroes = ["superman", "batman", "spiderman", true];
let anotherUser = ["Kartikey", true];

// console.log(anotherUser[0]);
// console.log(anotherUser[1]);

// console.log("1"+1) //-> concatenate string '1' with number '1' and prints: 11

let isValue = true; // true means 1.
// console.log(isValue + 1); //-> prints 2, bcoz true means 1 and adding 1 to 'true' it gives 2

let val = "2abc";
// console.log(Number(val)) // -> converting into number
// console.log(typeof(Number(val)))
// console.log(Number(null));   // gives 0
// console.log(Number(undefined)); // gives NaN: not a number
