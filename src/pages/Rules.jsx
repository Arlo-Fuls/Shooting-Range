import Navbar from "../components/Navbar.jsx";
import "./Rules.scss";

function RulesPage({ pageInert, setPageInert }) {
  return (
    <>
      <header className="rules__mainHeader mainSection">
        {/* Colour polygon */}
        <div className="header__background"></div>
        {/* Page specific navbar */}
        <div className="navMain__container--rules">
          <Navbar setPageInert={setPageInert} />
        </div>

        {/* Bottom of header section */}
        <div className="header__bottom clamped">
          <h2>The DO's and DONT's of our range</h2>
          <p>While you're at the range, we ask that you...</p>
        </div>
      </header>

      <main className={pageInert ? "rules__main inert" : "rules__main"}>
        <section className="rules__center mainSection">
          <div className="rules__center__bar"></div>
          <div className="rules__center__blocks clamped">
            {/* NB: Using fieldset to get text in border, liable to change */}
            <fieldset className="rules__center__block">
              {/* Either add SR-only h3 or nest h3 element */}
              <legend>
                <h3>DO</h3>
              </legend>
              <ul>
                <li>Have fun</li>
                <li>Have fun</li>
                <li>Have fun</li>
              </ul>
            </fieldset>
            <fieldset className="rules__center__block">
              <legend>
                <h3>DON'T</h3>
              </legend>
              <ul>
                <li>Die</li>
                <li>Die</li>
                <li>Die</li>
              </ul>
            </fieldset>
          </div>
        </section>

        <section className="rules__bottom mainSection">
          <div className="rules__bottom__container clamped">
            <h3>Stay safe</h3>
            <ul>
              <li>Have fun</li>
              <li>Have fun</li>
              <li>Have fun</li>
            </ul>
          </div>
          <img className="rules__img--target" src="src\assets\SVGs\Target.svg" alt="" />
        </section>
      </main>
    </>
  );
}

export default RulesPage;
