import React, { useState } from "react";
import "./styles.css";

function Shopping() {
  const [tab, setTab] = useState("register"); // register | signin

  return (
    <div className="shopping-page">

      {/* LEFT */}
      <div className="shop-left full">

        <div className="shop-brand">Femora</div>

        <h2>Welcome Back</h2>
        <p>
          Sign in to discover amazing products from skilled women near you
        </p>

        {/* 🔥 TABS */}
        <div className="auth-tabs">
          <button
            className={`tab ${tab === "register" ? "active" : ""}`}
            onClick={() => setTab("register")}
          >
            ✦ Register
          </button>

          <button
            className={`tab ${tab === "signin" ? "active" : ""}`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
        </div>

        {/* 🔥 FORM SWITCH */}
        <div className="shop-form big">

          {tab === "register" ? (
            <>
              <label>FULL NAME</label>
              <input placeholder="Your name" />

              <label>EMAIL ADDRESS</label>
              <input placeholder="you@example.com" />

              <label>YOUR CITY</label>
              <input placeholder="e.g. Bangalore" />

              <label>PASSWORD</label>
              <input placeholder="Create a strong password" type="password" />

              <button>Create Account ✦</button>
            </>
          ) : (
            <>
              <label>EMAIL ADDRESS</label>
              <input placeholder="you@example.com" />

              <label>PASSWORD</label>
              <input placeholder="Your password" type="password" />

              <button>Sign In →</button>
            </>
          )}

          <p className="seller-link">
            Want to sell? <span>Seller login ✦</span>
          </p>

        </div>
      </div>

      {/* RIGHT */}
      <div className="shop-right">

  <p className="back-link">← Back to Home</p>

  <h1 className="hero-title">
    Discover <span>Hidden</span><br />
    Talent.
  </h1>

  <p className="hero-desc">
    Support local women entrepreneurs and find unique,
    handcrafted products made with love in your city.
  </p>

  <div className="hero-points">
    <p>💛 Browse 12,000+ verified sellers</p>
    <p>💛 Read real, verified customer reviews</p>
    <p>📍 Find local talent in your city</p>
    <p>✨ Support women entrepreneurs</p>
  </div>

</div>

    </div>
  );
}

export default Shopping;