import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
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
