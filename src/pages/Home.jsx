import { useState, useEffect } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./Home.scss";

function HomePage({ pageInert, setPageInert }) {

  useEffect(() => {
    setPageInert(false);
  }, [])

  // UPDATE IMAGE ARRAYS FOR EDITED PHOTOS
  const [rangeImagesLarge, setRangeImagesLarge] = useState([
    {
      src: "src/assets/images/Range1.jpg",
      alt: "The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image.",
      head: "Range 1",
      text: "Range 1 is used privately by the APSC."
    },
    {
      src: "src/assets/images/Range2.jpg",
      alt: "A long open-aired range with 5 visible tables for shooters to stand.",
      head: "Range 2",
      text: "Range 2 has x amount of tables that can be used at once and is x meters long"
    },
    {
      src: "src/assets/images/Range3.jpg",
      alt: "A shorter range with two orange bins to use as tables. The images is framed by two trees.",
      head: "Range 3",
      text: "Range 3 has x amount of tables that can be used at once and is x meters long"
    },
    {
      src: "src/assets/images/Range4.jpg",
      alt: "A long and narrow range with a single table and 5 posts for targets visible in the distance.",
      head: "Range 4",
      text: "Range 4 has x amount of tables that can be used at once and is x meters long"
    },
    {
      src: "src/assets/images/Range5.jpg",
      alt: "A wider range with 9 posts for targets visible behind 3 orange bins.",
      head: "Range 5",
      text: "Range 5 has x amount of tables that can be used at once and is x meters long"
    },
    {
      src: "src/assets/images/Range6.jpg",
      alt: "A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups.",
      head: "Range 6",
      text: "Range 6 has x amount of tables that can be used at once and is x meters long"
    },
    {
      src: "src/assets/images/Range7.jpg",
      alt: "A longer range with a single table. There is a large tree providing shelter next to the table.",
      head: "Range 7",
      text: "Range 7 has x amount of tables that can be used at once and is x meters long"
    }
  ]);
  const [rangeImagesSmall, setRangeImagesSmall] = useState([
    {
      src: "src/assets/images/Range1.jpg",
      alt: "The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image."
    },
    {
      src: "src/assets/images/Range2.jpg",
      alt: "A long open-aired range with 5 visible tables for shooters to stand."
    },
    {
      src: "src/assets/images/Range3.jpg",
      alt: "A shorter range with two orange bins to use as tables. The images is framed by two trees."
    },
    {
      src: "src/assets/images/Range4.jpg",
      alt: "A long and narrow range with a single table and 5 posts for targets visible in the distance."
    },
    {
      src: "src/assets/images/Range5.jpg",
      alt: "A wider range with 9 posts for targets visible behind 3 orange bins."
    },
    {
      src: "src/assets/images/Range6.jpg",
      alt: "A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups."
    },
    {
      src: "src/assets/images/Range7.jpg",
      alt: "A longer range with a single table. There is a large tree providing shelter next to the table."
    }
  ]);
  const [rangeImagesFallback, setRangeImagesFallback] = useState([
    {
      src: "src/assets/images/Range1.jpg",
      alt: "The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image."
    },
    {
      src: "src/assets/images/Range2.jpg",
      alt: "A long open-aired range with 5 visible tables for shooters to stand."
    },
    {
      src: "src/assets/images/Range3.jpg",
      alt: "A shorter range with two orange bins to use as tables. The images is framed by two trees."
    },
    {
      src: "src/assets/images/Range4.jpg",
      alt: "A long and narrow range with a single table and 5 posts for targets visible in the distance."
    },
    {
      src: "src/assets/images/Range5.jpg",
      alt: "A wider range with 9 posts for targets visible behind 3 orange bins."
    },
    {
      src: "src/assets/images/Range6.jpg",
      alt: "A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups."
    },
    {
      src: "src/assets/images/Range7.jpg",
      alt: "A longer range with a single table. There is a large tree providing shelter next to the table."
    }
  ]);

  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextImage = () => {
    if (galleryIndex < 6) {
      const temp = galleryIndex + 1;
      setGalleryIndex(temp);
    }
    else {
      const temp = 0;
      setGalleryIndex(temp);
    }
  }

  const prevImage = () => {
    if (galleryIndex > 0) {
      const temp = galleryIndex - 1;
      setGalleryIndex(temp);
    }
    else {
      const temp = 6;
      setGalleryIndex(temp);
    }
  }


  return (
    <>
      <header className="hero" inert={pageInert}>
        {/* Landing page */}

        {/* <nav className="hero__nav">
            <ul>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Location">Range Guide</Link>
              </li>
            </ul>
          </nav> */}

        {/* Replace h1 with svg */}
        <div className="hero__group">
          <img className="hero__title" alt="Assegai Shooting Range" src="src\assets\SVGs\Assegai Shooting Range.svg" />
          <button className="hero__button">
            Book a Session <img className="arrow" alt="" src="src\assets\SVGs\Arrow.svg" />
          </button>
        </div>

        {/* Background image -- UPDATE WHEN HAVE EDITED PHOTOS */}
        <picture className="hero__bg-image">
          {/*  Mobile Image  */}
          <source media="(max-width: 600px)" srcSet="src/assets/clutter/Landing-Page.jpg" />
          {/*  Desktop Image */}
          <source media="(min-width: 601px)" srcSet="src/assets/clutter/Landing-Page.jpg" />
          {/*  Fallback Image  */}
          <img aria-hidden="true" decoding="async" src="src/assets/clutter/Landing-Page.jpg" alt="kitchen cabinets" width="1920" height="1280" />
        </picture>

        {/* Logo placed here as it will be animated outside of the flow */}
        {/* <img className="hero__logo" alt="Buisness Logo" src="src\assets\SVGs\Logo.svg" /> */}

      </header>

      <main className={pageInert ? "home-main inert" : "home-main"}>
        {/* Nav bar header */}
        <Navbar setPageInert={setPageInert} />


        {/* Pricing and time */}
        <section className="pricing mainSection" inert={pageInert}>
          <div className="pricing__top clamped">
            <div className="pricing__text">
              <h2>Welcome to the Assegai Shooting Range</h2>
              <p>This family-run shooting range has been operating since 2008. We have 7 open-air ranges available for both training purposes and personal shooting, ranging between 25m and 100m.  </p>
            </div>

            {/* Clutter image -- UPDATE WHEN HAVE EDITED PHOTOS */}
            <picture className="pricing__image">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/clutter/Bullets.jpg" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/clutter/Bullets.jpg" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" loading="lazy" src="src/assets/clutter/Bullets.jpg" alt="Bullets aligned on an outdoor shooting table." />
            </picture>
          </div>

          <div className="pricing__bottom clamped" >
            {/* TIME */}
            <div className="card">
              <div className="card__top">
                <h3>Open Most Days</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Calender.svg" />
              </div>
              <div className="card__bottom">
                <p>Open Monday to Saturday from 8am to 4pm.</p>
                <p>Closed on Christian Holidays.</p>
              </div>

            </div>

            {/* PRICE */}
            <div className="card">
              <div className="card__top">
                <h3>Only R150 per person</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Money.svg" />
              </div>
              <div className="card__bottom">
                <p>Shoot for an entire day for only R150 per person.</p>
                <p>Children under 18 shoot for free.</p>
              </div>
            </div>

            {/* CARTONS */}
            <div className="card">
              <div className="card__top">
                <h3>Targets available on site</h3>
                <img className="icon--larger" alt="" src="src\assets\SVGs\Target.svg" />
              </div>
              <div className="card__bottom">
                <p>Targets and cartons can be purchased for R15 and R11 respectively. </p>
              </div>
            </div>

            {/* WEAPONS */}
            <div className="card">
              <div className="card__top">
                <h3>Bring your own weapons</h3>
                <img className="icon" alt="" src="src\assets\SVGs\Gun.svg" />
              </div>
              <div className="card__bottom">
                <p>Weapons and ammunition are not for sale on the premises.</p>
                <p>Please bring your own gear or sign up to a training group.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="gallery mainSection" inert={pageInert}>
          <div className="gallery__top clamped">
            <h2>GALLERY</h2>
            <p>Take a look at the ranges</p>
          </div>
          <div className="gallery__middle clamped">

            <picture className="image-container">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet={rangeImagesLarge[galleryIndex].src} />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet={rangeImagesSmall[galleryIndex].src} />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" loading="lazy" src={rangeImagesFallback[galleryIndex].src} alt={rangeImagesLarge[galleryIndex].alt} />
            </picture>

            <div className="image-details">
              <h3 className="image-title">{rangeImagesLarge[galleryIndex].head}</h3>
              <p className="image-description">{rangeImagesLarge[galleryIndex].text}</p>
              <div className="gallery__buttons">
                <button className="gallery__button gallery__button--ghost" onClick={prevImage}>
                  Previous
                </button>
                <button className="gallery__button" onClick={nextImage}>
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="gallery__bottom clamped">
            <p className="gallery__bottom-text gallery__bottom-text--decorative">Want to see more of the range?</p>
            <p className="gallery__bottom-text">
              Take a look at our <Link to="/Location">Range Guide</Link>!
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="contact mainSection" inert={pageInert}>
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

        {/* Trainers */}
        <section className="trainers mainSection" inert={pageInert}>
          <div className="trainers__header clamped">
            <h2>Trainers</h2>
            <p>Take a look at some of the training groups we work with</p>
          </div>
          <div className="trainers__body clamped">
            <div className="trainers__description">
              <p>Something amazing I guess</p>
            </div>
            <div className="trainers__logoContainer">
              <div className="bgDIV"></div>
              <div className="bgDIV"></div>
              <div className="trainers__logos">
                <div className="trainers__logo"></div>
                <div className="trainers__logo"></div>
                <div className="trainers__logo"></div>
                <div className="trainers__logo"></div>
                <div className="trainers__logo"></div>
                <div className="trainers__logo"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq mainSection" inert={pageInert}>
          <div className="faq__container clamped">
            <div className="faq__left">
              <h2>Frequently Asked Questions</h2>
              <div className="faq__content"></div>
            </div>

            {/* Assegai image */}
            <img className="faq__assegai" src="src\assets\SVGs\Assegai.svg" alt="" />

            <div className="faq__right">
              <div className="faq__content"></div>
              <div className="faq__img"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
