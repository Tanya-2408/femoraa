const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.use("/api/seller", require("./routes/seller"));

// ✅ CONNECT DB
mongoose.connect("mongodb://127.0.0.1:27017/femora")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});