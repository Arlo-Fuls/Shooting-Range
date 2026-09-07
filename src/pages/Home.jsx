import { Link } from "react-router";
import "./Home.scss";

function HomePage() {
  return (
    <>
      {/* Landing page */}
      <section className="hero">
        {/* Replace h1 with svg */}
        <h1>Assegai Shooting Range</h1>
        <img className="hero__logo" alt="Buisness Logo" />
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
        <button className="hero__button">Book a session</button>
      </section>
    </>
  );
}

export default HomePage;
