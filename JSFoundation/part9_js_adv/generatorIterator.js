// generator function is different because when we run once,
// it generates result, again if we hit run, it will generate again and goes on...

function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}

let gen = numberGenerator()
let gen2 = numberGenerator()

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

console.log(gen2.next().value); 
console.log(gen2.next().value); 