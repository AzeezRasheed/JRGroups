import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Expo1 from "../../assets/Expo1.png";
import Expo2 from "../../assets/Expo2.png";
import Expo3 from "../../assets/Expo3.png";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="">
        <ArrowBackIos size={30} className="text-[#000000]  items-center " />
      </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos size={30} className="text-[#000000]  items-center " />
    </div>
  );
};

function Expo() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="flex flex-col lg:p-10 md:p-10 p-2  justify-center m-auto mt-1 pt-0 max-w-[1298px]  ">
      <div className=" items-center justify-center w-full  m-auto  ">
        <div className=" bg-[#EFF9FF]  h-full  w-full ">
          <div className="lg:p-10 p-4  flex flex-col md:flex-col lg:flex-row gap-10">
            {/* Left Side */}
            <div className="mt-10">
              <div className="flex flex-col gap-4 lg:w-[318px] ">
                <h2 className="text-[#3F3F3F] leading-[44px] font-semibold text-[36px] font-inter ">
                  Where we’ve been so far
                </h2>
                <p className="max-w-[318px] w-full text-[11px] leading-[145%] font-normal font-Montserrat text-[#000000] ">
                  We activate showrooms at various places. and bring you closer
                  to designers from all over the world. Maybe your city is next.
                </p>
                <div className="w-[167px]">
                  <div className="text-center items-center">
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
            {/* Right Side */}
            <div className=" pr-2 pl-2 lg:pl-0  lg:w-[70%]  ">
              <Slider {...settings}>
                <div className="pr-2 pl-2">
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={Expo1}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className="w-full "
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[20px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW IN LONDON
                      </h2>
                      <p className="font-Montserrat font-normal  text-[12px] text-[#000000] ">
                        See our showrooms and designers from the heart of
                        Europe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pr-2 pl-2">
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={Expo2}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className="w-full  "
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[20px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW IN LAGOS
                      </h2>
                      <p className="font-Montserrat font-normal  text-[12px] text-[#000000] ">
                        See which designers showcased in Africa’s hub for
                        creativity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-2 pl-2">
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={Expo3}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className="w-full  "
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[20px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW IN LOS ANGELES
                      </h2>
                      <p className="font-Montserrat font-normal  text-[12px] text-[#000000] ">
                        Fashion meets the digital world in sunny California.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pr-2 pl-2">
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={Expo1}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className="w-full  "
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[20px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW IN LONDON
                      </h2>
                      <p className="font-Montserrat font-normal  text-[12px] text-[#000000] ">
                        See our showrooms and designers from the heart of
                        Europe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pr-2 pl-2">
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={Expo2}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className="w-full  "
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[20px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW IN LAGOS
                      </h2>
                      <p className="font-Montserrat font-normal  text-[12px] text-[#000000] ">
                        See which designers showcased in Africa’s hub for
                        creativity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pr-2 pl-2">
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={Expo3}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className="  w-full"
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[20px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW IN LOS ANGELES
                      </h2>
                      <p className="font-Montserrat font-normal  text-[12px] text-[#000000] ">
                        Fashion meets the digital world in sunny California.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expo;
