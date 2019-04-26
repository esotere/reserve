const mySql = require("mysql");
const mongoose = require("mongoose");

const connection = mySql.createConnection({
    host: "localhost",
    port: 3306 || process.env.PORT,
    user: "root",
    password: "2823",
    database: "Participant"

});

mongoose.connect("mongodb://localhost/contributors", { useNewUrlParser: true });
const db = mongoose.connection;

const databaseUrl = "contributors";
const collections = ["customers"];

db.on("error", error => {
    console.log("Database Error: ", error)
    
});

// connection.createConnection(err => {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + '\n')
// });

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = {
    connection: connection,
    url: "mongodb://localhost:27017/contributors"
}