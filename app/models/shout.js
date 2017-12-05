// Dependencies
// ====================================================

// Reference to the standard library
var Sequelize = require("sequelize");
// Reference to database connection
var sequelize = require("../config/connection.js");

// Create "Shout" model that matches up with the database
var Shout = sequelize.define("shout", {
    author: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
        timestamps: false
    });

// Syncs with database
Shout.sync();

// Export Shout Model to make available for other files
// Creates "Shouts" table
module.exports = Shout;