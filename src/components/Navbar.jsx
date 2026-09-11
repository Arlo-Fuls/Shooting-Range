import { Link } from "react-router";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navMain">
      <div className="navMain__header">
        <img className="logo" alt="Buisness Logo" src="src\assets\SVGs\Logo.svg" />
        <h1>Assegai Shooting Range</h1>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Location">Range Guide</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
