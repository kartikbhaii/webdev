const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true})) // use to parse/extract/get data from 'HTML FORM' data.

const port = 3000


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
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
