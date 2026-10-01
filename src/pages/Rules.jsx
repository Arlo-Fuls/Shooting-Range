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
    </>
  );
}

export default RulesPage;
