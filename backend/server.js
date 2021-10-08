require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

app.use(express.json());
app.use("/api/products",productRoutes);

const PORT = process.env.PORT||3300;
app.listen(PORT,function(err){
    if(err){
        console.log("Some error found");
    }
    console.log("server is running "+ PORT);
})