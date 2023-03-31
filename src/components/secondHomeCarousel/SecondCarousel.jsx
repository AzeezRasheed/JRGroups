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

  const slides = [
    {
      id: 1,
      src: SecondCarousel1,
    },
    {
      id: 2,
      src: SecondCarousel2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoScroll, slideInterval, auto]);
  return (
    <div className="max-w-screen-2xl  w-full h-full m-auto  relative group justify-center items-center py-6">
      <div className="lg:w-[600px] lg:h-[380px] w-full h-full    m-auto flex items-center ">
        <Carousel
          ref={ref}
          // activeIndex={index}
          // onSelect={handleSelect}
          indicators={false}
          controls={false}
        >
          <Carousel.Item>
            <ReactPlayer
              url={CDFWVR}
              pip={true}
              controls={true}
              playing={true}
              width="100%"
              height="100%"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div className="items-center flex w-full  h-full justify-center">
              <img
                src={SecondCarousel1}
                alt="CDFW"
                className="block w-full h-full  "
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="items-center flex w-full h-full  justify-center">
              <img
                src={SecondCarousel2}
                alt="CDFW"
                className="block w-full h-full  "
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className=" absolute top-[70%] left-[85%] right-[20%] md:right-[0] md:top-[70%]  items-center m-auto justify-center flex p-4 md:p-0   lg:-translate-x-0 lg:translate-y-[-50%] lg:right-1 lg:p-0 lg:mb-0 ">
        <div className="flex flex-row gap-2">
          <button
            className="cursor-pointer"
            onClick={() => {
              setCurrentIndex(0);
              onPrevClick();
            }}
          >
            <BsArrowLeftCircle
              size={30}
              // className={`  ${
              //   currentIndex === 1 ? "text-black" : "text-white"
              // }`}
            />
          </button>

          <button
            className="cursor-pointer"
            onClick={() => {
              setCurrentIndex(1);
              onNextClick();
            }}
          >
            <BsArrowRightCircle
              size={30}
              // className={` ${
              //   currentIndex === 1 ? "text-black" : "text-white"
              // }`}
            />
          </button>
        </div>
              
      </div> */}
       
    </div>
  );
}

export default SecondCarousel;
