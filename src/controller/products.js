const mongoose = require("mongoose");
require("../models/Product");
const Product = mongoose.model("Product");

///GET  /products/
module.exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.json({ error });
  }
};

///POST  /products/
module.exports.postProduct = async (req, res, next) => {
  try {
    const { id, name, price, qty_stock } = req.body;

    if (!id || !name || !price || !qty_stock) {
      throw new Error("Parâmetros Inexistentes!");
    }

    const newProduct = {
      id,
      name,
      price,
      qty_stock,
    };

    const product = await Product.create(newProduct);
    return res.json(product);

    ///TODO Tratar Erro ////////
  } catch (error) {
    return res.json({ error });
  }
};

///PUT  /products/
module.exports.putProduct = async (req, res, next) => {
  try {
    const { id, qty } = req.body;
    if (!id || !qty) {
      console.log("ERROO")
      throw new Error("Parâmetros Inexistentes!");
    }

    const product = await Product.findOne({
      id,
    });

    const hasStock = product.qty_stock - qty >= 0;
    if (!hasStock) {
      throw new Error("Estoque Indisponível!");
    }

    const update = {
      qty_stock: product.qty_stock - qty,
    };

    const updated = await Product.findOneAndUpdate(
      {
        id: id,
      },
      update,
      {
        new: true,
      }
    );
    console.log(updated);
    return res.json(updated);
    ///TODO Tratar Erro ////////
  } catch (error) {
    console.log("ERRO AQQUI", error.message)
    return res.status(400).json({ message:  error.message });
  }
};
