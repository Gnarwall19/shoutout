// ****************************************************************************
// Initiallizes a set of routes for displaying and saving data to the database
// ****************************************************************************

// Dependencies
// ====================================================
var Shout = require("../models/shout.js");

// Routes
// ====================================================
module.exports = function (app) {

    // GET all shouts
    app.get("/api/all", function (req, res) {
        Shout.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // POST new shout
    app.post("/api/new", function (req, res) {

        console.log("Shout Data:");
        console.log(req.body);

        Shout.create({
            author: req.body.author,
            body: req.body.body,
            created_at: req.body.created_at
        }).then(function (results) {
            // 'results' here is the newly created shout
            res.end();
        });
    });
};