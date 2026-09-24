import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Navbar.scss";

import useScrollListener from "../hooks/useScroll";

function Navbar() {

  // Scroll listener to track is scrolling up or down
  const scroll = useScrollListener();
  const [direction, setDirection] = useState('up');

  // update scroll direction based on scroll
  useEffect(() => {
    // Remove first part if don't want delay for first scroll
    scroll.y > 150 && scroll.y - scroll.lastY > 0 ? setDirection('down') : setDirection('up');
  }, [scroll.y, scroll.lastY]);


  return (
    <header className={direction === 'up' ? "navMain" : "navMain navMain--hidden"}>


      <nav >
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
    </header>
  );
}

export default Navbar;
