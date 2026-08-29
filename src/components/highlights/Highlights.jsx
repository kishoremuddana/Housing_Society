import { useState } from "react";
import "./Highlights.css";

function Highlights() {

  const [activeCategory, setActiveCategory] = useState("SCHOOLS");

  const categories = [
    "SCHOOLS",
    "HOSPITALS",
    "TRANSPORT",
    "MALLS",
    "EDUCATIONAL INSTITUTIONS",
    "PARKS",
  ];

  const locations = {
    SCHOOLS: [
      {
        name: "Urban International School",
        distance: "1.9 KM",
      },
      {
        name: "Geetanjali Concept School",
        distance: "2.6 KM",
      },
      {
        name: "Tatva Global School",
        distance: "2.6 KM",
      },
      {
        name: "Bachpan A Play School",
        distance: "3.0 KM",
      },
      {
        name: "Orchids The International School",
        distance: "3.2 KM",
      },
    ],

    HOSPITALS: [
      {
        name: "Nearby Hospital",
        distance: "2.0 KM",
      },
      {
        name: "City Hospital",
        distance: "2.5 KM",
      },
    ],

    TRANSPORT: [
      {
        name: "Main Road",
        distance: "1.0 KM",
      },
      {
        name: "Bus Stop",
        distance: "1.5 KM",
      },
    ],

    MALLS: [
      {
        name: "Nearby Mall",
        distance: "3.0 KM",
      },
      {
        name: "Shopping Mall",
        distance: "4.0 KM",
      },
    ],

    "EDUCATIONAL INSTITUTIONS": [
      {
        name: "Educational Institution",
        distance: "2.5 KM",
      },
      {
        name: "College",
        distance: "3.5 KM",
      },
    ],

    PARKS: [
      {
        name: "Nearby Park",
        distance: "1.5 KM",
      },
      {
        name: "Community Park",
        distance: "2.0 KM",
      },
    ],
  };

  return (
    <section className="highlights">

      <h2>Location Highlights</h2>

      <div className="highlight-tabs">

        {categories.map((category) => (

          <button
            key={category}
            className={
              activeCategory === category ? "active" : ""
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      <div className="highlight-list">

        {locations[activeCategory].map((location, index) => (

          <div className="highlight-item" key={index}>

            <span className="highlight-arrow">→</span>

            <span className="highlight-name">
              {location.name}
            </span>

            <span className="highlight-distance">
              {location.distance}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Highlights;