import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import About from "./components/about/About";
import FloorPlans from "./components/floorplans/Floorplans";
import Currstatus from "./components/currstatus/Currstatus";
import Location from "./components/location/Location";
import Facilities from "./components/facilities/Facilities";
import Highlights from "./components/highlights/Highlights";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FloorPlans />
      <Currstatus />
      <Location />
      <Facilities />
      <Highlights />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

