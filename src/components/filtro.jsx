import React, { useState } from "react";
import "./filtro.css";

const categories = [
  "Todos",
  "Prescolar",
  "Primaria Baja (1° a 3°)",
  "Primaria Alta (4° a 6°)",
  "Secundaria",
  "Preparatoria",
  "Universidad"
];

const Filtro = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div className="filter-container">
      <div className="inner">
        <h2>Escoge tu nivel escolar</h2>
        <div className="filter-buttons">
            {categories.map((category) => (
            <button
                key={category}
                className={`filter-btn ${
                activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
            >
                {category}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filtro;
