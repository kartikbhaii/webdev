/*
1. Write for loop that loops through array
[green tea, black tea, chai, oolong tea] and stops
the loop when it finds 'chai'
Store all teas before 'chai' in new array "selectedTeas"
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []

for(let i = 0; i<teas.length; i++){
    if(teas[i] === "chai")
        break;
    selectedTeas.push(teas[i])
}
console.log(selectedTeas)


    
/*
2. Write for loop that loop through array 
["London", "New York", "Paris", "Berlin"] and skips "Paris".
Store other cities in new array named visitedCities
*/
let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []

for(let i = 0; i<cities.length; i++){
    if(cities[i] === "Paris")
        continue;
    visitedCities.push(cities[i])
}
console.log(visitedCities);



/*
3. Use for-of loop to iterate through the array 
[1,2,3,4,5] and stop when no. 4 is found, and 
print no. before 4.
*/
let arr = [1,2,3,4,5]
let newarr = []

for (const key of arr) {
    if(key === 4)  // key isnt 1,2,3,4 like "i" of for loop. is isnt that. key is element of array. here like for 1st time, key = 2, then key = 3 then key = 1 then key =5 then key = 4.
        break;
    newarr.push(key)
}
console.log(newarr);



/*
4. Use for-of loop to iterate through the array 
["chai", "green tea", "herbal tea", "black tea"] and
skip "herbal tea"
Store other teas in array "preferredTeas"
*/
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []

for (const tea of teaTypes) {
    if(tea === "herbal tea")
        continue;
    preferredTeas.push(tea)
}
console.log(preferredTeas);



/*
5. Use for-in loop to iterate through an object
containing city population.
Stop the loop when the population of "Berlin" is 
found and store all previous cities populations 
in a new object name "cityNewPopulation"
    
    let cityPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
*/
let cityPopulation = {
    "London": 8900000,   // London, New York, Paris and Berlin are called 'keys'.
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
let cityNewPopulation = {};
    // console.log(Object.values(citiesPopulation)); -> prints the values of each key from the object citiPopulation.

for (const city in cityPopulation) {    // 'for-in' loop doesnt suitable for object, so use 'for-in' loop for objects.
    if(city === "Berlin")
        break;
    // cityNewPopulation.push(citiPopulation[city]) // .push doesnt work because this is not an array. its an object we are trying to push, so this syntax doesnt work.
    cityNewPopulation[city] = cityPopulation[city]  // this works in object to push. we are pushing cities&values from cityPopulation into cityNewPopulation.
}
console.log(cityNewPopulation);



/*
6. Use for-in loop to iterate through an object
containing city polulaiton.
Skip any city with a popultaion below 3 million and 
store the rest in a new object neamed "largeCities"
*/
let worldPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
let largeCities = {};

for (const cities in worldPopulation) {
    if(worldPopulation[cities] < 3000000)
        continue;
    largeCities[cities] = worldPopulation[cities]
}
console.log(largeCities);



/*
7. Use for-Each loop to iterate through the array 
[earl grey, green tea, chai, oolong tea]
skip when "chai" is found, and store all the 
tea types in an array named "availableTeas"
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teaCollection.forEach((tea) => {
    if(tea === "chai"){
        // break; // this 'break' wont work because inside the for.each loop, we are inside function 'tea' thats why it doesnt work inside function.
        return; // this stops inside the function. 
    }
    availableTeas.push(tea)
});
console.log(availableTeas);



/*
8. Write a "forEach" loop that iterates through the array
[Berlin, Tokyo, Sydney, Paris]
Skip "sydney" and store the other cities in a new 
array named "traveledCities"
*/
let cities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let traveledCities = []

cities.forEach((city) =>{
    if (city==="Sydney") {
        return;
    }
    traveledCities.push(city)
})
console.log(traveledCities);



/*
9. Write a "for" loop that iterates through the array
[2, 5, 7, 9]
Skip the value 7 and multiply the rest by 2. Store the
results in a new array named "doubledBumbers"
*/
let number = [2, 5, 7, 9]
let doubledNumbers = []
let double;

for (const num of number) {
    if(num===7){
        double = 7
    doubledNumbers.push(double)
}
    else{
    double = (num)*2
    doubledNumbers.push(double)
    }  
}
console.log(doubledNumbers);




/*
10. Use for-of loop to iterate through the array 
[chai, green tea, black tea, jasmine tea, herbal tea]
and stop when the length of the current tea name is greater that 10.
Store the teas iterated over an array named "sortedArray"
*/
let teaTypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let sortedArray = []

for (const tea of teaTypes) {
    if(tea.length>10){
        continue;
    }
    else{
        sortedArray.push(tea)
    }
}
console.log(sortedArray);


