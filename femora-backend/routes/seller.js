const express = require("express");
const router = express.Router();
const Seller = require("../models/Seller");

// ✅ REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, skill } = req.body;

    const existingUser = await Seller.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newSeller = new Seller({
      name,
      email,
      password,
      skill
    });

    await newSeller.save();

    res.json({ message: "Registered successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const seller = await Seller.findOne({ email });

    if (!seller) {
      return res.status(400).json({ message: "User not found" });
    }

    if (seller.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login success",
      seller
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;