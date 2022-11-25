const mongoose = require("mongoose");
//code for connecting database with server(time taking)
const databaseConnection = async ()=> {
    try {
        await mongoose.connect("mongodb://localhost:27017/myfirstdatabase");
        console.log("Database is sucessfully connected...");
    } catch (error) {
      console.log(error);
    }
};
//exporting databaseConnection
module.exports = databaseConnection;