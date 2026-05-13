const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

const app = express()

app.use(express.static("public")) // this includes css files and images files.
app.use(bodyParser.urlencoded({extended: true})) // to use body-parser which is used to extract data from the 'HTML FORM', this line must included to use body-parser.

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req,res)=>{
    const fName = req.body.firstName
    const lName = req.body.lastName
    const email = req.body.email

    let data = {
        members: {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    }

    let jsonData = JSON.stringify(data);

    

    https.request(url, options, function(response)=>{

    })
    
})



app.listen(3000, ()=>{
    console.log("Server is running on Port 3000")
})




//API Key
// 43c80173de7113b38a7165a2db71f55a-us4

//List Id
// 28fd9aa127