import "./About.css";
import status3 from "../../assets/status3.jpg";
function About() {
    return (
        <section className="about" id="b06">
            <h2>About Housing Society</h2>
            <p>
                HousingSociety.net is a platform created to 
                promote real estate projects — including 
                apartments, plots, and townships — that are 
                affordable and value-driven. Our goal is to 
                help people find reliable, low-cost housing 
                options that fit their budget. With a focus 
                on transparency and accessibility, we aim to 
                connect communities with genuine, 
                budget-friendly projects, making property 
                ownership easier and more attainable for 
                everyone.
            </p>
            <div className="about-image">
                <img src={status3} alt="Housing Society" />
            </div>
        </section>
    );
}

export default About;