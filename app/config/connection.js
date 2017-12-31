// **************************************
// INITIATE CONNECTION TO MYSQL
// **************************************

// Dependencies
// ====================================================
var Sequelize = require("sequelize");
var mysql = require('mysql2');
var connection;


// Creates MySQL connection using 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var sequelize = new Sequelize("shoutout_db", "root", "delilah", {
        host: "localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
};
// Exports the connection for other files to use
module.exports = sequelize;