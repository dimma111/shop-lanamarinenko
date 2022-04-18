const { Schema, model } = require("mongoose");

const Product = new Schema({
  name: { type: String, unique: true, required: true },
  price: { type: Number, default: "" },
  description: { type: String, default: "" },
  collect: { type: String, default: "" },
  sizes: [{ type: String, default: "" }],
  images: [{ type: String }],
  dateCreate: { type: Date, default: Date.now },
});

module.exports = model("Product", Product);
