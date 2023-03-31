import React, { useState, useEffect, useRef } from "react";
import SecondCarousel1 from "../../assets/SecondCarousel1.png";
import SecondCarousel2 from "../../assets/SecondCarousel2.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import CDFWVR from "../videos/CDFW-VR.mp4";
import { useSnapCarousel } from "react-snap-carousel";
import ReactPlayer from "react-player";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"

function SecondCarousel() {
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <div className="max-w-screen-2xl  w-full h-full m-auto  relative group justify-center items-center py-6">
      <div className="lg:w-[800px] lg:h-[400px]  w-full h-full     m-auto flex items-center ">
        <Carousel
          ref={ref}
          interval={23000}
          indicators={false}
          controls={false}
        >
          <Carousel.Item>
            <ReactPlayer
              url={CDFWVR}
              pip={true}
              controls={true}
              // playing={true}
              width="100%"
              height="100%"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={SecondCarousel1}
              alt="CDFW"
              className="block w-full h-full  "
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={SecondCarousel2}
              alt="CDFW"
              className="block w-full h-full  "
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="hidden lg:block absolute top-[85%] left-[85%] md:p-0 -translate-x-0 translate-y-[-50%] right-1 lg:p-0 mb-0 ">
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
       
    </div>
  );
}

export default SecondCarousel;
