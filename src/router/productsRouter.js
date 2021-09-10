const express = require("express");
const productsController = require("../controller/products");



const productsRouter = new express.Router();

productsRouter.get("/", productsController.getProducts);
productsRouter.post("/", productsController.postProduct);
productsRouter.put("/", productsController.putProduct);

module.exports = productsRouter