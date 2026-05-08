const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  skill: String,
  phone: String
});

module.exports = mongoose.model("Seller", sellerSchema);