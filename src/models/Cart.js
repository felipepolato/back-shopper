const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartSchema = new Schema(
  {
    name: String,
    date: Date,
    list: [
      {
        id: { type: Number, unique: true },
        qty: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = model("Cart", cartSchema);

module.exports = Cart;
