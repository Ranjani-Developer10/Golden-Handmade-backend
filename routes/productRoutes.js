// import express from "express";
// import Product from "../models/Product.js";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// export default router;

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add Product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;

