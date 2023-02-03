import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partnership.css";
import FirstLogo from "../../assets/image_3-removebg-preview.png";
import SecondLogo from "../../assets/image_4-removebg-preview.png";
import ThirdLogo from "../../assets/image_5-removebg-preview.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{ color: "blue", fontSize: "30px", alignItems: "center" }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{ color: "blue", fontSize: "30px", alignItems: "center" }}
      />
    </div>
  );
};
function Partnership() {
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
    <div className="max-w-[900px] px-4 m-auto  ">
      <div className="flex flex-row mx-4 ">
        <div className="w-full md:w-1/2 lg:w-3/6     ">
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className=" w-1/2  "></div>
        <div className="w-full md:w-1/2 lg:w-3/6 ">
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
      <div className="App px-20 m-auto items-center">
        <Slider {...settings}>
          <div className="card">
            <img
              src={SecondLogo}
              alt="image"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card">
            <img
              src={ThirdLogo}
              alt="image"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>

          <div className="card">
            <img
              src={FirstLogo}
              alt="image"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card">
            <img
              src={SecondLogo}
              alt="image"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card">
            <img
              src={ThirdLogo}
              alt="image"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card">
            <img
              src={FirstLogo}
              alt="image"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partnership;
