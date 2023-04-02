import React, { useState, useEffect, useRef } from "react";
import SecondCarousel1 from "../../assets/SecondCarousel1.png";
import SecondCarousel2 from "../../assets/SecondCarousel2.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
// import CDFWVR from "../videos/CDFW-VR.mp4";
import CDFWGIF from "../videos/CDFW-GIF.gif";
import { useSnapCarousel } from "react-snap-carousel";
import ReactPlayer from "react-player";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SecondCarousel() {
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  //The settings for the carousel
  const settings = {
    dots: true,
    dotClass: "slick-dots slick-thumb ",
    // asNavFor: '.slider',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 19000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="max-w-screen-2xl  w-full h-full m-auto  relative group justify-center items-center py-6">
      <Slider {...settings}>
        <div className=" relative overflow-hidden bg-no-repeat  object-contain bg-cover  mx-auto  h-full w-full md:h-screen ">
          <img src={CDFWGIF} alt="cdfw gif" className="w-full h-full" />
        </div>
        <div className=" relative overflow-hidden bg-no-repeat  object-contain bg-cover  mx-auto  h-full w-full md:h-screen ">
          <img src={SecondCarousel1} alt="cdfw gif" className="w-full h-full" />
        </div>
        <div className=" relative overflow-hidden bg-no-repeat  object-contain bg-cover  mx-auto  h-full w-full md:h-screen ">
          <img src={SecondCarousel2} alt="cdfw gif" className="w-full h-full" />
        </div>
      </Slider>

      {/* <div className="hidden lg:block absolute top-[85%] left-[85%] md:p-0 -translate-x-0 translate-y-[-50%] right-1 lg:p-0 mb-0 ">
        <div className="flex flex-row gap-2">
          <button
            className="cursor-pointer"
            onClick={() => {
              onPrevClick();
            }}
          >
            <BsArrowLeftCircle size={30} />
          </button>

          <button
            className="cursor-pointer"
            onClick={() => {
              onNextClick();
            }}
          >
            <BsArrowRightCircle size={30} />
          </button>
        </div>
              
      </div>
        */}
    </div>
  );
}

export default SecondCarousel;
