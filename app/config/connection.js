// **************************************
// INITIATE CONNECTION TO MYSQL
// **************************************

// Dependencies
// ====================================================
var Sequelize = require("sequelize");

// Creates MySQL connection using Sequelize
var sequelize = new Sequelize("shoutout_db", "root", "delilah", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exports the connection for other files to use
module.exports = sequelize;