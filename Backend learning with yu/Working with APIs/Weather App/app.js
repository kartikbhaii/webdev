const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    
    res.sendFile(__dirname + "/index.html")

})

app.post("/", (req,res)=>{
    const query = req.body.cityName
    const apiKey = "3493eaa285d5cbb06254cf4456062af7"
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units

    https.get(url, (response)=>{
        console.log(response.statusCode)

        response.on("data", (data)=>{
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            // const icon = weatherData.weather[0].icon
            const imageURL = "https://openweathermap.org/payload/api/media/file/10d%402x.png "

            res.write("<h1>The temp of " + query +  " is "+ temp+ " degree Celcius.</h1>")
            res.write("And the weather is "+desc)
            res.write("<img src = "+imageURL+" >")
            res.send()
        })


    })
})





app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running on port 3000")
})


