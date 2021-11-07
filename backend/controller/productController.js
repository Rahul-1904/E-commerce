const Product = require("../models/product");



const getproduct = async(req,res) => {
    try{
        const products = await Product.find({});
        console.log(products);
        res.json(products);
    }catch(error){
       console.log("error");
    }
      
   
}

const getProductById = async(req,res) => {
    try{
          const product = await Product.findById(req.params.id);
        //   res.json(product);
        console.log(product);
        res.send(product);
    }catch(error){
        console.log("error occured"+ error);
    }
}

module.exports = {
    getproduct,
    getProductById
};