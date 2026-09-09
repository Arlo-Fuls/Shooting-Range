import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./Home.scss";

function HomePage() {
  return (
    <>
      <header>
        {/* Landing page */}
        <section className="hero">
          <nav className="hero__nav">
            <ul>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Location">Range Guide</Link>
              </li>
            </ul>
          </nav>

          {/* Replace h1 with svg */}
          <div className="hero__group">
            <h1>Assegai Shooting Range</h1>
            <button className="hero__button">
              Book a session <span className="arrow">&rarr;</span>
            </button>
          </div>
          {/* <img className="hero__logo" alt="Buisness Logo" /> */}
        </section>
        <div className="navMain__container">
          <Navbar />
        </div>
      </header>

      <main>
        {/* Pricing and time */}
        <section className="pricing"></section>
      </main>
    </>
  );
}

export default HomePage;
