import "./Location.css";

function Location() {
  return (
    <section className="location" id="location">

      <h2>Location</h2>

      <p>
        Find us at Rajiv Swagruha Township, Mettakanigudem,
        Hyderabad, Telangana 500055
      </p>

      <div className="location-map">

        <iframe
          src="https://www.google.com/maps?q=Rajiv+Swagruha+Township,+Mettakanigudem,+Hyderabad,+Telangana+500055&output=embed"
          title="Housing Society Location"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </div>

    </section>
  );
}

export default Location;