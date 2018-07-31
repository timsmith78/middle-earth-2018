// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Reservation  = require("./reservation");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
require("./apirouting")(app)
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var waitlist = [];
var reservations = [];


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
