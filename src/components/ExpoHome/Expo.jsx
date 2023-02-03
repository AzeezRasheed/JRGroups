import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FImage from "../../assets/image 7.png";
import SImage from "../../assets/image 8.png";
import THImage from "../../assets/Rectangle 1.png";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
// import "./expo.css";
import data from "./data";
const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="">
        <ArrowBackIos
          size={30}
          className="text-[#000000]  items-center "
        />
      </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        size={30}
        className="text-[#000000]  items-center "
      />
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
    autoplaySpeed: 1800,
    cssEase: "linear",
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
    <section className="flex flex-col lg:p-10 md:p-10 p-2  justify-center m-auto mt-8 max-w-[1298px] ">
      <div className=" items-center justify-center w-full  m-auto  ">
        <div className=" bg-[#EFF9FF]  h-full  w-full ">
          <div className="lg:p-10 p-4  flex flex-col md:flex-col lg:flex-row gap-10">
            {/* Left Side */}
            <div className="mt-10">
              <div className="flex flex-col gap-4 lg:w-[318px] ">
                <h2 className="text-[#3F3F3F] leading-[44px] font-semibold text-[36px] font-inter ">
                  Check Our Expo
                </h2>
                <p className="max-w-[318px] w-full text-[11px] leading-[145%] font-normal font-Montserrat text-[#000000] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullam ing
                  elit,
                </p>
                <div className="w-[167px]">
                  <div className="text-center items-center">
                    <a
                      className="block w-full rounded bg-[#C5C5C5] text-white px-8 py-4 text-sm font-medium  shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                      href="/"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="p-4  lg:w-[70%]  ">
              <Slider {...settings}>
                <div>
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={FImage}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className=""
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW LONDON FASHION WEEK FEBRUARY 2023
                      </h2>
                      <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor inci adipiscing elit, sed do
                        eiusmod tempor inci.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={SImage}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className=""
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW LONDON FASHION WEEK FEBRUARY 2023
                      </h2>
                      <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor inci adipiscing elit, sed do
                        eiusmod tempor inci.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={THImage}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className=""
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW LONDON FASHION WEEK FEBRUARY 2023
                      </h2>
                      <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor inci adipiscing elit, sed do
                        eiusmod tempor inci.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={FImage}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className=""
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW LONDON FASHION WEEK FEBRUARY 2023
                      </h2>
                      <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor inci adipiscing elit, sed do
                        eiusmod tempor inci.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={SImage}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className=""
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW LONDON FASHION WEEK FEBRUARY 2023
                      </h2>
                      <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor inci adipiscing elit, sed do
                        eiusmod tempor inci.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col  gap-6  ">
                    <img
                      src={THImage}
                      alt="CDFW LONDON FASHION WEEK FEBRUARY 2023"
                      className=""
                    />
                    <div className="flex flex-col mt-4 gap-4">
                      <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
                        CDFW LONDON FASHION WEEK FEBRUARY 2023
                      </h2>
                      <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor inci adipiscing elit, sed do
                        eiusmod tempor inci.
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

// {data.map((item, index) => (
//     <div>
//       <div className="flex flex-col  gap-6  ">
//       <img src={item.image} alt={item.alt} className="w-full" />
//       <div className="flex flex-col mt-4 gap-4">
//         <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
//           {item.title}
//         </h2>
//         <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
//           {item.paragraph}
//         </p>
//       </div>
//     </div>
//     </div>
//   ))}
