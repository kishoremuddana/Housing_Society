import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "flag-icons/css/flag-icons.min.css";
import "./Contact.css";
import logo from "../../assets/Contact_logo.png";

function Contact() {

  // =========================
  // FORM STATES
  // =========================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [showCountries, setShowCountries] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const countryDropdownRef = useRef(null);

   useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setShowCountries(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  // =========================
  // COUNTRY STATES
  // =========================

  const countries = [
    { name: "India", code: "+91", country: "in" },
    { name: "United States", code: "+1", country: "us" },
    { name: "United Kingdom", code: "+44", country: "gb" },
    { name: "Australia", code: "+61", country: "au" },
    { name: "Canada", code: "+1", country: "ca" },
    { name: "Germany", code: "+49", country: "de" },
    { name: "France", code: "+33", country: "fr" },
    { name: "Italy", code: "+39", country: "it" },
    { name: "Japan", code: "+81", country: "jp" },
    { name: "China", code: "+86", country: "cn" },
    { name: "Singapore", code: "+65", country: "sg" },
    { name: "United Arab Emirates", code: "+971", country: "ae" },
    { name: "Saudi Arabia", code: "+966", country: "sa" },
    { name: "South Africa", code: "+27", country: "za" },
    { name: "New Zealand", code: "+64", country: "nz" },
    { name: "Brazil", code: "+55", country: "br" },
    { name: "Mexico", code: "+52", country: "mx" },
    { name: "Russia", code: "+7", country: "ru" },
  ];

  const phoneLengths = {
  in: 10, // India
  us: 10, // USA
  gb: 10, // UK
  au: 9,  // Australia
  ca: 10, // Canada
  de: 11, // Germany
  fr: 9,  // France
  it: 10, // Italy
  jp: 10, // Japan
  cn: 11, // China
  sg: 8,  // Singapore
  ae: 9,  // UAE
  sa: 9,  // Saudi Arabia
  za: 9,  // South Africa
  nz: 9,  // New Zealand
  br: 11, // Brazil
  mx: 10, // Mexico
  ru: 10, // Russia
};

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  // =========================
  // SELECT COUNTRY
  // =========================

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setShowCountries(false);
    setPhone("");
  };

  // =========================
  // FORM SUBMIT
  // =========================

  const handleSubmit = (e) => {

    // Prevent page refresh
    e.preventDefault();

    // =========================
    // NAME VALIDATION
    // =========================

    if (name.trim() === "") {
      toast.error("Please enter your name.");
      return;
    }

    // =========================
    // EMAIL VALIDATION
    // =========================

    if (email.trim() === "") {
      toast.error("Please enter your email.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // =========================
    // PHONE VALIDATION
    // =========================

    if (phone.trim() === "") {
      toast.error("Please enter your phone number.");
      return;
    }

    // Remove spaces and other characters
    const phoneNumber = phone.replace(/\D/g, "");

    const requiredLength = phoneLengths[selectedCountry.country];

    if (phoneNumber.length !== requiredLength) {
      toast.error(
      `Please enter a valid ${requiredLength}-digit phone number.`
      ) ;
      return;
    }

    // =========================
    // LOCATION VALIDATION
    // =========================

    if (location.trim() === "") {
      toast.error("Please enter your location.");
      return;
    }

    // =========================
    // MESSAGE VALIDATION
    // =========================

    if (message.trim() === "") {
      toast.error("Please enter your message.");
      return;
    }

    if (!isAuthorized) {
      toast.warning("Please authorize us to contact you.");
      return;
    }

    // =========================
    // SUCCESS
    // =========================

    toast.success(
      "Thank you! We will contact you soon."
    );

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact">

      {/* =========================
          LEFT SIDE
      ========================= */}

      <div className="contact-left">

        <img
          src={logo}
          alt="Housing Society"
          className="contact-logo"
        />

        <h2>ABOUT B06 TOWER</h2>

        <p>
          Sahira Township, Gajularamaram is a large residential community
          in North Hyderabad. Spread over 35 acres, it offers 3 BHK
          apartments with modern amenities like a gym, power backup,
          and play areas. Located near major roads, schools, and hospitals,
          it provides great connectivity and is ideal for both living
          and investment.
        </p>

        <div className="address">

          <span className="location-icon">📍</span>

          <div>
            Housingsociety.net
            <br />
            B06 Tower, Sahira Township,
            <br />
            Gajularamaram, Hyderabad,
            <br />
            Telangana 500055
          </div>

        </div>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="contact-right">

        <h2>GET IN TOUCH</h2>

        <p className="contact-description">
          Want to know more about Sahira Township? Fill out the contact
          form below, and our team will reach out to you soon.
        </p>

        <h3>Contact</h3>

        <form  onSubmit={handleSubmit}>

          {/* NAME */}

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


          {/* EMAIL */}

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          {/* =========================
              PHONE NUMBER
          ========================= */}

          <div className="phone-wrapper" ref={countryDropdownRef}>

            <button
              type="button"
              className="country-button"
              onClick={() =>
                setShowCountries(!showCountries)
              }
            >

              <span
                className={`fi fi-${selectedCountry.country}`}
              ></span>

              <span className="arrow">
                ▾
              </span>

            </button>


            <span className="country-code">
              {selectedCountry.code}
            </span>


            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="phone-number"
            />


            {/* =========================
                COUNTRY LIST
            ========================= */}

            {showCountries && (

              <div className="country-list">

                {countries.map((country, index) => (

                  <div
                    className="country-option"
                    key={index}
                    onClick={() =>
                      selectCountry(country)
                    }
                  >

                    <span
                      className={`fi fi-${country.country}`}
                    ></span>

                    <span className="country-name">
                      {country.name}
                    </span>

                    <span className="country-code-list">
                      {country.code}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* LOCATION */}

          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />


          {/* MESSAGE */}

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>


          {/* CHECKBOX */}

          <label className="checkbox-container">

            <input
              type="checkbox"
              checked={isAuthorized}
              onChange={(e) => setIsAuthorized(e.target.checked)}
            />

            <span>
              I authorize Housingsociety.net to contact me via Email,
              SMS, WhatsApp, and Call. This will override DND/DNDC
              preferences.
            </span>

          </label>


          {/* SUBMIT */}

          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;