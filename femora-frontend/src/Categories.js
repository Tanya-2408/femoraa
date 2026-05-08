import React from "react";
import "./styles.css";

function Categories() {

  const categories = [
    {
      name: "Baking",
      line: "From home kitchens to beautiful celebrations."
    },
    {
      name: "Cooking",
      line: "Meals made with love and tradition."
    },
    {
      name: "Mehndi",
      line: "Art that tells stories on every hand."
    },
    {
      name: "Crafts",
      line: "Creativity turned into meaningful pieces."
    },
    {
      name: "Tutoring",
      line: "Knowledge shared with passion and care."
    }
  ];

  return (
    <section className="cat-story">

      <p className="cat-sub">DISCOVER</p>

      <h2 className="cat-title">
        The Skills Behind <span>Femora</span>
      </h2>

      <div className="cat-story-list">
        {categories.map((c, i) => (
          <div key={i} className="cat-story-item">
            <h3>{c.name}</h3>
            <p>{c.line}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Categories;