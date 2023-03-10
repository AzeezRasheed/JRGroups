// transition-all ease-in-out duration-1000 transform translate-x-0
// absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide
// we would be changing the translate x


// {/* <div className={`absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide`}>
// go
// </div>
// <div className={`absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide`}>
// there

// </div> */}
import React, { useState, useEffect } from "react";
import Logo from "../../assets/Group 1000001826.png";

function Global() {

const slides = [{
  id: 1,
}]

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
  }, [currentIndex, autoScroll, slideInterval, auto])

  return (



      <section>
      <div className="max-w-screen-2xl  w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80")` }}
          className="w-full  bg-center object-cover bg-cover    "
        >
          {/* hero section */}

          <div className=" px-4 lg:py-36 md:py-36 py-8  ">
            <div className="mx-auto  text-center">
              <h1 className="mb-4 text-3xl  font-Montserrat font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                <span className=" bg-clip-text font-extrabold text-white ">
                  CDFW Inspired
                </span>{" "}
                collection
              </h1>

              <p className="mt-4 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint oc velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <a
                  className="block w-full rounded bg-[#C5C5C5] px-8 py-4 text-sm font-medium text-[#000000] shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                  href="/"
                >
                  Learn More
                </a>

                <div className=" items-center block ">
                  <div className="flex flex-row items-center  gap-2 ">
                    <img src={Logo} alt="Logo" />

                    <a
                      className="text-sm font-medium text-[#FFFFFF]  hover:text-slate-300 focus:outline-none sm:w-auto"
                      href="/"
                    >
                      Join Membership
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" items-center m-auto justify-center flex mt-[30px] lg:absolute lg:top-[70%] lg:-translate-x-0 lg:translate-y-[-50%] lg:right-32 lg:mb-0 ">
              <div className="flex flex-row gap-2">
                <div
                  className={`w-2 h-2 cursor-pointer hover:bg-white ${
                    currentIndex === 0 ? "bg-white" : "bg-[#3F3F3F]"
                  } rounded-full `}
                  onClick={() => {
                    setCurrentIndex(0);
                  }}
                ></div>
                <div
                  className={`w-2 h-2 cursor-pointer hover:bg-white ${
                    currentIndex === 1 ? "bg-white" : "bg-[#3F3F3F]"
                  } rounded-full `}
                  onClick={() => {
                    setCurrentIndex(1);
                  }}
                ></div>
                <div
                  className={`w-2 h-2 cursor-pointer hover:bg-white ${
                    currentIndex === 2 ? "bg-white" : "bg-[#3F3F3F]"
                  } rounded-full `}
                  onClick={() => {
                    setCurrentIndex(2);
                  }}
                ></div>
                <div
                  className={`w-2 h-2 cursor-pointer hover:bg-white ${
                    currentIndex === 3 ? "bg-white" : "bg-[#3F3F3F]"
                  } rounded-full `}
                  onClick={() => {
                    setCurrentIndex(3);
                  }}
                ></div>
                <div
                  className={`w-2 h-2 cursor-pointer hover:bg-white ${
                    currentIndex === 4 ? "bg-white" : "bg-[#3F3F3F]"
                  } rounded-full `}
                  onClick={() => {
                    setCurrentIndex(4);
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Left Arrow */}
        {/* <div className="hidden group-hover:block absolute top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div> */}
        {/* Right Arrow */}
        {/* <div className="hidden group-hover:block absolute top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div> */}
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </section>
 
  )
}

export default Global