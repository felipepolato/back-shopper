const express = require("express");
const cartController = require("../controller/cart");

const cartRouter = new express.Router();

cartRouter.post("/", cartController.postCart);

module.exports = cartRouter