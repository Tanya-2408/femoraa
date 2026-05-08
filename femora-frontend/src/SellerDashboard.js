import React, { useState } from "react";
import "./styles.css";

function SellerDashboard() {
  const [active, setActive] = useState("products");

  // PRODUCT STATE
  const [products, setProducts] = useState([
    {
      name: "Chocolate Truffle Cake",
      category: "Baking",
      price: "850",
      stock: "Available",
      status: "Active"
    },
    {
      name: "Custom Wedding Cake",
      category: "Baking",
      price: "3500",
      stock: "On Order",
      status: "Active"
    }
  ]);

  // FORM STATE
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // ADD PRODUCT
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Fill all fields");
      return;
    }

    setProducts([
      ...products,
      { ...newProduct, status: "Active" }
    ]);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: ""
    });

    setShowForm(false);
  };

  return (
    <div className="dash-container">

      {/* SIDEBAR */}
      <div className="dash-sidebar">
        

        <p onClick={() => setActive("dashboard")}>📊 Dashboard</p>
        <p className="active">📦 My Products</p>
        <p onClick={() => setActive("orders")}>🛒 Orders</p>
        <p onClick={() => setActive("earnings")}>💰 Earnings</p>
        <p onClick={() => setActive("reviews")}>⭐ Reviews</p>
      </div>

      {/* MAIN */}
      <div className="dash-main">

        {/* HEADER */}
        <div className="dash-header">
          <h2>YOUR PRODUCTS</h2>

          <button
            className="add-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Product
          </button>
        </div>

        {/* ADD FORM */}
        {showForm && (
          <div className="add-form">
            <input
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Product name"
            />

            <input
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
            />

            <input
              name="stock"
              value={newProduct.stock}
              onChange={handleChange}
              placeholder="Stock"
            />

            <button onClick={handleAddProduct}>
              Add
            </button>
          </div>
        )}

        {/* TABLE */}
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, i) => (
              <tr key={i}>
                <td>🍰 {p.name}</td>
                <td>{p.category}</td>
                <td>₹{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <span className="status active">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default SellerDashboard;