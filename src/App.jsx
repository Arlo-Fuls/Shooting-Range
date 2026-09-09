import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import "./App.scss";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import LocationPage from "./pages/Location";

// Can replace <a> with <Link> to go to url without reloading page. If used, href= must be replaced with to=
// This makes changes faster as well

function App() {
  return (
    <>
      <Routes>
        {/* Should use navigations to switch between pages */}
        <Route index element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Location" element={<LocationPage />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
