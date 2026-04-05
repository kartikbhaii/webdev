/*
1. Write a while loop that calculates the sum of all numbers
from 1 to 5 and stores the result in a variable named sum.
*/
let i=1, sum=0
while(i<=5){
    sum=sum+i
    i++
}
console.log(sum);



/*
2. Wrtie a while loop that counts down from 5 to 1 
and stores the number in an array named countdown.
*/
let countdown=[], j=5
while(j>=1){
    countdown.push(j)
    j--
}
console.log(countdown);



/*
3. Write a do-while loop that prompts a user to enter
their favourite tea type until they entr "stop". 
Store each tea type in an array name 'teaCollection'
*/
let teaCollection = []
let teas
do {
    teas = prompt("Enter your favourite tea type (type "stop" to finish)")
        if(teas!=="stop"){
        teaCollection.push(teas)
        }
} 
while (teas!=="stop")
console.log(teaCollection)



/*
4. Write a do-while loop that adds numbers from 1 to 3
and stores the result in var named total.
*/
let k=1, total=0
do{
    total += k
    k++
} while(k<=3)

console.log(total);



/*
5. Write a for loop that multiplies each element in the 
array [2, 4, 6] by 2 and stores the result in new array
names 'multipliedNumbers'
*/
let arr=[2,4,6]
let p;
let multipliedNumbers = []
for(p=0; p<arr.length; p++){
    multipliedNumbers[p] = arr[p]*2
}
console.log(multipliedNumbers);



/*
6. Write a for loop that lists all the cities in the 
array [Paris, New York, Tokyo, London] and stores each
city in a new array named cityList
*/
let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = [], q
for(q=0; q<cities.length; q++ ){
    cityList.push(cities[q])
}
console.log(cityList);

