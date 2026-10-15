import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import "./Home.scss";

function HomePage({ pageInert, setPageInert }) {
  useEffect(() => {
    setPageInert(false);
  }, []);

  // UPDATE IMAGE ARRAYS FOR EDITED PHOTOS
  const [rangeImagesLarge, setRangeImagesLarge] = useState([
    {
      src: "src/assets/images/Range1.jpg",
      alt: "The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image.",
      head: "Range 1",
      text: "Range 1 is used privately by the APSC.",
    },
    {
      src: "src/assets/images/Range2.jpg",
      alt: "A long open-aired range with 5 visible tables for shooters to stand.",
      head: "Range 2",
      text: "Range 2 has x amount of tables that can be used at once and is x meters long",
    },
    {
      src: "src/assets/images/Range3.jpg",
      alt: "A shorter range with two orange bins to use as tables. The images is framed by two trees.",
      head: "Range 3",
      text: "Range 3 has x amount of tables that can be used at once and is x meters long",
    },
    {
      src: "src/assets/images/Range4.jpg",
      alt: "A long and narrow range with a single table and 5 posts for targets visible in the distance.",
      head: "Range 4",
      text: "Range 4 has x amount of tables that can be used at once and is x meters long",
    },
    {
      src: "src/assets/images/Range5.jpg",
      alt: "A wider range with 9 posts for targets visible behind 3 orange bins.",
      head: "Range 5",
      text: "Range 5 has x amount of tables that can be used at once and is x meters long",
    },
    {
      src: "src/assets/images/Range6.jpg",
      alt: "A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups.",
      head: "Range 6",
      text: "Range 6 has x amount of tables that can be used at once and is x meters long",
    },
    {
      src: "src/assets/images/Range7.jpg",
      alt: "A longer range with a single table. There is a large tree providing shelter next to the table.",
      head: "Range 7",
      text: "Range 7 has x amount of tables that can be used at once and is x meters long",
    },
  ]);
  const [rangeImagesSmall, setRangeImagesSmall] = useState([
    {
      src: "src/assets/images/Range1.jpg",
      alt: "The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image.",
    },
    {
      src: "src/assets/images/Range2.jpg",
      alt: "A long open-aired range with 5 visible tables for shooters to stand.",
    },
    {
      src: "src/assets/images/Range3.jpg",
      alt: "A shorter range with two orange bins to use as tables. The images is framed by two trees.",
    },
    {
      src: "src/assets/images/Range4.jpg",
      alt: "A long and narrow range with a single table and 5 posts for targets visible in the distance.",
    },
    {
      src: "src/assets/images/Range5.jpg",
      alt: "A wider range with 9 posts for targets visible behind 3 orange bins.",
    },
    {
      src: "src/assets/images/Range6.jpg",
      alt: "A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups.",
    },
    {
      src: "src/assets/images/Range7.jpg",
      alt: "A longer range with a single table. There is a large tree providing shelter next to the table.",
    },
  ]);
  const [rangeImagesFallback, setRangeImagesFallback] = useState([
    {
      src: "src/assets/images/Range1.jpg",
      alt: "The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image.",
    },
    {
      src: "src/assets/images/Range2.jpg",
      alt: "A long open-aired range with 5 visible tables for shooters to stand.",
    },
    {
      src: "src/assets/images/Range3.jpg",
      alt: "A shorter range with two orange bins to use as tables. The images is framed by two trees.",
    },
    {
      src: "src/assets/images/Range4.jpg",
      alt: "A long and narrow range with a single table and 5 posts for targets visible in the distance.",
    },
    {
      src: "src/assets/images/Range5.jpg",
      alt: "A wider range with 9 posts for targets visible behind 3 orange bins.",
    },
    {
      src: "src/assets/images/Range6.jpg",
      alt: "A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups.",
    },
    {
      src: "src/assets/images/Range7.jpg",
      alt: "A longer range with a single table. There is a large tree providing shelter next to the table.",
    },
  ]);

  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextImage = () => {
    if (galleryIndex < 6) {
      const temp = galleryIndex + 1;
      setGalleryIndex(temp);
    } else {
      const temp = 0;
      setGalleryIndex(temp);
    }
  };

  const prevImage = () => {
    if (galleryIndex > 0) {
      const temp = galleryIndex - 1;
      setGalleryIndex(temp);
    } else {
      const temp = 6;
      setGalleryIndex(temp);
    }
  };

  // SCROLL TO SECTION
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  // FAQ ACCORDION TOGGLE

  // one open initially, rest closed
  const [accordionStates, setAccordionStates] = useState([true, false, false, false, false, false, false, false, false]);

  const toggleAccordion = (id) => {
    if (accordionStates[id]) {
      const tempArray = [false, false, false, false, false, false, false, false, false];

      setAccordionStates(tempArray);
    } else {
      const tempArray = [false, false, false, false, false, false, false, false, false];
      tempArray[id] = true;

      setAccordionStates(tempArray);
    }
  };

  return (
    <>
      {/* <header className="hero" inert={pageInert}> */}

      {/* Replace h1 with svg */}
      {/* <div className="hero__group">
          <img className="hero__title" alt="Assegai Shooting Range" src="src\assets\SVGs\Assegai Shooting Range.svg" />
          <button className="hero__button" onClick={executeScroll}>
            Book a Session <img className="arrow" alt="" src="src\assets\SVGs\Arrow.svg" />
          </button>
        </div> */}

      {/* Background image -- UPDATE WHEN HAVE EDITED PHOTOS */}
      {/* <picture className="hero__bg-image"> */}
      {/*  Mobile Image  */}
      {/* <source media="(max-width: 600px)" srcSet="src/assets/clutter/Landing-Page.jpg" /> */}
      {/*  Desktop Image */}
      {/* <source media="(min-width: 601px)" srcSet="src/assets/clutter/Landing-Page.jpg" /> */}
      {/*  Fallback Image  */}
      {/* <img aria-hidden="true" decoding="async" src="src/assets/clutter/Landing-Page.jpg" alt="kitchen cabinets" width="1920" height="1280" /> */}
      {/* </picture> */}

      {/* Logo placed here as it will be animated outside of the flow */}
      {/* <img className="hero__logo" alt="Buisness Logo" src="src\assets\SVGs\Logo.svg" /> */}
      {/* </header> */}

      <main className={pageInert ? "home-main inert" : "home-main"}>
        {/* <div className="main__navbarContainer"> */}
        {/* Nav bar header */}
        <Navbar setPageInert={setPageInert} />
        {/* </div> */}
        {/* Pricing and time */}
        <section className="pricing mainSection" inert={pageInert}>
          <div className="pricing__top clamped">
            <div className="pricing__text">
              <h2>Welcome to the Assegai Shooting Range</h2>
              <p>This family-run shooting range has been operating since 2008. We have 7 open-air ranges available for both training purposes and personal shooting, ranging between 25m and 100m. </p>
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

          <div className="pricing__bottom">
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
              <img aria-hidden="true" decoding="async" src={rangeImagesFallback[galleryIndex].src} alt={rangeImagesLarge[galleryIndex].alt} />
              {/* removed lazy loading since made weird issue when changed? */}
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
        <section className="contact mainSection" inert={pageInert} ref={myRef}>
          <div className="contact__top clamped-wider">
            <div className="contact__intro">
              <h2>CONTACT US</h2>
              <p>Ready to get started? Book a session today!</p>
            </div>
            <div className="contact__rules">
              <p>New to the range?</p>
              <p>
                Check out our <Link to="/Rules">rules</Link>
              </p>{" "}
              {/* Add modal on rules */}
            </div>
          </div>
          <div className="contact__bottom clamped-wider">
            <div className="contact__card">
              <div className="contact__image-container">
                <img src="src/assets/SVGs/Phone.svg" alt="" />
              </div>

              <p>(+27)69 581 0030</p>
            </div>
            <div className="contact__card">
              <div className="contact__image-container">
                <img src="src/assets/SVGs/Mail.svg" alt="" />
              </div>
              <p>
                <a href="mailto:assegaishootingrange@gmail.com">assegaishootingrange@gmail.com</a>
              </p>
            </div>
            <div className="contact__card">
              <div className="contact__image-container">
                <img src="src/assets/SVGs/Pindrop.svg" alt="" />
              </div>
              <p>
                <a href="https://maps.app.goo.gl/mheG3HnStRzCzQTG9" target="_blank">
                  Plot 94 Rietvlei Rd, Rustenburg, 0300
                </a>
              </p>
            </div>
          </div>
          <div className="contact__background"></div>
        </section>

        {/* Trainers */}
        <section className="trainers mainSection" inert={pageInert}>
          <img className="trainers__image--branch" src="src\assets\SVGs\Branch-1.svg" alt="" />
          <div className="trainers__container clamped">
            <div className="trainers__header ">
              <div className="trainers__title">
                <h2>TRAINERS</h2>
                <p>Our Partnered Trainers</p>
              </div>

              <p>We are honoured to have offered ourselves as a training facility for a wide variety of profesional training groups over the years. These trainers have had a strong hand in shaping the Assegai Shooting Range into what it is today. </p>

              <picture className="trainers__image">
                {/*  Mobile Image  */}
                <source media="(max-width: 600px)" srcSet="src/assets/clutter/Billy-trees.jpg" />
                {/*  Desktop Image */}
                <source media="(min-width: 601px)" srcSet="src/assets/clutter/Billy-trees.jpg" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" loading="lazy" src="src/assets/clutter/Billy-trees.jpg" alt="Trees and cement-filled tires present on range 1." />
              </picture>
            </div>

            <div className="trainers__body ">
              <p className="sr-only">Our featured trainers include: KMP Security and Training, Platinum Shooters, Golden Cat Safety and Security Academy, Kukama Security Services, G4S, Bambanani Security & Projects, G627 Tactical Group, Outdoor Adventure Center, and Bullzeye Training Academy.</p>

              <div className="trainers__logoContainer">
                <div className="trainers__logo">
                  <img src="src/assets/logos/KMP.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/platinum-shooters-cleaned.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/golden-cat-cleaned.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/kukama-cleaned.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/G4S-Logo.wine.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/bambani-cleaned.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/g627-tactical-group-logo-1-200x69.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/billy2.png" alt="" />
                </div>
                <div className="trainers__logo">
                  <img src="src/assets/logos/northam-traced.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq mainSection" inert={pageInert}>
          <div className="faq__container clamped">
            <div className="faq__right">
              <div className="faq__head">
                <h2>FAQ</h2>
                <p>Frequently Asked Questions</p>
              </div>

              {/* 5 of the 9 questions */}
              <div className="faq__content">
                {/* Turn off at the right road */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-1"
                      aria-expanded={accordionStates[0]}
                      aria-controls="accordion-panel-1"
                      onClick={() => {
                        toggleAccordion(0);
                      }}
                    >
                      <span className="button__text">I'm getting lost on my way to the range, where should I turn off?</span>
                      <img src={accordionStates[0] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-1" aria-labelledby="accordion-header-1" aria-hidden={!accordionStates[0]} hidden={!accordionStates[0]}>
                    Google Maps shows an enterance that is not available to the public. You should take the Phokeng / Sun City slipway (road 169) from the N4. You can take a look at our <Link to="/Location">Range Guide</Link> to see images of what you can expect the correct turn off to look like.
                  </div>
                </div>

                {/* Stop at the offices */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-2"
                      aria-expanded={accordionStates[1]}
                      aria-controls="accordion-panel-2"
                      onClick={() => {
                        toggleAccordion(1);
                      }}
                    >
                      <span className="button__text">Can I just head down to the range when I arrive?</span>
                      <img src={accordionStates[1] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-2" aria-labelledby="accordion-header-2" aria-hidden={!accordionStates[1]} hidden={!accordionStates[1]}>
                    All visitors to the range need to stop at the office before heading down to the range to sign their indemnity forms and the range registers. The office will be identifiable as the white trailer in front of one of the residential properties after entering the plot. An image of the office can be seen in our <Link to="/Location">Range Guide</Link>.
                  </div>
                </div>

                {/* Payment options */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-3"
                      aria-expanded={accordionStates[2]}
                      aria-controls="accordion-panel-3"
                      onClick={() => {
                        toggleAccordion(2);
                      }}
                    >
                      <span className="button__text">How and when do I pay?</span>
                      <img src={accordionStates[2] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-3" aria-labelledby="accordion-header-3" aria-hidden={!accordionStates[2]} hidden={!accordionStates[2]}>
                    Payment can be made after the shooting session is complete. EFT is preferable, however accomidations can be made for cash payment if necessary. EFT details will be provided during booking (???).
                  </div>
                </div>

                {/* MOUs for training groups */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-4"
                      aria-expanded={accordionStates[3]}
                      aria-controls="accordion-panel-4"
                      onClick={() => {
                        toggleAccordion(3);
                      }}
                    >
                      <span className="button__text">I want to bring a training group to the range, can you provide an MOU?</span>
                      <img src={accordionStates[3] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-4" aria-labelledby="accordion-header-4" aria-hidden={!accordionStates[3]} hidden={!accordionStates[3]}>
                    Requests for MOU's can be sent to the same contact details used for booking, and will be provided as soon as possible at no cost.
                  </div>
                </div>

                {/* Accreditation */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-5"
                      aria-expanded={accordionStates[4]}
                      aria-controls="accordion-panel-5"
                      onClick={() => {
                        toggleAccordion(4);
                      }}
                    >
                      <span className="button__text">Is the range accredited?</span>
                      <img src={accordionStates[4] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-5" aria-labelledby="accordion-header-5" aria-hidden={!accordionStates[4]} hidden={!accordionStates[4]}>
                    The Assegai Shooting Range is SAPS and NRCS accredited.
                  </div>
                </div>
              </div>
            </div>

            {/* Assegai image */}
            <img className="faq__assegai" src="src\assets\SVGs\Assegai.svg" alt="" />

            <div className="faq__left">
              {/* 4 of the 9 questions */}
              <div className="faq__content">
                {/* Weapon and ammunition */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-6"
                      aria-expanded={accordionStates[5]}
                      aria-controls="accordion-panel-6"
                      onClick={() => {
                        toggleAccordion(5);
                      }}
                    >
                      <span className="button__text">I don't have my own weapons and / or ammunition. Can you provide them?</span>
                      <img src={accordionStates[5] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-6" aria-labelledby="accordion-header-6" aria-hidden={!accordionStates[5]} hidden={!accordionStates[5]}>
                    We do not have any weapons or ammunition for sale or hire on site. If you are in need of either, we ask that you contact a supplier or join a training group that can provide the necessary equipment.
                  </div>
                </div>

                {/* Children */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-7"
                      aria-expanded={accordionStates[6]}
                      aria-controls="accordion-panel-7"
                      onClick={() => {
                        toggleAccordion(6);
                      }}
                    >
                      <span className="button__text">Are children allowed on the range?</span>
                      <img src={accordionStates[6] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-7" aria-labelledby="accordion-header-7" aria-hidden={!accordionStates[6]} hidden={!accordionStates[6]}>
                    Yes, children are welcome at the range, and children under 18 do not need to pay. We ask you to take responsibility for the behaviour and safety of any minors in your care, please ensure that they wear the necessary protective gear and that they do not damage the range.
                  </div>
                </div>

                {/* Range Details */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-8"
                      aria-expanded={accordionStates[7]}
                      aria-controls="accordion-panel-8"
                      onClick={() => {
                        toggleAccordion(7);
                      }}
                    >
                      <span className="button__text">What types of ranges do you offer? Are there any weapons that are not allowed to be used on the range?</span>
                      <img src={accordionStates[7] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-8" aria-labelledby="accordion-header-8" aria-hidden={!accordionStates[7]} hidden={!accordionStates[7]}>
                    The ranges we offer ....
                  </div>
                </div>

                {/* Amenities */}
                <div className="faq__question-container">
                  <h3>
                    <button
                      className="accordion__header"
                      id="accordion-header-9"
                      aria-expanded={accordionStates[8]}
                      aria-controls="accordion-panel-9"
                      onClick={() => {
                        toggleAccordion(8);
                      }}
                    >
                      <span className="button__text">What amenities are available on the range?</span>
                      <img src={accordionStates[8] ? "src/assets/SVGs/Minus.svg" : "src/assets/SVGs/Plus.svg"} alt="" />
                    </button>
                  </h3>
                  <div className="accordion__panel" id="accordion-panel-9" aria-labelledby="accordion-header-9" aria-hidden={!accordionStates[8]} hidden={!accordionStates[8]}>
                    Bathrooms are available on the range, and cold drinks can be purchased at the office if desired.
                  </div>
                </div>
              </div>

              <picture className="faq__image">
                {/*  Mobile Image  */}
                <source media="(max-width: 600px)" srcSet="src/assets/clutter/Baan7-Braai-area.jpg" />
                {/*  Desktop Image */}
                <source media="(min-width: 601px)" srcSet="src/assets/clutter/Baan7-Braai-area.jpg" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" loading="lazy" src="src/assets/clutter/Baan7-Braai-area.jpg" alt="A Braai Area with cement-filled trees as chairs on Range 7." />
              </picture>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
