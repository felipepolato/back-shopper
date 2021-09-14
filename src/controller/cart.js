const mongoose = require("mongoose");
require("../models/Cart");
const Cart = mongoose.model("Cart");

///POST  /cart/
module.exports.postCart = async (req, res, next) => {
  try {
    const { name, date, list } = req.body;

    if (!name || !date || !list) {
      throw new Error("Parâmetros Inexistentes!");
    }

    const newCart = {
      name,
      date,
      list,
    };

    const cart = await Cart.create(newCart);
    return res.json(cart);

    ///TODO Tratar Erro ////////
  } catch (error) {
    return res.json({ error });
  }
};
