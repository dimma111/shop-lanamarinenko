const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" },
  roles: [{ type: String, ref: "Role" }],
  dateRegistration: { type: Date, default: Date.now },
});

module.exports = model("User", User);
