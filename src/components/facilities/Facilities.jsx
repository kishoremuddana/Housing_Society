import "./Facilities.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDumbbell,
  faPersonWalking,
  faPersonSwimming,
  faDoorOpen,
  faChargingStation,
  faCouch,
  faTree,
  faCar,
  faChild,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";

function Facilities() {

  const facilities = [
    {
      icon: faDumbbell,
      name: "Gym",
    },
    {
      icon: faChildReaching,
      name: "Yoga",
    },
    {
      icon: faPersonSwimming,
      name: "Pool",
    },
    {
      icon: faPersonWalking,
      name: "Walking Area",
    },
    {
      icon: faDoorOpen,
      name: "Conference Room",
    },
    {
      icon: faChargingStation,
      name: "EV Charging",
    },
    {
      icon: faChild,
      name: "Creche",
    },
    {
      icon: faCouch,
      name: "Auditorium",
    },
    {
      icon: faTree,
      name: "Garden",
    },
    {
      icon: faCar,
      name: "Car Parking",
    },
  ];

  return (
    <section className="amenities">

      <h2>Extra Fun, More Happiness</h2>

      <p className="amenities-description">
        Extra fun for children & alike starts the moment you are on the
        elevation at the grand floor. Designated blocks have their own
        areas for children so that they don’t have to move far from the
        block once they come down. Adventurous ones in an extra proactive
        area for growing and sweating out — swing over or slide & glide,
        you sure are in for extra fun here!
      </p>

      <div className="amenities-list">

        {facilities.map((facility, index) => (

          <div className="amenity" key={index}>

            <FontAwesomeIcon
              icon={facility.icon}
              className="amenity-icon"
            />

            <span>{facility.name}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Facilities;