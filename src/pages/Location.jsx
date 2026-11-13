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
        <section className="rangerGuide__mainHeader mainSection" aria-labelledby="range-guide-header" inert={pageInert}>
          <Navbar setPageInert={setPageInert} />

          {/* Colour polygon */}
          <div className="header__background"></div>

          {/* Bottom of header section */}
          <div className="header__bottom clamped">
            <div className="header__left">
              <h2 className="large-heading funky" id="range-guide-header">Range Guide</h2>
              <p>Take a look at the path to the range with all of the most important stops on the way!</p>
            </div>
            {/* <button className="location__nextButton">Next</button> */}
            <a href="https://maps.app.goo.gl/mheG3HnStRzCzQTG9" target="_blank">Find us on Google Maps &rarr;</a>
          </div>

          <div className="locationButtons__container">
            <button onClick={() => setSectionIndex(0)} className={sectionIndex == 0 ? "locationButtons__btn" : "locationButtons__btn locationButtons__btn--inactive"}>
              <p className="locationButtons__text">ARRIVAL</p>
              <picture className="locationButtons__btn--image">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/arrival-button.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/arrival-button.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/arrival-button.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/arrival-button.webp" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" src="src/assets/photos/fallback/arrival-button.png" alt="" />
              </picture>
            </button>
            <button onClick={() => setSectionIndex(2)} className={sectionIndex == 2 ? "locationButtons__btn" : "locationButtons__btn locationButtons__btn--inactive"}>
              <p className="locationButtons__text">OFFICE</p>
              <picture className="locationButtons__btn--image">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/office-button.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/office-button.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/office-button.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/office-button.webp" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" src="src/assets/photos/fallback/office-button.png" alt="" />
              </picture>
            </button>
            <button onClick={() => setSectionIndex(3)} className={sectionIndex == 3 ? "locationButtons__btn" : "locationButtons__btn locationButtons__btn--inactive"}>
              <p className="locationButtons__text">RANGE</p>
              <picture className="locationButtons__btn--image">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/range-button.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/range-button.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/range-button.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/range-button.webp" />
                {/*  Fallback Image  */}
                <img aria-hidden="true" decoding="async" src="src/assets/photos/fallback/range-button.png" alt="" />
              </picture>
            </button>
          </div>
        </section>

        {/* -------------------- */}
        {/* GETTING TO THE RANGE */}
        {/* -------------------- */}
        {/* Also verify that screen readers update correctly when changing section visibility */}

        {sectionIndex == 0 && <section className="rangeGuide rangeGuide--1 mainSection" aria-labelledby="arrival-section-heading" inert={pageInert}>
          <div className="rangeGuide__header-container clamped-wider">
            <h3 className="red-heading" id="arrival-section-heading">Arrival</h3>
            <p className="large-heading">Your guide to getting to the range</p>
          </div>

          <div className="rangeGuide--1__container clamped-wider">

            <div className="rangeGuide--1__item-container">
              <h4 className="rangeGuide--1__number"><span className="sr-only">Step </span>1</h4>
              <picture className="rangeGuide--1__img">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-1.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-1.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-1.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-1.webp" />
                {/*  Fallback Image  */}
                <img decoding="async" src="src/assets/photos/fallback/roadmap-1-path-1.png" alt="The road to the range with the R565 sign on the left side of the road." />
              </picture>

              <p className="rangeGuide--1__text">The Google Maps link sometimes shows a path to the range that is not accessible to the public. The correct road is using the Phokeng / Sun City slipway (road 169) from the N4.</p>
            </div>

            <div className="rangeGuide--1__item-container">
              <h4 className="rangeGuide--1__number"><span className="sr-only">Step </span>2</h4>
              <picture className="rangeGuide--1__img">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-2.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-2.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-2.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-2.webp" />
                {/*  Fallback Image  */}
                <img decoding="async" src="src/assets/photos/fallback/roadmap-1-path-2.png" alt="The crossing just before the turn off to the range. A turn sign to Life Peglerae is visible next to the road." />
              </picture>

              <p className="rangeGuide--1__text">Following the road should bring you to this intersection where you will turn left.</p>
            </div>

            <div className="rangeGuide--1__item-container">
              <h4 className="rangeGuide--1__number"><span className="sr-only">Step </span>3</h4>
              <picture className="rangeGuide--1__img">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-3.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-3.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-3.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-1-path-3.webp" />
                {/*  Fallback Image  */}
                <img decoding="async" src="src/assets/photos/fallback/roadmap-1-path-3.png" alt="The crossing just before the turn off to the range. A turn sign to Life Peglerae is visible next to the road." />
              </picture>

              <p className="rangeGuide--1__text">Shortly after the previous turn, you will see this dirt road on the right side of the road. Turn down it and follow the road the rest of the way to the shooting range.</p>
            </div>

          </div>

          <div className="rangeGuide--1__bottom">
            <div className="rangeGuide--1__bottom--container clamped-wider">
              <h4 className="large-heading">When you see this gate, you have reached the right place!</h4>
              <p>Head inside and follow the road until you reach the office for the next step.</p>

              <picture className="rangeGuide--1__img rangeGuide--1__img--large">
                {/*  <500   */}
                <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-1-enterance.webp" />
                {/*  > 500  */}
                <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-1-enterance.webp" />
                {/*  > 800  */}
                <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-1-enterance.webp" />
                {/* >1200 */}
                <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-1-enterance.webp" />
                {/*  Fallback Image  */}
                <img loading="lazy" decoding="async" src="src/assets/photos/fallback/roadmap-1-enterance.png" alt="The enterance of the shooting range premises, with a white car driving out of the gates." />
              </picture>
            </div>


          </div>

          <div className="rangeGuide__sectionEnd clamped-wider">
            <p className="large-heading funky">Welcome to Assegai Shooting Range!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(2)}>Next Section &rarr;</button>
          </div>
        </section>}

        {/* -------------------- */}
        {/* THE TUCKSHOP */}
        {/* -------------------- */}
        {/* SNOEPIE REMOVED FOR NOW */}
        {/* {sectionIndex == 1 && <section className="rangeGuide--2 mainSection" inert={pageInert}> */}
        {/* <h3>Tuckshop</h3> */}
        {/* <div className="rangeGuide--2__top clamped">
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
          <div className="rangeGuide--2__bottom clamped"> */}
        {/* Menu */}
        {/* Still viable?? */}
        {/* <img className="rangeGuide--2__img" alt="Placeholder" src="src\assets\SVGs\Logo-fav.svg" />
          </div>
          <div className="rangeGuide__sectionEnd clamped">
            <p>Order in person or call ahead!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(2)}>Next</button>
          </div>
        </section>} */}

        {/* -------------------- */}
        {/* THE OFFICE */}
        {/* -------------------- */}
        {sectionIndex == 2 && <section className="rangeGuide rangeGuide--3 mainSection" aria-labelledby="office-section-heading" inert={pageInert}>
          {/* HEADING */}
          <div className="rangeGuide__header-container clamped-wider">
            {/* <img src="src/assets/clutter/flourish-flipped.png" alt="" /> */}
            <h3 className="red-heading" id="office-section-heading">Office</h3>
            <p className="large-heading">Handling bussiness at the office</p>
            {/* <img src="src/assets/clutter/flourish.png" alt="" /> */}
          </div>

          {/* CONTENT */}
          <div className="rangeGuide--3__top clamped-wider">

            <picture className="rangeGuide--3__img">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/images/Office.jpg" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/images/Office.jpg" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" src="src/assets/images/Office.jpg" alt="" />
            </picture>

            <div className="rangeGuide--3__text">
              <div className="rangeGuide__line"></div>
              <p>When you enter the range, follow the path forward until you reach the office, shown in this image.</p>
              <p>Here, you will be greeted by one of our staff who will assist you with all neccessary paperwork that needs to be completed before heading down to the range.</p>
              <div className="rangeGuide__line"></div>
            </div>
          </div>

          {/* END */}
          <div className="rangeGuide__sectionEnd clamped">
            <p className="large-heading funky">Now you are ready to get shooting!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(3)}>Next &rarr;</button>
          </div>
        </section>}

        {/* -------------------- */}
        {/* THE RANGE */}
        {/* -------------------- */}
        {sectionIndex == 3 && <section className="rangeGuide rangeGuide--4 mainSection" aria-labelledby="range-section-heading" inert={pageInert}>
          {/* HEADING */}
          <div className="rangeGuide__header-container clamped-wider">
            {/* <img src="src/assets/clutter/flourish-flipped.png" alt="" /> */}
            <h3 className="red-heading" id="range-section-heading">Range</h3>
            <p className="large-heading">Now you are ready to get shooting!</p>
            {/* <img src="src/assets/clutter/flourish.png" alt="" /> */}
          </div>

          <div className="rangeGuide--4__top clamped-wider">
            <picture className="rangeGuide--4__img--head">
              {/*  Mobile Image  */}
              <source media="(max-width: 600px)" srcSet="src/assets/images/Shooting-range-entrance.jpg" />
              {/*  Desktop Image */}
              <source media="(min-width: 601px)" srcSet="src/assets/images/Shooting-range-entrance.jpg" />
              {/*  Fallback Image  */}
              <img aria-hidden="true" decoding="async" src="src/assets/images/Shooting-range-entrance.jpg" alt="" />
            </picture>

            <p>Now that you've reached the range, you are ready to get shooting. Head down to your designated range and have fun!</p>
          </div>

          <div className="page-divider"></div>

          <div className="rangeGuide--4__bottom clamped">
            {/* Baan 3 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-1.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-1.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-1.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-1.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-1.png" alt="A shorter range with two orange bins to use as tables. The images is framed by two trees." />
            </picture>

            {/* Baan 4 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-12.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-12.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-12.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-12.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-12.png" alt="A long and narrow range with a single table and 5 posts for targets visible in the distance." />
            </picture>

            {/* Baan 1 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-3.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-3.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-3.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-3.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-3.png" alt="The interior of the container on Range 1. There are tables and signs around the container, and a tree is visible at the center of the image." />
            </picture>

            {/* Baan 2 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-4.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-4.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-4.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-4.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-4.png" alt="A long open-aired range with 5 visible tables for shooters to stand." />
            </picture>

            {/* Baan 4 Trees */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-5.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-5.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-5.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-5.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-5.png" alt="A large tree casting shadow on Range 4 with tires stacked to form a wall next to it." />
            </picture>

            {/* River Range */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-6.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-6.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-6.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-6.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-6.png" alt="A dried up river bed with trees and foliage." />
            </picture>

            {/* Old Trailer by Office */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-7.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-7.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-7.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-7.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-7.png" alt="A rusted, old-timey trailer under a tree outside of the office." />
            </picture>

            {/* Baan 7 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-8.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-8.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-8.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-8.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-8.png" alt="A longer range with a single table. There is a large tree providing shelter next to the table." />
            </picture>

            {/* Trailer op baan */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-9.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-9.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-9.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-9.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-9.png" alt="A red trailer that is situated on the range, often used for seating or for shelter from the rain." />
            </picture>

            {/* Braai Area */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-10.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-10.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-10.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-10.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-10.png" alt="A braai area situated on Range 7. The seating is made from tires filled with cement and there are trees that provide shade. There is one braai station visible in the foreground." />
            </picture>

            {/* Baan 6 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-11.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-11.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-11.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-11.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-11.png" alt="A wide range with 10 posts for targets. The section has some shelter to protect from the sun, and there is an additional sheltered section with seating for bigger groups." />
            </picture>

            {/* Baan 5 */}
            <picture className="tile">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-2.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-2.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-2.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-image-2.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" loading="lazy" src="src/assets/photos/fallback/roadmap-4-image-2.png" alt="A wider range with 9 posts for targets visible behind 3 orange bins. The background of the image is covered by a mountain." />
            </picture>
          </div>


          <div className="rangeGuide__sectionEnd clamped">
            <p className="large-heading funky">We hope you enjoy the range!</p>
            <button className="location__nextButton" onClick={() => setSectionIndex(0)}>Back to the start &rarr;</button>
            {/* update to make go to home page for session booking? */}
          </div>
        </section>}
      </main>
    </>
  );
}

export default LocationPage;
