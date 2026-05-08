import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Seller() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("register");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("");
  const [password, setPassword] = useState("");

  // ✅ REGISTER
  const handleRegister = async () => {
    if (!name || !email || !password || !skill) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/seller/register",
        { name, email, password, skill }
      );

      alert(res.data.message);
      navigate("/seller-dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  // ✅ LOGIN
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/seller/login",
        { email, password }
      );

      localStorage.setItem("seller", JSON.stringify(res.data.seller));

      alert("Login success");
      navigate("/seller-dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="seller-page">

      {/* LEFT */}
      <div className="seller-left">
        <p className="back-link" onClick={() => navigate("/")}>
          ← Back to Home
        </p>

        <h1 className="seller-hero">
          Turn Your <br />
          <span>Skills Into</span> <br />
          Income.
        </h1>

        <p className="seller-desc">
          Join 12,000+ women who are earning independently by showcasing their talents on Femora.
        </p>

        <div className="seller-points">
          <p>✦ Free to create your profile & list products</p>
          <p>✦ Verified reviews build your reputation</p>
          <p>✦ Get discovered by local customers</p>
          <p>✦ Secure payments directly to you</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="seller-right glass-card">

        <h2 className="seller-title">Seller Portal</h2>
        <p className="seller-sub">
          Create your account or sign in to manage your store
        </p>

        {/* TABS */}
        <div className="auth-tabs">
          <button
            className={tab === "register" ? "tab active" : "tab"}
            onClick={() => setTab("register")}
          >
            ✦ Register
          </button>

          <button
            className={tab === "login" ? "tab active" : "tab"}
            onClick={() => setTab("login")}
          >
            Sign In
          </button>
        </div>

        {/* REGISTER */}
        {tab === "register" ? (
          <div className="seller-form">

            <label>FULL NAME</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Lakshmi Devi"
            />

            <label>EMAIL ADDRESS</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            <label>YOUR MAIN SKILL</label>
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option value="">Select your skill...</option>
              <option value="Baking">Baking</option>
              <option value="Cooking">Cooking</option>
              <option value="Mehndi">Mehndi</option>
              <option value="Crafts">Crafts</option>
              <option value="Tutoring">Tutoring</option>
            </select>

            <label>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
            />

            <button className="seller-btn" onClick={handleRegister}>
              Create Seller Account ✦
            </button>

          </div>
        ) : (
          /* LOGIN */
          <div className="seller-form">

            <label>EMAIL ADDRESS</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            <label>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />

            <button className="seller-btn" onClick={handleLogin}>
              Sign In →
            </button>

          </div>
        )}

        <p className="seller-bottom">
          Looking to shop?{" "}
          <span onClick={() => navigate("/shopping")}>
            Customer login →
          </span>
        </p>

      </div>
    </section>
  );
}

export default Seller;