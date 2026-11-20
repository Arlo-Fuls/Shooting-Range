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
        <section className="aboutRange mainSection" aria-labelledby="about-intro">
          <Navbar setPageInert={setPageInert} />

          {/* About range section */}
          <div className="aboutRange__container clamped-wider" inert={pageInert}>
            <div className="aboutRange__left">
              <h2 className="large-heading funky" id="about-intro">The story behind the shooting range</h2>
              <p>The Assegai Shooting Range started out as a hobby, a passion project for a family with a combined 68 years in the police force. It was slow but satisfying work, and soon we realised that there was a need for more open-air shooting ranges in the area to help accomadate a wider variety of training needs.</p>
              <p>We spent the years since we started in 2008 working hand-in-hand with the people who used our range to shape it into something great, and we hope to continue this tradition for many more years to come.</p>
            </div>

            <div className="aboutRange__right">
              <div className="aboutRange__img-container">
                <picture className="aboutRange__img">
                  {/*  <500   */}
                  <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/about-family.webp" />
                  {/*  > 500  */}
                  <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/about-family.webp" />
                  {/*  > 800  */}
                  <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/about-family.webp" />
                  {/* >1200 */}
                  <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/about-family.webp" />
                  {/*  Fallback Image  */}
                  <img decoding="async" src="src/assets/photos/fallback/about-family.png" alt="Three of the people working on the range, the owner and two of the workers." />
                </picture>
              </div>

            </div>
          </div>
        </section>

        <section className="meetFamily mainSection" aria-labelledby="about-family">
          <h2 className="large-heading" id="about-family">Meet the family!</h2>

          <div className="meetFamily__container">
            <div className="meetFamily__img-container">
              <picture className="meetFamily__img">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/about-clutter.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/about-clutter.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/about-clutter.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/about-clutter.webp" />
                {/*  Fallback Image  */}
                <img decoding="async" aria-hidden="true" src="src/assets/photos/fallback/about-clutter.png" alt="Trees in front of the office with a tracker tire on the ground in the center." />
              </picture>
            </div>

            <div className="meetFamily__text">
              <p>Many hands have helped shape the range over the years.</p>
              <p>Even though we can't include all of them, we would like to acknowledge those who are still working every day to improve the range.</p>
              <p>Pa Louwa is the mastermind and heart of the operation, and the person who guides the development of the range with love. Working alongside him are our treasured workers: Peter, Shorty, Alex, and Alfred, without who we wouldn't be able to do what we do.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;
