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
            <img className="hero__title" alt="Assegai Shooting Range" src="src\assets\SVGs\Assegai Shooting Range.svg" />
            <button className="hero__button">
              Book a session <img className="arrow" alt="" src="src\assets\SVGs\Arrow.svg" />
            </button>
          </div>
          {/* Logo placed here as it will be animated outside of the flow */}
          <img className="hero__logo" alt="Buisness Logo" src="src\assets\SVGs\Logo.svg" />
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
              <p>Something amazing I guess</p>
            </div>
            <img className="pricing__image" alt="Decorative Image" />
          </div>

          <div className="pricing__bottom clamped">
            <div className="card">
              <div className="card__top">
                <h3>Price</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Money.svg" />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>

            <div className="card">
              <div className="card__top">
                <h3>Time</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Calender.svg" />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>

            <div className="card">
              <div className="card__top">
                <h3>Firearms and amunition</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Gun.svg" />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>

            <div className="card">
              <div className="card__top">
                <h3>Targets</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Target.svg" />
              </div>
              <div className="card__bottom">Something amazing I guess</div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="gallery">
          <div className="gallery__top clamped">
            <h2>Gallery</h2>
            <p>Take a look at the ranges</p>
          </div>
          <div className="gallery__middle clamped">
            <div className="image-container"></div>
            <div className="image-details">
              <h3 className="image-title">Range 1</h3>
              <p className="image-description">Nice looking</p>
              <div className="gallery__buttons">
                <button className="gallery__button" id="gallery__back">
                  Previous
                </button>
                <button className="gallery__button" id="gallery__next">
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="gallery__bottom clamped">
            <p>Want to see more of the range?</p>
            <p>
              Take a look at our <Link>Range Guide</Link>!
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="contact">
          <div className="contact__top clamped">
            <div className="contact__intro">
              <h2>Contact Details</h2>
              <p>Feel free to contact us on any of the following channels</p>
            </div>
            <div className="contact__rules">
              <p>New to the range?</p>
              <p>Check out our rules</p> {/* Add modal on rules */}
            </div>
          </div>
          <div className="contact__bottom clamped">
            <div className="contact__card">
              <img />
              <p>Tel: 8888888</p>
            </div>
            <div className="contact__card">
              <img />
              <p>Email: smthing@amzng.iguess</p>
            </div>
            <div className="contact__card">
              <img />
              <p>I don't remember</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
