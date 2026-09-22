import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./Location.scss";

function LocationPage() {
  return (
    <>
      <header className="rangerGuide__mainHeader mainSection">
        <div className="header__background"></div>
        {/* Page specific navbar */}
        <div className="navMain__container--location">
          <Navbar />
        </div>

        <div className="header__bottom clamped">
          <div className="header__left">
            <h2>Range Guide</h2>
            <p>Take a look at the path to the range with all of the most important stops on the way</p>
          </div>
          <button className="location__nextButton">Next</button>
        </div>
        <h2></h2>
      </header>

      <main>
        <div className="locationImage__container"></div>
        <section className="rangeGuide--1 mainSection">
          <h3>Getting to the range</h3>
        </section>
      </main>
    </>
  );
}

export default LocationPage;
