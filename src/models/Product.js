const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    id: Number,
    name: String,
    price: Number,
    qty_stock: Number,
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

export default Product;
