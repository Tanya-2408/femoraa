import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function SellerProfile() {
  const { name } = useParams();

  const products = [
    { title: "Chocolate Cake", price: "₹500" },
    { title: "Custom Birthday Cake", price: "₹1200" },
    { title: "Cupcake Box", price: "₹300" }
  ];

  return (
    <section className="profile-page">

      <h1>{name}</h1>
      <p className="profile-sub">Artisan Seller</p>

      <div className="profile-products">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.price}</p>

            <button className="buy-btn">
              Order Now →
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default SellerProfile;