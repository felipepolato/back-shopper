const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    id: {type: Number, unique: true},
    name: String,
    price: Number,
    qty_stock: Number,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
