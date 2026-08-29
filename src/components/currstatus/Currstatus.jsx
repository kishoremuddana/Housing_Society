import { useState } from "react";
import "./Currstatus.css";
import Status6 from "../../assets/status6.png";
import Status5 from "../../assets/status5.png";
import Status3 from "../../assets/status3.jpg";
import Status4 from "../../assets/status4.jpg";

const images = [
    Status6,
    Status5,
    Status3,
    Status4
  ];

function Currstatus() {

  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };
  const previousImage = () => {
    setCurrentImage(
    (currentImage - 1 + images.length) % images.length);
  };

  return (
    <section className="status" id="status">

      <h2>Current Project Status - Nov 2025</h2>

      <div className="status-image">

        <img
          src={images[currentImage]}
          alt="Project Status"
        />

        <button
          className="left-arrow"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ‹
        </button>


        <button
          className="right-arrow"
          onClick={nextImage}
          aria-label="Next image"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default Currstatus;