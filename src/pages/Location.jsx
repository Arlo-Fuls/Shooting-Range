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
        <section className={sectionIndex === 0 ? "rangeGuide--1 mainSection" : "rangeGuide--1 mainSection hiddenSection"} inert={pageInert}>
          <h3>Getting to the range</h3>
          <div className="rangeGuide--1__top clamped">
            <img className="rangeGuide--1__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            <p className="rangeGuide--1__text">Something amazing I guess</p>
          </div>
          <div className="rangeGuide--1__middle clamped">
            {/* Order of elements changed in stylesheet */}
            <img className="rangeGuide--1__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            <p className="rangeGuide--1__text">Something amazing I guess</p>
          </div>
          <div className="rangeGuide--1__bottom clamped">
            <p className="rangeGuide--1__text">Something amazing I guess</p>
          </div>
          <div className="rangeGuide__sectionEnd clamped">
            <p>Welcome to Assegai Shooting Range!</p>
            <button className="location__nextButton">Next</button> {/* Move to bottom outside of conditional? */}
          </div>
        </section>

        {/* Conditional Render 2 */}
        <section className={sectionIndex === 1 ? "rangeGuide--2 mainSection" : "rangeGuide--2 mainSection hiddenSection"} inert={pageInert}>
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
            <button className="location__nextButton">Next</button>
          </div>
        </section>

        {/* Conditional Render 3 */}
        <section className={sectionIndex === 2 ? "rangeGuide--3 mainSection" : "rangeGuide--3 mainSection hiddenSection"} inert={pageInert}>
          <h3>Office</h3>
          <div className="rangeGuide--3__top clamped">
            <img className="rangeGuide--3__img--left" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
            <img className="rangeGuide--3__img--right" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
          </div>
          <div className="rangeGuide__sectionEnd clamped">
            <p>Now you are ready to get shooting!</p>
            <button className="location__nextButton">Next</button>
          </div>
        </section>

        {/* Conditional Render 4 */}
        <section className={sectionIndex === 3 ? "rangeGuide--4 mainSection" : "rangeGuide--4 mainSection hiddenSection"} inert={pageInert}>
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
            <button className="location__nextButton">Next</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default LocationPage;
