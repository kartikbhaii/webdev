const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true})) // use to parse/extract/get data from 'HTML FORM'

const port = 3000


app.get("/", (req,res)=>{
    res.send("PUT this in the end of the url: '/bmiCalculator'")
    // res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator", (req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req,res)=>{
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = (weight)/(height*height)

    res.send("Your BMI index is: "+bmi)
    
})

app.post("/", (req,res)=>{
    let num1 = Number(req.body.n1)
    let num2 = Number(req.body.n2)

    let result = num1 + num2
    res.send(`The sum of the calculation is: ${result}`)
    
})




app.listen(port, ()=>{
    console.log(`Server is on port ${port}`)
})
