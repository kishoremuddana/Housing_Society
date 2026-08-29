import { useState } from "react";
import "./navbar.css";
import housingSociety from "../../assets/housing_society.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img
          src={housingSociety}
          alt="Housing Society"
        />
      </div>

      {/* Hamburger */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation */}
      <div className={menuOpen ? "nav-links open" : "nav-links"}>

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          HOME
        </a>

        <a
          href="#b06"
          onClick={() => setMenuOpen(false)}
        >
          BO6 Tower
        </a>

        <a
          href="#floor-plans"
          onClick={() => setMenuOpen(false)}
        >
          FLOOR PLANS
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          CONTACT
        </a>

      </div>

    </nav>
  );
}

export default Navbar;