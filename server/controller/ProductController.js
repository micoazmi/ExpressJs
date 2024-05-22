const { Product } = require("../models");

class ProductController {
  static getAll = async (req, res) => {
    try {
      const products = await Product.findAll({
        where: { userId: req.user.id },
      });
      res.json(products);
    } catch (error) {
      console.log(error, "error getAll");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  static create = async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = await Product.create({
        name,
        description,
        price,
        userId: req.user.id,
      });
      res.status(201).json(product);
    } catch (error) {
      console.log(error, "error create");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  static getOne = async (req, res) => {
    try {
      const product = await Product.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!product)
        return res.status(404).json({ error: "Product not found!" });
      res.json(product);
    } catch (error) {
      console.log(error, "error getOne");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  static update = async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = await Product.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!product)
        return res.status(404).json({ error: "Product not found!" });
      await product.update({ name, description, price });
      res.json(product);
    } catch (error) {
      console.log(error, "error update");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  static delete = async (req, res) => {
    try {
      const product = await Product.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!product)
        return res.status(404).json({ error: "Product not found!" });
      await product.destroy();
      res.json({ message: "Product deleted!" });
    } catch (error) {
      console.log(error, "error delete");
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = ProductController;
