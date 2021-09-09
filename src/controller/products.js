const mongoose = require("mongoose");
const Product = mongoose.model("Product")

module.exports.getProducts = (req, res, next) => {
  try {
      console.log(res.status);
      return res.status(200).json("Sucesso")
  } catch (error) {
    return res.json({ error });
  }
};


module.exports.postProducts = (req, res, next) => {
    try {
        const {id, name, price, qtdStock} = req.body
        const newProduct = {
            
        }
        return res.status(200).json("Produto Inserido")
    } catch (error) {
      return res.json({ error });
    }
  };