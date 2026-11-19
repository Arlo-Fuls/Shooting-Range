import Navbar from "../components/Navbar.jsx";
import "./Rules.scss";

function RulesPage({ pageInert, setPageInert }) {
  return (
    <>
      <main className={pageInert ? "rules__main inert" : "rules__main"}>
        <section className="rules__mainHeader mainSection">
          {/* Colour polygon */}
          <div className="header__background"></div>

          {/* Page specific navbar */}
          <Navbar setPageInert={setPageInert} />

          {/* Bottom of header section */}
          <div className="header__content clamped">
            <h2 className="large-heading">The DO's and DONT's of our range</h2>
            <p>While you're at the range, we ask that you...</p>
          </div>
        </section>

        <section className="rules--do mainSection">
          <h3 className="large-heading rules__section-heading">Do</h3>

          <div className="rules__container">
            <picture className="rules__img">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" src="src/assets/photos/fallback/roadmap-4-header.png" alt="The enterance of the shooting range, marked by a gate with a sign and a red flag." />
            </picture>

            <div className="rules__text">
              <ul>
                <li>Sign the indemnity form</li>
                <li>Complete the range register</li>
                <li>Wear hearing and eye protection</li>
                <li>Listen to the range officials</li>
                <li>Only use shotguns when shooting on steel plates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rules--dont mainSection">
          <div className="rules__divider"></div>
          <h3 className="large-heading rules__section-heading">Don't</h3>

          <div className="rules__container">
            <picture className="rules__img">
              {/*  <500   */}
              <source media="(max-width: 31.25rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/*  > 500  */}
              <source media="(max-width: 50rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/*  > 800  */}
              <source media="(max-width: 75rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/* >1200 */}
              <source media="(min-width: 75.0625rem)" srcSet="src/assets/photos/large-screen/roadmap-4-header.webp" />
              {/*  Fallback Image  */}
              <img decoding="async" src="src/assets/photos/fallback/roadmap-4-header.png" alt="The enterance of the shooting range, marked by a gate with a sign and a red flag." />
            </picture>

            <div className="rules__text">
              <ul>
                <li>Climb on the sand walls</li>
                <li>Fire at anything other than the standard targets, including roaming animals</li>
                <li>Shoot under the influence of alcohol / narcotics</li>
                <li>Bring alcohol or narcotics onto the premises</li>
                <li>Litter</li>
                <li>Interupt other groups on the range</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rules--safe mainSection">
          <div className="rules--safe__container">
            <h3 className="large-heading funky">Stay safe!</h3>
            <img className="rules__img--target" src="src\assets\SVGs\Target-cropped.svg" alt="" />
          </div>

          <div className="rules__text">
            <ul>
              <li>Only handle a loaded gun while at the firing point</li>
              <li>Put down / holster the unloaded gun while not at the firing point</li>
              <li>Don't turn away from the firing point with a loaded gun</li>
              <li>Stay at least 10m behind any shooters while not actively shooting</li>
            </ul>
          </div>

        </section>

        {/* <section className="rules__bottom mainSection" inert={pageInert}>
          <div className="rules__bottom__container clamped">
            <h3 className="large-heading funky">Stay safe!</h3>
            <ul>
              <li>Only handle a loaded gun while at the firing point</li>
              <li>Put down / holster the unloaded gun while not at the firing point</li>
              <li>Don't turn away from the firing point with a loaded gun</li>
              <li>Stay at least 10m behind any shooters while not actively shooting</li>
            </ul>
          </div>
          <img className="rules__img--target" src="src\assets\SVGs\Target-cropped.svg" alt="" />
        </section> */}
      </main>
    </>
  );
}

export default RulesPage;
