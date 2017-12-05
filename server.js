// Dependencies
// ====================================================
var express = require("express");
var bodyParser = require("body-parser");

// Set up Express App
// ====================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));

// Routes
// ====================================================
//require("./app/routes/api-routes.js")(app);

// Starts server listening on PORT
app.listen(PORT, function () {
    console.log("ShoutOut listening on PORT " + PORT);
});