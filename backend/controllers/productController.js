const Product = require("../models/Product");

class productController {
  async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get products error" });
    }
  }

  async addProduct(req, res) {
    try {
      const { name, price, description, sizes, collect, images } = req.body;
      const product = new Product({
        name,
        price,
        description,
        collect,
        sizes,
        images,
      }); //создаем модель

      await product.save(); //сохраняем в бд

      return res.json({ message: "Продукт успешно добавлен" }); //отвечаем клиенту
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Add product error" });
    }
  }
}

module.exports = new productController();
