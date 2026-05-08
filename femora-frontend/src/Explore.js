import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Explore() {
  const navigate = useNavigate();

  const sellers = [
    { name: "Ananya Sharma", role: "Baking", city: "Bangalore", rating: 4.9, orders: 248 },
    { name: "Fatima Sheikh", role: "Mehndi", city: "Hyderabad", rating: 4.8, orders: 312 },
    { name: "Priya Nair", role: "Crafts", city: "Kochi", rating: 5.0, orders: 189 },
    { name: "Sunita Rao", role: "Cooking", city: "Pune", rating: 4.7, orders: 145 },
    { name: "Meera Iyer", role: "Tutoring", city: "Chennai", rating: 4.9, orders: 97 },
    { name: "Anita Singh", role: "Tutoring", city: "Delhi", rating: 4.9, orders: 203 }
  ];

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = sellers.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.role.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      activeFilter === "All" || s.role === activeFilter;

    return matchSearch && matchFilter;
  });

  return (
    <section className="explore">

      {/* 🔥 TITLE FIRST */}
      <p className="explore-sub">DISCOVER TALENT</p>

      <h2 className="explore-title">
        Explore <span>Femora</span>
      </h2>

      <p className="explore-desc">
        Find skilled women near you offering handmade products and services with love.
      </p>

      {/* 🔥 SEARCH */}
      <div className="explore-search">
        <input
          placeholder="Search for cakes, mehndi, crafts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      {/* 🔥 FILTERS */}
      <div className="explore-filters">
        {[
          { name: "All", icon: "✨" },
          { name: "Baking", icon: "🎂" },
          { name: "Cooking", icon: "🍲" },
          { name: "Mehndi", icon: "🌿" },
          { name: "Crafts", icon: "🎨" },
          { name: "Tutoring", icon: "📚" }
        ].map((cat) => (
          <span
            key={cat.name}
            className={activeFilter === cat.name ? "active" : ""}
            onClick={() => setActiveFilter(cat.name)}
          >
            {cat.icon} {cat.name}
          </span>
        ))}
      </div>

      {/* 🔥 CARDS */}
      <div className="explore-grid">
        {filtered.map((s, i) => (
          <div
            className="explore-card"
            key={i}
            onClick={() => navigate(`/seller/${s.name}`)}
            style={{ cursor: "pointer" }}
          >
            <div className={`explore-banner ${s.role.toLowerCase()}`}>
              <span className="card-icon">
                {s.role === "Baking" && "🎂"}
                {s.role === "Cooking" && "🍲"}
                {s.role === "Mehndi" && "🌿"}
                {s.role === "Crafts" && "🎨"}
                {s.role === "Tutoring" && "📚"}
              </span>
            </div>

            <div className="explore-avatar">
              {s.name[0]}
            </div>

            <div className="explore-content">
              <h3>{s.name}</h3>
              <p className="explore-role">✦ {s.role}</p>
              <p className="explore-city">📍 {s.city}</p>

              <div className="explore-rating">
                ⭐ {s.rating} • {s.orders} orders
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Explore;