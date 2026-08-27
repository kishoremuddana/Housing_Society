import "./navbar.css";
import housingSociety from "../../assets/housing_society.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={housingSociety} alt="Housing Society" />
      </div>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#b06">BO6 Tower</a>
        <a href="#floor-plans">FLOOR PLANS</a>
        <a href="#contact">CONTACT</a>
      </div>

    </nav>
  );
}

export default Navbar;