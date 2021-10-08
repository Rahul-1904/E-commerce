require("dotenv").config();

const connectDB = require("./config/db");
const Products = require("./models/product");
const productData = require("./data/Productsdata");

connectDB();

const importData = async() =>{
    try{
       await Products.deleteMany({});
       await Products.insertMany(productData);

       console.log("data added successfully");
        process.exit();
    }catch(error){
      console.log("Some error occured "+ error);
      process.exit(1);
    }
}
importData();