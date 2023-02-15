import React, { useState, useEffect } from "react";
import SecondCarousel1 from "../../assets/SecondCarousel1.png";
import SecondCarousel2 from "../../assets/SecondCarousel2.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
function SecondCarousel() {
  const slides = [
    {
      url: SecondCarousel1,
    },
    {
      url: SecondCarousel2,
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
    <section>
      <div className="max-w-screen-2xl  w-full h-full m-auto mt-8 relative group bg-white">
        <div className="w-full h-full">
          {" "}
          <img src={slides[currentIndex].url} alt="" />
        </div>
        <div className=" absolute top-[70%] left-[80%] right-[20%] items-center m-auto justify-center flex p-4 lg:absolute lg:top-[85%] lg:-translate-x-0 lg:translate-y-[-50%] lg:right-32 lg:mb-0 ">
          <div className="flex flex-row gap-2">
            <button
              className="cursor-pointer"
              onClick={() => {
                setCurrentIndex(0);
              }}
            >
              <BsArrowLeftCircle
                size={30}
                className={`  ${
                  currentIndex === 0 ? "text-black" : "text-white"
                }`}
              />
            </button>

            <button
              className="cursor-pointer"
              onClick={() => {
                setCurrentIndex(1);
              }}
            >
              <BsArrowRightCircle
                size={30}
                className={` ${
                  currentIndex === 0 ? "text-black" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondCarousel;
