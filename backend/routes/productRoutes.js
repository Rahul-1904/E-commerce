const express = require("express");
const routes = express.Router();
const {getproduct,getProductById} = require("../controller/productController");


routes.get("/",getproduct);
routes.get("/:id",getProductById);

module.exports = routes;