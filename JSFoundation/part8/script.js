// example 1
// grab event(event is responsible for change, for eg. here- button is responsible) first and then... 
// ...add event listner and then target the element however you want it to behave.

document.getElementById("changeTextButton").addEventListener('click', function() {
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "the text is changed now."
})


// example 2
// again grab event (event responsible for the change, ex - button)
// then add eventlistner then target how it should behave on the browser.

// step 1: select event.
// step 2: add eventListner.
// step 3: change the behaviour however u want.
// step 3.1: select the element, store it in variable, then change however u want.

document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let citiesList = document.getElementById("citiesList")
    citiesList.firstElementChild.classList.add('highlight')
    
})


// example 3
// step 1: select event. (eg- button)
// step 2: add event listner (eg - mouse click - 'click')
// step 3: manipulate it inside a function:
// step 3.1: select element which u are targeting to manipulate
// step 3.2: store it in a variable
// step 3.3: do whatever u want to manipulate.

document.getElementById("changeOrder").addEventListener('click', function (){
    let coffee = document.getElementById("coffeeType")
    coffee.textContent = "Espresso";
    coffee.style.backgroundColor = "red"
    coffee.style.fontWeight = "800"
    coffee.style.color = "black"
    coffee.style.padding = "5px"
})


// example 4
document.getElementById("addNewItem").addEventListener('click', function (){
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    document.getElementById("shoppingList").appendChild(newItem)
})


// example 5
document.getElementById("removeLastTask").addEventListener('click', function(){
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove()

})


// example 6
document.getElementById("clickMeButton").addEventListener("click", function(){
    alert("Well Hello There...")
})


// example 7
document.getElementById("teaList").addEventListener('click', function(){
    if (event.target && event.target.matches('.teaItem')) {
        alert("you seleted: " + event.target.textContent)
    }
    
})


// example 8
document.getElementById("feedbackForm").addEventListener('submit', function(event){
    event.preventDefault(); // always do this for a 'form' tag. in html and react.
    let feedback = document.getElementById("feedbackInput").value
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`

})



// example 9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("domStatus").textContent = "DOM Fully Loaded"
})



// example 10
document.getElementById("toggleHighlight").addEventListener('click', function(){
    let descText = document.getElementById("descriptionText")
    descText.classList.toggle('highlight')
})


