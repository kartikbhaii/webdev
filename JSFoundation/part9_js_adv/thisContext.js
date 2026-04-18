const person = {
    name: "Kartikey",
    greet(){
        console.log(`Hi i am ${this.name}`);
    }
}

person.greet();

const greetFunction = person.greet
greetFunction();

const boundGreet = person.greet.bind({name: "John"})
boundGreet( )
