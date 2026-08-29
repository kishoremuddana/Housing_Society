import { useState } from "react";
import "./Floorplans.css";
import layout from "../../assets/layout.png";
import layoutplan from "../../assets/layoutPlan.jpg";
import map from "../../assets/map.jpg";
function FloorPlans() {

  const [activeTab, setActiveTab] = useState("layout");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      image: layout,
      name: "Site Layout",
    },
    {
      image: layoutplan,
      name: "Floor Plans",
    },
    {
      image: map,
      name: "Map Location",
    },
  ];
  const openImage = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };
  const previousImage = () => {
    setCurrentImage(
      currentImage === 0
        ? images.length - 1
        : currentImage - 1
    );
  };
  const nextImage = () => {
    setCurrentImage(
      currentImage === images.length - 1
        ? 0
        : currentImage + 1
    );
  };

  return (
    <section className="floorplans" id="floor-plans">

      <h2>Site Layout & Floor Plans</h2>

      <div className="floorplans-tabs">

        <button
          onClick={() => setActiveTab("layout")}
          className={activeTab === "layout" ? "active" : ""}
        >
          Site Layout
        </button>

        <button
          onClick={() => setActiveTab("floorplans")}
          className={activeTab === "floorplans" ? "active" : ""}
        >
          Floor Plans
        </button>

        <button
          onClick={() => setActiveTab("map")}
          className={activeTab === "map" ? "active" : ""}
        >
          Map Location
        </button>

      </div>

      <div className="floorplans-image">

        {activeTab === "layout" && (
          <img src={layout} alt="Site Layout"  onClick={() => openImage(0)} />
        )}

        {activeTab === "floorplans" && (
          <img src={layoutplan} alt="Floor Plans"   onClick={() =>  openImage(1)} />
        )}

        {activeTab === "map" && (
          <img src={map} alt="Map Location"   onClick={() =>  openImage(2)} />
        )}

      </div>
      {isOpen && (
        <div className="image-modal">
          <button className="close-button"
          onClick={() => setIsOpen(false)}>
            ×
          </button>
          <button className="prev-button"
          onClick= {previousImage}
          >
            ‹
          </button>

          <img src={images[currentImage].image} 
          alt={images[currentImage].name}
          />
          <button className="next-button"
          onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}
export default FloorPlans;