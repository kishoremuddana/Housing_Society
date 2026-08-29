import "./Hero.css";
import heroImage from "../../assets/status5.png";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <img src={heroImage} alt="Hero" className="hero-image" />
            </div>
            <a href="#contact" className="enquire-button">ENQUIRE NOW</a>
        </section>
    )
}

export default Hero;