const mongoose = require("mongoose"); 
mongoose.connect( 
  "mongodb+srv://Pratiksha:pratiksha@cluster0.4oxq7xt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const connection = mongoose.connection;
  
 
 

connection.on("connected", () => { 
  console.log("Mongoose is successfully connected to the database........"); 
}); 
 
connection.on("error", () => { 
  console.log("Mongo DB Connection Failed"); 
}); 
 
module.exports = mongoose;