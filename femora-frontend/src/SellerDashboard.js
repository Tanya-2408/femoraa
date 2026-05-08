import React, { useState } from "react";
import "./styles.css";

function SellerDashboard() {

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
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  // ADD PRODUCT
  const handleAddProduct = () => {

    if (
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.price ||
      !newProduct.stock
    ) {
      alert("Please fill all fields");
      return;
    }

    setProducts([
      ...products,
      {
        ...newProduct,
        status: "Active"
      }
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

        <h2 className="logo">FEMORA</h2>

        <p>📊 Dashboard</p>
        <p className="active">📦 My Products</p>
        <p>🛒 Orders</p>
        <p>💰 Earnings</p>
        <p>⭐ Reviews</p>

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

        {/* ADD PRODUCT FORM */}
        {showForm && (

          <div className="add-form">

            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
            />

            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
            />

            <input
              type="text"
              name="stock"
              value={newProduct.stock}
              onChange={handleChange}
              placeholder="Stock Status"
            />

            <button onClick={handleAddProduct}>
              Add Product
            </button>

          </div>
        )}

        {/* PRODUCT TABLE */}
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

            {products.map((product, index) => (

              <tr key={index}>

                <td>🍰 {product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.stock}</td>

                <td>
                  <span className="status active">
                    {product.status}
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