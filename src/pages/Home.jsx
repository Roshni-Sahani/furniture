import React from "react";
import Header from "../components/Header";
import Mynav from "../components/Mynav";
import Section2 from "../components/Section2";
import Ourproduct from "../components/Ourproduct";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import Section7 from "../components/Section7";
import CardSlider from "../components/Cardslider";
import Section3slider from "../components/Section3slider";
import Slider3 from "../components/Slider3";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <div>
      <div className="bg-[url(./assests/images/bgimg.webp)] bg-no-repeat bg-cover h-screen">
        <Mynav />
      </div>
      <Section2 />
      <Section3slider />
      <Ourproduct />
      <Section5 />
      <CardSlider />
      <Section7 />
      <Slider3 />
      <Footer />
    </div>
  );
};

export default Home;
