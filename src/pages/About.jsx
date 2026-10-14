import { useEffect } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./About.scss";

function AboutPage({ pageInert, setPageInert }) {

  useEffect(() => {
    setPageInert(false);
  }, [])

  return (
    <>
      <main className={pageInert ? "about-main inert" : "about-main"}>
        <section className="aboutRange mainSection" >
          <Navbar setPageInert={setPageInert} />

          <picture className="about__bg-image">
            {/*  Mobile Image  */}
            <source media="(max-width: 600px)" srcSet="src/assets/clutter/Landing-Page.jpg" />
            {/*  Desktop Image */}
            <source media="(min-width: 601px)" srcSet="src/assets/clutter/Landing-Page.jpg" />
            {/*  Fallback Image  */}
            <img aria-hidden="true" decoding="async" src="src/assets/clutter/Landing-Page.jpg" alt="Trees." />
          </picture>

          {/* About range section */}
          <div className="aboutRange__container clamped-wider" inert={pageInert}>
            <div className="aboutRange__left">
              <h2>About the range</h2>
              <p>NRCS, family owned, est 2008 etc.</p>
            </div>

            <picture className="about__secondary-image">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/clutter/tracker-1.jpg" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/clutter/tracker-1.jpg" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" src="src/assets/clutter/tracker-1.jpg" alt="Louw, the owner of the range driving a tracker. Two of the workers are sat in the bowl of the tracker behind him." />
            </picture>

          </div>
        </section>

        {/* Meet the family */}
        <section className="meetFamily mainSection" inert={pageInert}>
          <div className="meetFamily__container clamped-wider">
            <h2>Meet the family</h2>
            <p>From the left, we have blorb then blob...</p>
            <img className="meetFamily__img" alt="All of the people involved with the range" src="src\assets\SVGs\logo.svg" />
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
