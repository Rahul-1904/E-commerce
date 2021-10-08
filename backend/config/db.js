require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
       await mongoose.connect(process.env.Mongo_URL, {useNewUrlParser: true, useUnifiedTopology: true});
       console.log("connection successful");
    }catch(error){
       console.log(error);
       process.exit(1);
    }
  
}
module.exports = connectDB;