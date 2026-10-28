import { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./Location.scss";

function LocationPage({ pageInert, setPageInert }) {
  useEffect(() => {
    setPageInert(false);
  }, []);

  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <>
      <main className={pageInert ? "location-main inert" : "location-main"}>
        <section className="rangerGuide__mainHeader mainSection" inert={pageInert}>
          <Navbar setPageInert={setPageInert} />

          {/* Colour polygon */}
          <div className="header__background"></div>

          {/* Bottom of header section */}
          <div className="header__bottom clamped">
            <div className="header__left">
              <h2>Range Guide</h2>
              <p>Take a look at the path to the range with all of the most important stops on the way!</p>
            </div>
            {/* <button className="location__nextButton">Next</button> */}
            <a href="https://maps.app.goo.gl/mheG3HnStRzCzQTG9" target="_blank">Find us on Google Maps &rarr;</a>
          </div>
        </section>

        {/* Image with nav buttons */}
        <div className="locationImage__container" inert={pageInert}>
          <button onClick={() => setSectionIndex(0)} className={sectionIndex == 0 ? "pindrop pindrop--large" : "pindrop"}>
            <img src="src/assets/SVGs/Pindrop.svg" alt="Location 1 pin" />
          </button>
          <button onClick={() => setSectionIndex(1)} className={sectionIndex == 1 ? "pindrop pindrop--large" : "pindrop"}>
            <img src="src/assets/SVGs/Pindrop.svg" alt="Location 2 pin" />
          </button>
          <button onClick={() => setSectionIndex(2)} className={sectionIndex == 2 ? "pindrop pindrop--large" : "pindrop"}>
            <img src="src/assets/SVGs/Pindrop.svg" alt="Location 3 pin" />
          </button>
          <button onClick={() => setSectionIndex(3)} className={sectionIndex == 3 ? "pindrop pindrop--large" : "pindrop"}>
            <img src="src/assets/SVGs/Pindrop.svg" alt="Location 4 pin" />
          </button>

          <picture className="locationImage__image">
            {/*  Mobile Image  */}
            <source media="(max-width: 600px)" srcSet="src/assets/SVGs/Roadmap.svg" />
            {/*  Desktop Image */}
            <source media="(min-width: 601px)" srcSet="src/assets/SVGs/Roadmap.svg" />
            {/*  Fallback Image  */}
            <img aria-hidden="true" decoding="async" src="src/assets/SVGs/Roadmap.svg" alt="" />
          </picture>
        </div>

        {/* Conditional Render 1 */}
        {/* Also verify that screen readers update correctly when changing section visibility */}

        {sectionIndex == 0 && <section className="rangeGuide--1 mainSection" inert={pageInert}>
          <div className="rangeGuide__header-container">
            <img src="src/assets/clutter/flourish-flipped.png" alt="" />
            <h3>Getting to the range</h3>
            <img src="src/assets/clutter/flourish.png" alt="" />
          </div>


          <div className="rangeGuide--1__top clamped-wider">
            <picture className="rangeGuide--1__img">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/images/Road1.png" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/images/Road1.png" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" src="src/assets/images/Road1.png" alt="" />
            </picture>
            <p className="rangeGuide--1__text">Something amazing I guess</p>
          </div>

          <div className="rangeGuide--1__middle clamped-wider">
            {/* Order of elements changed in stylesheet */}
            <picture className="rangeGuide--1__img">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/images/Road2.png" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/images/Road2.png" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" src="src/assets/images/Road2.png" alt="" />
            </picture>
            <p className="rangeGuide--1__text">Something amazing I guess</p>
          </div>

          <div className="rangeGuide--1__bottom clamped-wider">
            <picture className="rangeGuide--1__img rangeGuide--1__img--large">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/images/Plot-enterance.jpg" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/images/Plot-enterance.jpg" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" src="src/assets/images/Plot-enterance.jpg" alt="" />
            </picture>
          </div>

          <div className="rangeGuide__sectionEnd clamped-wider">
            <p>Welcome to Assegai Shooting Range!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(1)}>Next Section &rarr;</button>
          </div>
        </section>}

        {/* Conditional Render 2 */}
        {sectionIndex == 1 && <section className="rangeGuide--2 mainSection" inert={pageInert}>
          <h3>Tuckshop</h3> {/* ?? */}
          <div className="rangeGuide--2__top clamped">
            <div className="rangeGuide--2__left">
              <img className="rangeGuide--2__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            </div>
            <div className="rangeGuide--2__right">
              <p>I seriously don't know</p>
              <img className="rangeGuide--2__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            </div>
            <div className="rangeGuide--2__extra">
              <img className="rangeGuide--2__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            </div>
          </div>
          <div className="rangeGuide--2__bottom clamped">
            {/* Menu */}
            {/* Still viable?? */}
            <img className="rangeGuide--2__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
          </div>
          <div className="rangeGuide__sectionEnd clamped">
            <p>Order in person or call ahead!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(2)}>Next</button>
          </div>
        </section>}

        {/* Conditional Render 3 */}
        {sectionIndex == 2 && <section className="rangeGuide--3 mainSection" inert={pageInert}>
          <h3>Office</h3>
          <div className="rangeGuide--3__top clamped">
            <img className="rangeGuide--3__img--left" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            <img className="rangeGuide--3__img--right" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
          </div>
          <div className="rangeGuide__sectionEnd clamped">
            <p>Now you are ready to get shooting!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(3)}>Next</button>
          </div>
        </section>}

        {/* Conditional Render 4 */}
        {sectionIndex == 3 && <section className="rangeGuide--4 mainSection" inert={pageInert}>
          <h3>The Range</h3>
          <div className="rangeGuide--4__top clamped">
            <img className="rangeGuide--4__img--head" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            <p>Idk</p>
          </div>
          <div className="rangeGuide--4__bottom clamped">
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
          </div>
          <div className="rangeGuide__sectionEnd clamped">
            <p>We hope you enjoy the range!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(0)}>Back to the start</button>
            {/* update to make go to home page for session booking? */}
          </div>
        </section>}
      </main>
    </>
  );
}

export default LocationPage;
