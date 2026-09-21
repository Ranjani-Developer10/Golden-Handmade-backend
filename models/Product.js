const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  detailedDescription: String,

  price: Number,
  originalPrice: Number,
  weight: String,

  image: String,
  images: [String],

  category: String,

  sellerId: String,
  sellerName: String,
  sellerLocation: String,
  sellerVerified: Boolean,

  rating: Number,
  reviewCount: Number,

  ingredients: [String],
  dietaryInfo: [String],

  deliveryInfo: String,

  createdAt: String,
  stock: Number,
});

module.exports = mongoose.model("Product", ProductSchema);