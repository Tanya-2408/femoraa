import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./styles.css";

import Home from "./Home";
import Explore from "./Explore";
import Categories from "./Categories";
import Shopping from "./Shopping";
import Seller from "./Seller";
import SellerProfile from "./SellerProfile";
import SellerDashboard from "./SellerDashboard";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="nav-logo">Femora</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/categories">Categories</Link>
        </div>

        <div className="nav-btns">
          <button
            className="btn-ghost"
            onClick={() => navigate("/shopping")}
          >
            I’m Shopping
          </button>

          <button
            className="btn-primary"
            onClick={() => navigate("/seller")}
          >
            Join as Seller
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/seller" element={<Seller />} />
         <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/seller/:name" element={<SellerProfile />} />
      </Routes>
    </>
  );
}

export default App;