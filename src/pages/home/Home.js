import React from "react";
import Cdfw from "../../components/cdfwhome/Cdfw";
import Expo from "../../components/ExpoHome/Expo";
import Footer from "../../components/footer/Footer";
import Global from "../../components/globalHome/Global";
import Hero from "../../components/heroSection/Hero";
import Navbar from "../../components/navbar/Navbar";
import Partnership from "../../components/partnership/Partnership";
import Subscribe from "../../components/subscribe-to-news-letter/Subscribe";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partnership />
      <Cdfw />
      <Expo />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
