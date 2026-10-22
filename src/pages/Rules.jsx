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
            <h2>The DO's and DONT's of our range</h2>
            <p>While you're at the range, we ask that you...</p>
          </div>
        </section>

        <section className="rules__center mainSection" inert={pageInert}>
          <div className="rules__center__bar"></div>
          <div className="rules__center__blocks clamped">
            {/* NB: Using fieldset to get text in border, liable to change */}
            <fieldset className="rules__center__block">
              {/* Either add SR-only h3 or nest h3 element */}
              <legend>
                <h3>DO</h3>
              </legend>
              <ul>
                <li>Sign the indemnity form</li>
                <li>Complete the range register</li>
                <li>Wear hearing and eye protection</li>
                <li>Listen to the range officials</li>
                <li>Only use shotguns when shooting on steel plates</li>
              </ul>
            </fieldset>
            <fieldset className="rules__center__block">
              <legend>
                <h3>DON'T</h3>
              </legend>
              <ul>
                <li>Climb on the sand walls</li>
                <li>Fire at anything other than the standard targets, including roaming animals</li>
                <li>Shoot under the influence of alcohol / narcotics</li>
                <li>Bring alcohol or narcotics onto the premises</li>
                <li>Litter</li>
                <li>Interupt other groups on the range</li>
              </ul>
            </fieldset>
          </div>
        </section>

        <section className="rules__bottom mainSection" inert={pageInert}>
          <div className="rules__bottom__container clamped">
            <h3>Stay safe!</h3>
            <ul>
              <li>Only handle a loaded gun while at the firing point</li>
              <li>Put down / holster the unloaded gun while not at the firing point</li>
              <li>Don't turn away from the firing point with a loaded gun</li>
              <li>Stay at least 10m behind any shooters while not actively shooting</li>
            </ul>
          </div>
          <img className="rules__img--target" src="src\assets\SVGs\Target-cropped.svg" alt="" />
        </section>
      </main>
    </>
  );
}

export default RulesPage;
