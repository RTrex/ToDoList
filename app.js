const express = require("express");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

let add2 = ["Buy Food", "Cook food", "Eat food"];

let workItems = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
 let oof = date();
 res.render("List", {listTitle: oof, newListItems: add2});
})

app.post ("/", function(req , res){
   let add1 = req.body.newItem;
   if (req.body.List === "Work") {
    workItems.push(add1);
    res.redirect("/work");
   }
   else {
   add2.push(add1);
   res.redirect("/");
   }
})

app.get("/work", function(req, res){
  res.render("List", {listTitle: "Work List", newListItems: workItems});
})

app.listen(3000, function(){
    console.log("This server is up at 3000 port");
})