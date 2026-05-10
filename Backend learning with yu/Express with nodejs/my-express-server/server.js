const express = require("express")
const app = express()
const port = 3000

app.get("/", (req,res)=>{
    res.send("<h1>Hello World!!!!!</h1>")
})

app.get("/contact", (req,res)=>{
    res.send("Contact me at: kkartikeysinghh@gmail.com")
})

app.get("/about", (req,res)=>{
    res.send("Hii, Im a web developer. Thats all about me. Thanks.")
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})