/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavors = ["Green Tea", "Black tea", "oolong tea"];
const firstTea = teaFlavors[0];
console.log(firstTea);



/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);



/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);



/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);



/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
console.log(teaOrders);
teaOrders.pop();
console.log(teaOrders);



/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
   Soft Copy: If the main array get changes, then the corresponding referring array should also change as same as the main array.
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop(); // -> we are only poping from array - popularTeas, but array - softCopyTeas also show the same content as the array popularTeas
console.log(softCopyTeas); // it is soft copy, thats why it also get manipulated when the main array gets manipulated



/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
   Hard Copy: if main array gets manipulated, the corresponding array MUST NOT GETS MANIPULATE: this is defination for hard copy.
*/
let topCities = ["Berlin", "singapore", "new york"];
let hardCopyCities = [...topCities]  // 1st method format of making HARD COPY
let hardCopyCities = topCities.slice(); // 2nd method.
console.log(hardCopyCities);
topCities.pop();
console.log(hardCopyCities);



/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);



/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length
console.log(menuLength);



/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto","London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")  //->  .includes checks is that keyword included/exists in the array or not and it is case sensitive.
console.log(isLondonInList);


