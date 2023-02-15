import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partnership.css";
import FirstLogo from "../../assets/image_3-removebg-preview.png";
import SecondLogo from "../../assets/image_4-removebg-preview.png";
import ThirdLogo from "../../assets/image_5-removebg-preview.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{ color: "black", fontSize: "30px", alignItems: "center" }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{ color: "black", fontSize: "30px", alignItems: "center" }}
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
    autoplaySpeed: 8000,
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
    <div className=" px-4 m-auto max-w-[1200px] mt-6 ">
      <div className="flex flex-row mx-4  ">
        <div className="w-full md:w-1/2 lg:w-3/6     ">
          <hr className="h-[2px] my-8 bg-[#000000]" />
        </div>
        <div className=" lg:w-[350px] w-1/2 "></div>
        <div className="w-full md:w-1/2 lg:w-3/6 ">
          <hr className="h-[2px] my-8 bg-[#000000]" />
        </div>
      </div>
      <div className="App px-20 m-auto items-center justify-center max-w-[1000px]  ">
        <Slider {...settings}>
          <div className="card px-4">
            <img
              src={SecondLogo}
              alt="image1"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card px-4">
            <img
              src={ThirdLogo}
              alt="image2"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>

          <div className="card px-4">
            <img
              src={FirstLogo}
              alt="image3"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card px-4">
            <img
              src={SecondLogo}
              alt="image1"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card px-4">
            <img
              src={ThirdLogo}
              alt="image2"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
          <div className="card px-4">
            <img
              src={FirstLogo}
              alt="image3"
              className=" cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partnership;
