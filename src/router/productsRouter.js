const express = require("express");
const productsController = require("../controller/products");



const productsRouter = new express.Router();
//const userController = new UserController()

productsRouter.get("/", productsController.getProducts);
productsRouter.post("/", productsController.postProducts);

module.exports = productsRouter