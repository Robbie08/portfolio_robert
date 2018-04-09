const express = require('express');
const port = process.env.PORT || 3000;
const app = express(); //creates an express application
var path = require('path');

app.use(express.static(__dirname));


//handles the route 
app.get('/',(req,res) => {
    console.log(__dirname);
    
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port); 
console.log("My nigga"); 

