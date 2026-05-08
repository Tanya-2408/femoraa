import React from "react";

function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-grid"></div>

        <div className="hero-content">
          <span className="hero-tag">
            ✦ WOMEN · SKILLS · INDEPENDENCE
          </span>

          <h1>
            <span className="line1">Her Skills,</span><br />
            <span className="line2">Her Empire.</span>
          </h1>

          <p className="hero-sub">
            Femora connects talented women with customers who appreciate their craft.
          </p>

          <div className="hero-ctas">
            <a href="/explore" className="btn-lg btn-lg-rose">
              ✦ Explore Sellers
            </a>
            <a href="#sell" className="btn-lg btn-lg-gold">
              Start Selling Free →
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">12K+</div>
              <div className="stat-label">SKILLED WOMEN</div>
            </div>

            <div className="stat">
              <div className="stat-num">48K+</div>
              <div className="stat-label">HAPPY CUSTOMERS</div>
            </div>

            <div className="stat">
              <div className="stat-num">200+</div>
              <div className="stat-label">CITIES</div>
            </div>

            <div className="stat">
              <div className="stat-num">4.9★</div>
              <div className="stat-label">AVG RATING</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW */}
      <section className="how">
        <div className="how-container">
          <span className="how-tag">HOW IT WORKS</span>

          <h2 className="how-title">
            From Skill to <span>Income</span>
          </h2>

          <p className="how-sub">
            Three simple steps to start your journey with Femora.
          </p>

          <div className="how-steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-icon">👤</div>
              <h3>Create Your Profile</h3>
              <p>Build a profile showcasing your skills.</p>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-icon">📦</div>
              <h3>List Your Products</h3>
              <p>Add products with photos and pricing.</p>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-icon">⭐</div>
              <h3>Get Reviews & Earn</h3>
              <p>Customers order and leave reviews.</p>
            </div>

            <div className="step">
              <div className="step-number">04</div>
              <div className="step-icon">💰</div>
              <h3>Grow Independently</h3>
              <p>Turn your skills into income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <p className="cat-sub">WHAT YOU’LL FIND</p>

        <h2 className="cat-title">
          Explore by <span>Category</span>
        </h2>

        <p className="cat-desc">
          From handcrafted delicacies to artistic masterpieces.
        </p>

        <div className="cat-grid">
          {[
            ["🎂","Baking & Cakes","1,240 sellers"],
            ["🍲","Home Cooking","2,100 sellers"],
            ["🪡","Tailoring","890 sellers"],
            ["🌿","Mehndi Art","650 sellers"],
            ["🎨","Handicrafts","980 sellers"],
            ["📚","Tutoring","760 sellers"],
            ["💍","Jewelry","540 sellers"],
            ["🌸","Beauty","430 sellers"]
          ].map(([icon,title,count],i)=>(
            <div className="cat-card" key={i}>
              <div className="cat-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <p className="feat-sub">FEATURED SELLERS</p>

        <h2 className="feat-title">
          Meet Our <span>Top Creators</span>
        </h2>

        <div className="feat-grid">
          {[
            ["A","Ananya Sharma","Baking Expert","Bangalore","₹500","4.9","120"],
            ["P","Pooja Verma","Home Chef","Delhi","₹250","4.8","98"],
            ["M","Meera Iyer","Jewelry Designer","Chennai","₹800","5.0","150"],
            ["R","Riya Kapoor","Mehndi Artist","Mumbai","₹1500","4.7","80"]
          ].map((s,i)=>(
            <div className="feat-card" key={i}>
              <div className="feat-top">
                <div className="avatar">{s[0]}</div>
                <div>
                  <h3>{s[1]}</h3>
                  <p className="feat-role">{s[2]}</p>
                </div>
              </div>

              <div className="feat-tags">
                <span>Top Rated</span>
                <span>Verified</span>
              </div>

              <p className="feat-desc2">
                Premium handcrafted services with excellent reviews.
              </p>

              <div className="feat-info">
                <span>📍 {s[3]}</span>
                <span>💰 From {s[4]}</span>
              </div>

              <div className="feat-meta">
                <span>⭐ {s[5]}</span>
                <span>{s[6]} orders</span>
              </div>

              <button className="feat-btn">View Profile →</button>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section className="stories">
        <p className="story-sub">STORIES</p>

        <h2 className="story-title">
          Real Women, <span>Real Impact</span>
        </h2>

        <p className="story-desc">
          Hear from the women who turned their passion into a livelihood on Femora.
        </p>

        <div className="story-grid">
          <div className="story-card">
            <div className="story-top">
              <div className="avatar">N</div>
              <div>
                <h3>Neha Gupta</h3>
                <p>Home Baker • Bangalore</p>
              </div>
            </div>
            <p className="story-text">
              “What started as baking is now my full-time business.”
            </p>
            <span className="story-tag">₹40K/month</span>
          </div>

          <div className="story-card">
            <div className="story-top">
              <div className="avatar">S</div>
              <div>
                <h3>Shalini Verma</h3>
                <p>Tailor • Delhi</p>
              </div>
            </div>
            <p className="story-text">
              “Now I run my own boutique with online orders.”
            </p>
            <span className="story-tag">200+ clients</span>
          </div>

          <div className="story-card">
            <div className="story-top">
              <div className="avatar">A</div>
              <div>
                <h3>Ayesha Khan</h3>
                <p>Mehndi Artist • Mumbai</p>
              </div>
            </div>
            <p className="story-text">
              “Now I get bookings months in advance.”
            </p>
            <span className="story-tag">Fully booked</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>
          Your Skills Deserve <span>To Be Seen</span>
        </h2>

        <p>
          Join thousands of women building independence through Femora.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">Start Selling Free</button>
          <button className="btn-ghost">Shop Now</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-bottom">
          <span>© 2025 Femora</span>
          <span>Made with ♥ for women everywhere</span>
        </div>
      </footer>
    </>
  );
}

export default Home;