const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy food", "Cook Food", "Eat Food"]
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})) // must use to get text from 'html forms' as post request.


app.get("/", (req, res) => {
  let today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  item = req.body.newItem;
  items.push(item)
  res.redirect("/")
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
