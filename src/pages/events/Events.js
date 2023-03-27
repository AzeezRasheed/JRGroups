import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import HeroImage from "../../assets/Rectangle4351.png";
import HeroImageLeft from "../../assets/Rectangle 4353.png";
import HeroImageLeft2 from "../../assets/Rectangle 4352.png";
import HeroImageRight from "../../assets/Rectangle 4354.png";
import EventsBottomBgImage from "../../assets/Eventsbottombgimage.png";
import EventsData from "./EventsData";
import ExploreData from "./ExploreData";
import styled from "styled-components";
import tw from "twin.macro";
import { useSnapCarousel } from "react-snap-carousel";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Subscribe from "../../components/subscribe-to-news-letter/Subscribe";

const EventsContainer = styled.div`
  ${tw`
mx-auto items-center justify-center max-w-[1153px] flex flex-col gap-4 mt-20 pl-6 pr-6 lg:pl-10 lg:pr-10  
`}
`;
const EventsWrapper = styled.div`
  ${tw`
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 w-full min-w-[349px] 
`}
`;

const ExploreContainer = styled.div`
  ${tw`
relative
bg-[#05171C]
w-full
h-full
max-w-screen-2xl
items-center
m-auto
mt-20
`}
`;

const ExploreWrapper = styled.div`
  ${tw`
flex
flex-wrap
items-center
justify-center
lg:items-start
lg:justify-between
p-8
lg:p-28
w-full
gap-8
h-full
relative
z-50
`}
`;

function Events() {
  const slides = [
    {
      url: HeroImage,
    },
    {
      url: EventsBottomBgImage,
    },
  ];

  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

  return (
    <main>
      <Navbar />
      <div className="   m-auto relative  ">
        <div
          style={{ backgroundImage: `url(${slides[0].url})` }}
          className={` relative  overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto  pt-36 lg:pt-0 md:pt-32 lg:flex lg:h-screen lg:items-center`}
        >
          <img
            src={HeroImageLeft}
            className=" hidden lg:block absolute    left-0"
            alt="..."
          />
          <img
            src={HeroImageLeft2}
            className=" hidden lg:block absolute    left-0"
            alt="..."
          />
          <img
            src={HeroImageRight}
            className=" hidden lg:block absolute  right-0"
            alt="..."
          />
          <div class="mx-auto  text-center z-10">
            <div className="flex flex-col items-center justify-center m-auto">
              <h1 className="mb-2 w-full max-w-[548px] lg:text-[48px] text-3xl md:text-5xl text-white leading-[130%] tracking-[-0.01em]  font-Montserrat capitalize font-bold ">
                CDFW Digital
                <span className=" bg-clip-text font-extrabold text-gray-400  ">
                  Meetup
                </span>
              </h1>
              <h1 className="mb-4 w-full max-w-[548px]  lg:text-[48px] text-3xl md:text-5xl text-white leading-[130%] tracking-[-0.01em]  font-Montserrat capitalize font-bold ">
                Event 2023
              </h1>
            </div>

            <p className="mt-4 font-inter text-[18px] font-normal lg:w-[637px] text-[#E9E9E9] text-center mx-auto ">
              Discover 24 Upcoming Events
            </p>
            <div className=" items-center m-auto justify-center flex flex-wrap gap-2 ">
              <div className="mt-8 flex  w-[183px] items-center ">
                <a
                  className="block w-full rounded bg-[#1E1E1E] px-8 py-4 text-sm font-medium text-white shadow hover:bg-slate-400 font- focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
                  href="/"
                >
                  Purchase Ticket
                </a>
              </div>
              <div className="mt-8 flex w-[183px] items-center ">
                <a
                  className="block w-full rounded  border-solid border-[1px] border-white  px-8 py-4 text-sm font-medium text-white shadow hover:bg-slate-400 hover:border-none font- focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
                  href="/"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${slides[1].url})` }}
          className={` relative  overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto  h-[113px] lg:items-center`}
        ></div>
      </div>

      <EventsContainer>
        <div className="flex flex-wrap gap-2 justify-between w-full items-center mb-3 ">
          <h2 className=" font-Montserrat font-semibold text-[24px] leading-[130%] tracking-[-0.01px] capitalize ">
            Events near Dubia, UAE
          </h2>

          <div className="text-center items-center">
            <a
              className="block w-full rounded  border-solid border-[1px] border-[#C8C8C8] text-black  py-4 px-4 text-sm font-medium  shadow hover:bg-slate-400 hover:border-none focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
              href="/"
            >
              View More Events
            </a>
          </div>
        </div>
        <EventsWrapper>
          {EventsData.map((item, index) => (
            <div
              style={{ boxShadow: "5px 14px 30px rgba(6, 16, 52, 0.15)" }}
              className=" flex flex-col gap-6 justify-between relative"
            >
              <div className="w-[167px] absolute left-[1.5rem] top-[13rem] ">
                <div className="text-center items-center">
                  <a
                    className="block w-full rounded bg-[#3F3F3F] text-white  py-3 px-2 text-sm font-medium  shadow hover:bg-slate-400 focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
                    href={item.buttonLink}
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
              <img src={item.image} alt={item.alt} className="w-full mb-8 " />
              <div className="px-4 flex items-center justify-between  ">
                <span className="font-inter font-medium text-start text-[14px]  leading-[17px] text-[ #3F3F3F]   ">
                  {item.date}
                </span>
                <span className="font-inter font-medium text-start text-[14px] mr-10  leading-[17px] text-[ #3F3F3F]   ">
                  {item.location}
                </span>
              </div>
              <div className="flex flex-col  gap-6  px-6 mb-6  ">
                <div className="flex flex-col gap-4">
                  <h2 className="font-Montserrat w-[200px]  font-semibold text-start text-[25px] leading-[134%] text-[#000000]   ">
                    {item.title}
                  </h2>

                  <p className="font-Montserrat font-normal w-[198px] leading-[19px] text-[16px] text-[#524F4F] ">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </EventsWrapper>
      </EventsContainer>
      <ExploreContainer>
        <ExploreWrapper>
          <h2 className="text-center justify-center mb-2 m-auto text-white font-semibold leading-[130%] text-[24px] tracking-[-0.01em] capitalize font-Montserrat ">
            Explore the Popular Events
          </h2>
          <ul
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "30px",
              overflow: "hidden",
              scrollSnapType: "x mandatory",
            }}
          >
            {ExploreData.map((item, index) => (
              <li
                style={{
                  boxShadow: "5px 14px 30px rgba(6, 16, 52, 0.15)",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className=" flex flex-col gap-6 justify-between rounded-xl bg-white   relative"
              >
                <div className="w-[167px] absolute left-[1.5rem]  top-[13rem] ">
                  <div className="text-center items-center">
                    <a
                      className="block w-full rounded bg-[#3F3F3F] text-white  py-3 px-2 text-sm font-medium  shadow hover:bg-slate-400 focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
                      href={item.buttonLink}
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </div>
                <img src={item.image} alt={item.alt} className="w-full mb-8 " />
                <div className="px-4 flex items-center justify-between  ">
                  <span className="font-inter font-medium text-start text-[14px]  leading-[17px] text-[ #3F3F3F]   ">
                    {item.date}
                  </span>
                  <span className="font-inter font-medium text-start text-[14px] mr-10  leading-[17px] text-[ #3F3F3F]   ">
                    {item.location}
                  </span>
                </div>
                <div className="flex flex-col  gap-6  px-6 mb-6  ">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-Montserrat w-[200px]  font-semibold text-start text-[25px] leading-[134%] text-[#000000]   ">
                      {item.title}
                    </h2>

                    <p className="font-Montserrat font-normal w-[285px] leading-[19px] text-[16px] text-[#524F4F] ">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center items-center">
            <button
              onClick={() => prev()}
              className="block w-full rounded  border-solid border-[1px] border-[#C8C8C8] text-white hover:text-black  py-4 px-4 text-sm font-medium  shadow hover:bg-slate-400 hover:border-none focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
            >
              <BsArrowLeftShort size={25} />
            </button>
          </div>
          {/* <div>
            {activePageIndex + 1} / {pages.length}
          </div> */}
          <div className="text-center items-center">
            <a
              className="block w-full rounded  border-solid border-[1px] border-[#C8C8C8] text-white hover:text-black py-4 px-6 text-sm font-medium  shadow hover:bg-slate-400 hover:border-none focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
              href="/"
            >
              View Details
            </a>
          </div>
          <div className="text-center items-center">
            <button
              onClick={() => next()}
              className="block w-full rounded  border-solid border-[1px] border-[#C8C8C8] text-white hover:text-black  py-4 px-4 text-sm font-medium  shadow hover:bg-slate-400 hover:border-none focus:outline-none  active:bg-[#C5C5C5] sm:w-auto"
            >
              <BsArrowRightShort size={25} />
            </button>
          </div>
        </ExploreWrapper>
      </ExploreContainer>

      <Subscribe />

      <Footer />
    </main>
  );
}

export default Events;
