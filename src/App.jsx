import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router";
import "./App.scss";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import LocationPage from "./pages/Location";

// Can replace <a> with <Link> to go to url without reloading page. If used, href= must be replaced with to=
// This makes changes faster as well

function App() {

  const [pageInert, setPageInert] = useState(false);


  return (
    <>
      <Routes>
        {/* Should use navigations to switch between pages */}
        <Route index element={<HomePage pageInert={pageInert} setPageInert={setPageInert} />} />
        <Route path="/About" element={<AboutPage pageInert={pageInert} setPageInert={setPageInert} />} />
        <Route path="/Location" element={<LocationPage pageInert={pageInert} setPageInert={setPageInert} />} />
      </Routes>


      <footer inert={pageInert}>
        <nav className="navFooter">
          <div className="navFooter__header">
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
        <p>est 2008</p>
      </footer>
    </>
  );
}

export default App;
