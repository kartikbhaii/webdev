/*
1. Write a function name 'makeTea' that takes one
parameter, 'typeOfTea' and returns a string like
"Making Green tea" when called with "green tea"
Store the result in a variable name "teaOrder"
*/

// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`
// }
// let teaOrder = makeTea("green Tea")
// console.log(teaOrder);



/*
2. Crete a function name orderTea that take one paramenter
teaType. inside this funciton, create another funciton 
named confirmOrder that return a message like "order confirmed for chai"
Call confirmOrder from withing orderTea and return the result
*/
// function orderTea(teaType){
//     function confirmOrder(){
//         return `order confirmed for chai`
//     }
//     return confirmOrder()
// } 
// let order = orderTea("chai")
// console.log(order);



/*
3. Write an arrow function calculateTotal that takes 
two parameters: 'price' and 'quantity'. The function
should return the total cost by multiplying the 'price' and qyantity'
Store the result in a variable named 'totalCost'
*/
// const calculateTotal = (price, quantity) => {
//     return price * quantity
// }
// let totalCost = calculateTotal(499, 10000)
// console.log(totalCost);



/*
4. Write a function named processTeaOrder that takes
another funciton, 'makeTea', as a parameter and calls it
with the argument "earl grey"
Return the result of calling makeTea
*/
// function makeTea(typeOfTea){
//     return `makeTea: ${typeOfTea}`
// }

// function processTeaOrder(teaFunction) {
//     return teaFunction("earl grey")
// }

// let order = processTeaOrder(makeTea)
// console.log(order);



/*
5. Write a function named createTeaMaker that return 
another function. The returned function should take one
parameter, teaType and return a message like "Making green tea"
Store the returned function in a variable named 'teaMaker' 
and call it with 'green tea'
*/

function createTeaMaker(){
    return function (teaType){
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker()
console.log(teaMaker("Green Tea"));

