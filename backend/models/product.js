const mongoose = require("mongoose");


const product = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Products = mongoose.model("product",product);
module.exports = Products;