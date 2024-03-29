import React from "react";

//For Carousel, The library is react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//The images are imported from assets folder
import FirstImage from "../../assets/FirstHeroCarousel.png";
import SecondImage from "../../assets/SecondHeroCarousel.png";
import ThirdImage from "../../assets/ThirdHeroCarousel.png";
import FourthImage from "../../assets/FourthHeroCarousel.png";

import "./hero.css";

function Hero() {
  //The settings for the carousel
  const settings = {
    dots: true,
    dotClass: "slick-dots slick-thumb ",
    // asNavFor: '.slider',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  //The images are stored in an array
  const slides = [
    {
      url: FirstImage,
    },
    {
      url: SecondImage,
    },
    {
      url: ThirdImage,
    },
    {
      url: FourthImage,
    },
  ];

  return (
    <div className=" w-full px-0 mx-0 ">
      <Slider {...settings}>
        <div className="   m-auto relative  ">
          <div
            style={{ backgroundImage: `url(${slides[0].url})` }}
            className=" relative overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto  pt-36 lg:pt-0 md:pt-32 lg:flex lg:h-screen lg:items-center"
          >
            <div class="mx-auto  text-center z-10">
              <h1 className="mb-4 text-3xl  font-Montserrat capitalize font-extrabold md:text-5xl lg:text-6xl">
                <span className=" bg-clip-text font-extrabold text-white  ">
                  Creative Design & Fashion week
                </span>{" "}
              </h1>

              <p className="mt-4 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                Visual Reality Meets Physical Reality
              </p>
              <div className=" items-center block ">
                <div className="mt-8 flex m-auto justify-center w-[183px] items-center gap-4">
                  <a
                    className="block w-full rounded bg-[#1E1E1E] px-8 py-4 text-sm font-medium text-white shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                    href="/"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full m-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[1].url})` }}
            className=" relative overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto   lg:pt-0 pt-36 md:pt-32 lg:flex lg:h-screen lg:items-center"
          >
            <div class="mx-auto  text-center z-10">
              <h1 className="mb-4 text-3xl  font-Montserrat capitalize font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                <span className=" bg-clip-text font-extrabold text-white  ">
                  Don’t just look,
                </span>{" "}
                feel
              </h1>

              <p className="mt-4 px-1 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                CDFW brings the most latest and most interesting collections
                from a range of designers to you
              </p>
              <div className=" items-center block ">
                <div className="mt-8 flex m-auto justify-center w-[183px] items-center gap-4">
                  <a
                    className="block w-full rounded bg-[#1E1E1E] px-8 py-4 text-sm font-medium text-white shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                    href="/"
                  >
                    Discover now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full m-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[2].url})` }}
            className=" relative overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto   lg:pt-0 pt-36 md:pt-32 lg:flex lg:h-screen lg:items-center"
          >
            {/* second hero  */}

            <div class="mx-auto  text-center z-10">
              <h1 className="mb-4 text-3xl  font-Montserrat font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                <span className=" bg-clip-text font-extrabold text-white  ">
                  Goodbye,
                </span>{" "}
                Runways
              </h1>

              <p className="mt-4 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                Experience designers collection in fun and immersive showrooms
              </p>
              <div className=" items-center block ">
                <div className="mt-8 flex m-auto justify-center w-[183px] items-center gap-4">
                  <a
                    className="block w-full rounded bg-[#1E1E1E] px-8 py-4 text-sm font-medium text-white shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                    href="/"
                  >
                    Discover now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full m-auto relative group">
          <div className="  w-full m-auto relative group ">
            <div
              style={{ backgroundImage: `url(${slides[3].url})` }}
              className="  relative overflow-hidden  bg-no-repeat images object-contain bg-cover  mx-auto   lg:pt-0 pt-36 md:pt-32 flex lg:h-screen lg:items-center"
            >
              {/* third hero  */}

              <div
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                className="w-full h-full absolute top-0 left-0   "
              ></div>
              <div class="mx-auto   text-center z-10 ">
                <h1 className="mb-4 text-3xl  font-Montserrat font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                  <span className=" bg-clip-text font-extrabold text-white  ">
                    A New Era of
                  </span>{" "}
                  Fashion
                </h1>

                <p className="mt-4 font-inter px-1 text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                  Be it for a video call, livestream or your social media feed:
                  Get designers piece to wear online.
                </p>
                <div className=" items-center block  ">
                  <div className="mt-8 flex m-auto justify-center w-[183px] items-center gap-4">
                    <a
                      className="block w-full rounded bg-[#1E1E1E] px-8 py-4 text-sm font-medium text-white shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                      href="/"
                    >
                      Discover now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
