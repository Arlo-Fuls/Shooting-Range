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
        <section className="aboutRange mainSection">
          {/* Page specific navbar */}
          <div className="navMain__container--about">
            <Navbar setPageInert={setPageInert} />
          </div>

          {/* About range section */}
          <div className="aboutRange__container clamped">
            <div className="aboutRange__left">
              <h2>About the range</h2>
              <p>NRCS, family owned, est 2008 etc.</p>
            </div>
            <img className="aboutRange__right" alt="Pretty decorative" src="src\assets\SVGs\logo.svg" /> {/* Temp, change src and alt text */}
          </div>
        </section>

        {/* Meet the family */}
        <section className="meetFamily mainSection">
          <div className="meetFamily__container clamped">
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
