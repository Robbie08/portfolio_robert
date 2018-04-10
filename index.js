const express = require('express');
const app = express(); //creates an express application

//set port
const port = process.env.PORT || 8080


var path = require('path');

app.use(express.static(__dirname));


//handles the route 
app.get("/", function(req,res) {
    console.log(__dirname);
    res.render("index")
});


app.listen(function () {
    console.log("App running ")
});

app.listen(port); 
console.log("My nigga"); 

