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
        <section className="pricing">
          <div className="pricing__top clamped">
            <div className="pricing__text">
              <h2>Availability and Pricing</h2>
              <text>Something amazing I guess</text>
            </div>
            <img className="pricing__image" alt="Decorative Image" />
          </div>

          <div className="pricing__bottom clamped">
            <div className="card">
              <div className="card__top">
                <h3>Price</h3>
                <img />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>

            <div className="card">
              <div className="card__top">
                <h3>Time</h3>
                <img />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>

            <div className="card">
              <div className="card__top">
                <h3>Holiday</h3>
                <img />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>

            <div className="card">
              <div className="card__top">
                <h3>Targets</h3>
                <img />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="gallery"></section>
      </main>
    </>
  );
}

export default HomePage;
