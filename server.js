
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

//added
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
//if you have static file 
// app.use(express.static(path.join(__dirname, './static')));


//start database
require('./server/config/mongoose.js');

//you have to add this:================
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
