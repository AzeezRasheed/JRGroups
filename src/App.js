import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Layout } from "./components/layouts/Layout";
import Events from "./pages/events/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
