import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../assets/Group 1000001826.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";
import FirstImage from "../../assets/heroFirstImage.png";
import SecondImage from "../../assets/heroSecondImage.png";
import ThirdImage from "../../assets/heroThirdImage.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import React from "react";
function Hero() {
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
  ];

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="max-w-screen-2xl  w-full m-auto relative group">
            <div
              style={{ backgroundImage: `url(${slides[0].url})` }}
              className=" relative overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto max-w-[1440px] px-4 pt-16 md:pt-32 lg:pt-0 lg:flex lg:h-screen lg:items-center"
            >
              {/* hero section */}

              <div class="mx-auto  text-center">
                <h1 className="mb-4 text-3xl  font-Montserrat font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                  <span className=" bg-clip-text font-extrabold text-white  ">
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
                <div className=" items-center block ">
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
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="max-w-screen-2xl  w-full m-auto relative group">
            <div
              style={{ backgroundImage: `url(${slides[1].url})` }}
              className=" relative overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto max-w-screen-2xl px-4 pt-24 lg:pt-0 md:pt-32 lg:flex lg:h-screen lg:items-center"
            >
              {/* hero section */}

              <div class="mx-auto  text-center">
                <h1 className="mb-4 text-3xl  font-Montserrat font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                  <span className=" bg-clip-text font-extrabold text-white  ">
                    A New Era of
                  </span>{" "}
                  Fashion
                </h1>

                <p className="mt-4 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                  Be it for a video call, live stream or your social media feed:
                  Get designer pieces to wear online.
                </p>
                <div className=" items-center block ">
                  <div className="mt-8 flex m-auto justify-center items-center gap-4">
                    <a
                      className="block w-full rounded bg-[#C5C5C5] px-8 py-4 text-sm font-medium text-[#000000] shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="max-w-screen-2xl  w-full m-auto relative group">
            <div
              style={{ backgroundImage: `url(${slides[2].url})` }}
              className=" relative overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto max-w-screen-2xl px-4 lg:pt-0 pt-24 md:pt-32 lg:flex lg:h-screen lg:items-center"
            >
              {/* hero section */}

              <div class="mx-auto  text-center">
                <h1 className="mb-4 text-3xl  font-Montserrat font-extrabold text-slate-300 md:text-5xl lg:text-6xl">
                  <span className=" bg-clip-text font-extrabold text-white  ">
                    A New Era of
                  </span>{" "}
                  Fashion
                </h1>

                <p className="mt-4 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
                  Be it for a video call, live stream or your social media feed:
                  Get designer pieces to wear online.
                </p>
                <div className=" items-center block ">
                  <div className="mt-8 flex m-auto justify-center items-center gap-4">
                    <a
                      className="block w-full rounded bg-[#C5C5C5] px-8 py-4 text-sm font-medium text-[#000000] shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
