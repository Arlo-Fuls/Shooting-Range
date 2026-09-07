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
      <main>
        {/* Can replace index with --- path="/" ---. This will make it function as default page as well (base url or base url + /) */}
        {/* <Route path="/MultTable" element={<MultTable />} /> */}

        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
