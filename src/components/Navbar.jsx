import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import "./Navbar.scss";

import useScrollListener from "../hooks/useScroll";

function Navbar({ setPageInert }) {

  //--------------------------------------
  //  SCROLL UP AND DOWN CODE
  //--------------------------------------
  // Scroll listener to track is scrolling up or down
  const scroll = useScrollListener();
  const [direction, setDirection] = useState('up');

  // update scroll direction based on scroll
  useEffect(() => {
    // Remove first part if don't want delay for first scroll
    if (!isNarrowScreen) {
      scroll.y > 150 && scroll.y - scroll.lastY > 0 ? setDirection('down') : setDirection('up');
    }

  }, [scroll.y, scroll.lastY]);


  //--------------------------------------
  //  HAMBURGER MENU CODE
  //--------------------------------------

  const [openButtonExpanded, setOpenButtonExpanded] = useState(false);            // mobile menu open, used for aria-expanded
  const [navMenuInert, setNavMenuInert] = useState(false);                        // mobile menu inert or not
  const [menuTransition, setMenuTransition] = useState(true);                     // used to set the transition based on screens

  const focusOpen = useRef();
  const focusClose = useRef();


  const openMenu = () => {
    // only used on mobile
    setOpenButtonExpanded(true);    // For aria-expanded
    setNavMenuInert(false);         // For entire mobile menu
    setMenuTransition(false);       // for the animation

    setTimeout(() => {
      focusClose.current.focus();
    }, 500);

    setPageInert(true);             // make main page inert, everything except the nav page

  }

  const closeMenu = (e) => {

    if (e.target.classList.contains("dismiss")) {
      setOpenButtonExpanded(false);
      setNavMenuInert(true);

      setTimeout(() => {
        setMenuTransition(true);
      }, 500);

      focusOpen.current.focus();

      setPageInert(false);
    }

  }

  // Handle escape to close the menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu(e);
      }
    };

    if (!navMenuInert) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navMenuInert, closeMenu]);


  //SCREEN SIZE WATCHER, UPDATES FOR HAMBURGER MENU
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(width<600px)")
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }
  });

  useEffect(() => {
    if (isNarrowScreen) {
      setNavMenuInert(true);
      setMenuTransition(true);
    }
    else {
      setNavMenuInert(false);
    }
  }
    , [isNarrowScreen])


  return (
    <header className={direction === 'up' ? "navMain" : "navMain navMain--hidden"}>

      {/* SHOWN ON SMALL SCREENS, HIDDEN BIG */}
      <button id="btnOpen" className="navMain__open-btn" aria-expanded={openButtonExpanded} aria-label="Open Navigation Menu" onClick={openMenu} ref={focusOpen}>
        <img src="src/assets/SVGs/Hamburger-menu.svg" alt="" />
      </button>

      {/* Container of what is shown for both versions, shown by default for big screens, hidden until shown for small screens */}

      <div className="navMain__container" role="dialog" aria-labelledby="nav-label" inert={navMenuInert} style={{ transition: menuTransition ? "none" : "" }}>

        <button id="btnClose" className="navMain__close-btn dismiss" aria-label="Close Navigation Menu" onClick={(e) => closeMenu(e)} ref={focusClose}>
          <img src="src/assets/SVGs/Close-4.svg" alt="" className='dismiss' />
        </button>

        <div className="navMain__header">
          <img className="logo" alt="Buisness Logo" src="src\assets\SVGs\Logo.svg" />
          <h1>Assegai Shooting Range</h1>
        </div>


        <nav className="navMain__menu">
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
      </div>

    </header>
  );
}

export default Navbar;
