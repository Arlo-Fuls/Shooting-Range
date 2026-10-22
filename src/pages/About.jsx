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
              <h2>The story behind the shooting range</h2>
              <p>The Assegai Shooting Range started out as a hobby, a passion project for a family with a combined 68 years in the police force. It was slow but satisfying work, and soon we realised that there was a need for more open-air shooting ranges in the area to help accomadate a wider variety of training needs.</p>
              <p>We spent the years since we started in 2008 working hand-in-hand with the people who used our range to shape it into something great, and we hope to continue this tradition for many more years to come.</p>

              <div className="about__slant-bg"></div>
            </div>
          </div>
        </section>

        {/* Meet the family */}
        <section className="meetFamily mainSection" inert={pageInert}>
          <div className="meetFamily__container">
            {/* removed clamped-wider */}

            <div className="about__image-container">
              <picture className="about__family-image">
                {/*  Mobile Image  */}
                <source media="(max-width: 600px)" srcSet="src/assets/images/family-photo.jpg" />
                {/*  Desktop Image */}
                <source media="(min-width: 601px)" srcSet="src/assets/images/family-photo.jpg" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" src="src/assets/images/family-photo.jpg" alt="Trees." />
              </picture>

              {/* <div className="meetFamily__slant"></div> */}
            </div>
            <div className="meetFamily__slant"></div>

            <div className="meetFamily__text-container">
              <h2>Meet the Family</h2>
              <p>Many hands have helped shape the range over the years. Even though we can't include all of them, we would like to show those who are still working every day to improve the range.</p>
              <p>The picture shows the family as it stands. On the left is Pa Louwa, the mastermind and heart of the operation. Alongside him, from left to right, are our lovely workers: Peter and Shorty. Not pictured here are our other workers, Alex and Alfred.</p>

              <picture className="about__secondary-image">
                {/*  Mobile Image  */}
                <source media="(max-width: 600px)" srcSet="src/assets/clutter/tracker-1.jpg" />
                {/*  Desktop Image */}
                <source media="(min-width: 601px)" srcSet="src/assets/clutter/tracker-1.jpg" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" src="src/assets/clutter/tracker-1.jpg" alt="Louw, the owner of the range driving a tracker. Two of the workers are sat in the bowl of the tracker behind him." />
              </picture>
            </div>

          </div>
          {/* <div className="meetFamily__slant"></div> */}
        </section>
      </main>
    </>
  );
}

export default AboutPage;
