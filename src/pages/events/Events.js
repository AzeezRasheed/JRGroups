import React, { Fragment, useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import HeroImage from "../../assets/Rectangle4351.png";
import HeroImageLeft from "../../assets/Rectangle 4353.png";
import HeroImageLeft2 from "../../assets/Rectangle 4352.png";
import HeroImageRight from "../../assets/Rectangle 4354.png";
import EventsBottomBgImage from "../../assets/Eventsbottombgimage.png";
import { FiSearch } from "react-icons/fi";
import EventsData from "./EventsData";
import ExploreData from "./ExploreData";
import styled from "styled-components";
import tw from "twin.macro";
import { useSnapCarousel } from "react-snap-carousel";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Subscribe from "../../components/subscribe-to-news-letter/Subscribe";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

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

  const [eventLocation, setEventLocation] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [nextEvent, setNextEvent] = useState("");
  const [search, setSearch] = useState([
    {
      nextEvent: "",
      // eventCategory: "",
      eventLocation: "",
    },
  ]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch({
      ...search,
      nextEvent: nextEvent,
      // eventCategory: eventCategory,
      eventLocation: eventLocation,
    });
    console.log(search);
  };
  return (
    <main>
      <Navbar />
      <div className="m-auto relative  ">
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
          <div className="mx-auto  text-center z-10">
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
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${slides[1].url})` }}
            className={` relative  overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto  h-[113px] lg:items-center`}
          ></div>
          {/* This is the absolute div in the hero section */}
          <div className=" hidden md:block absolute w-full h-[138px]  px-4  -top-[48px]     ">
            <div className="w-full md:w-[700px] lg:w-[865px] h-full m-auto flex items-center justify-center bg-white rounded-xl shadow-lg "></div>
          </div>
          {/* This is the absolute div in the hero section */}
          <div className=" hidden md:block absolute w-full md:h-[138px] h-full  px-4  -top-16     ">
            <div className="w-full max-w-[897px] h-full m-auto flex items-center justify-center bg-white rounded-xl shadow-lg ">
              <div className="flex justify-between  items-center w-full h-full">
                <div className="border-r border-solid border-[#BABABA] h-full items-center flex ">
                  <div className="  px-4 items-center  ">
                    <div
                      className={` relative items-center m-auto  w-full h-full  `}
                    >
                      <input
                        type="text "
                        placeholder="Find our next event"
                        onChange={(e) => setNextEvent(e.target.value)}
                        className={` relative peer placeholder:text-[#444444] placeholder:font-inter  z-10 bg-transparent outline-none  focus:cursor-text pl-12   `}
                      />

                      <FiSearch className="absolute top-0 bottom-0 inset-y-0 h-8 w-12 my-auto px-3.5 pt-0 items-center " />
                    </div>
                  </div>
                </div>
                <div className="border-r border-solid border-[#BABABA] h-full items-center flex ">
                  <div className="lg:px-10 md:px-4 items-center">
                    <Menu as="div" className="relative  text-left">
                      <div>
                        <Menu.Button className=" flex  items-center text-[#444444] leading-[130%] text-[15px] text-center font-normal font-inter tracking-[-0.01em] ">
                          Event Location
                          <BiChevronDown
                            size={25}
                            className="ml-2 -mr-1 h-5 w-5 text-black hover:text-violet-100"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -left-10 top-8 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => setEventLocation("london")}
                                  className={
                                    active
                                      ? "bg-gray-100 text-gray-900 flex items-center flex-row  w-full  px-4 py-2 text-sm"
                                      : "text-gray-700 flex flex-row  items-center px-4 py-2  w-full text-sm"
                                  }
                                >
                                  London
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button 
                                  onClick={() => setEventLocation("lagos")}
                                  className={
                                    active
                                      ? "bg-gray-100 text-gray-900 flex items-center flex-row  px-4 py-2 w-full text-sm"
                                      : "text-gray-700 flex flex-row  items-center px-4 py-2 w-full text-sm"
                                  }
                                >
                                  Lagos
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() =>
                                    setEventLocation("los-angeles")
                                  }
                                  className={
                                    active
                                      ? "bg-gray-100 text-gray-900 flex items-center flex-row  w-full  px-4 py-2 text-sm"
                                      : "text-gray-700 flex flex-row  items-center  w-full px-4 py-2 text-sm"
                                  }
                                >
                                  Los Angeles
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => setEventLocation("dubai")}
                                  className={
                                    active
                                      ? "bg-gray-100 text-gray-900 flex items-center flex-row  w-full  px-4 py-2 text-sm"
                                      : "text-gray-700 flex flex-row  items-center w-full  px-4 py-2 text-sm"
                                  }
                                >
                                  Dubai
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex lg:gap-4 justify-center m-auto w-full h-full items-center ">
                    <div className="lg:px-4 items-center">
                      <Menu as="div" className="relative  text-left">
                        <div>
                          <Menu.Button className=" flex  items-center text-[#444444] leading-[130%] text-[15px] text-center font-normal font-inter tracking-[-0.01em] ">
                            Event Category
                            <BiChevronDown
                              size={25}
                              className="ml-2 -mr-1 h-5 w-5 text-black hover:text-violet-100"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute -left-10 top-8 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => {}}
                                    className={
                                      active
                                        ? "bg-gray-100 text-gray-900 flex items-center  w-full flex-row  px-4 py-2 text-sm"
                                        : "text-gray-700 flex flex-row  items-center  w-full px-4 py-2 text-sm"
                                    }
                                  >
                                    London
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => {}}
                                    className={
                                      active
                                        ? "bg-gray-100 text-gray-900 flex items-center flex-row  w-full  px-4 py-2 text-sm"
                                        : "text-gray-700 flex flex-row  items-center  w-full px-4 py-2 text-sm"
                                    }
                                  >
                                    Lagos
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => {}}
                                    className={
                                      active
                                        ? "bg-gray-100 text-gray-900 flex items-center flex-row  w-full  px-4 py-2 text-sm"
                                        : "text-gray-700 flex flex-row  items-center  w-full px-4 py-2 text-sm"
                                    }
                                  >
                                    Los Angeles
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() => {}}
                                    className={
                                      active
                                        ? "bg-gray-100 text-gray-900 flex items-center flex-row  w-full  px-4 py-2 text-sm"
                                        : "text-gray-700 flex flex-row  items-center w-full  px-4 py-2 text-sm"
                                    }
                                  >
                                    Dubai
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className="text-center items-center px-4">
                      <button
                        onClick={handleSearch}
                        className="block w-full  border-solid border-[1px] shadow-lg border-[#C8C8C8] text-white  py-4 md:px-4 lg:px-10 text-sm font-medium   hover:bg-slate-400 hover:border-none focus:outline-none rounded-[5px] bg-[#1E1E1E] active:bg-[#C5C5C5] sm:w-auto"
                      >
                        Search Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              key={index}
              style={{ boxShadow: "5px 14px 30px rgba(6, 16, 52, 0.15)" }}
              className=" flex flex-col gap-6 justify-between rounded-xl relative"
            >
              <div className="w-[167px] absolute  left-[1.5rem] top-[13rem] ">
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
        <div
          style={{ backgroundImage: `url(${slides[1].url})` }}
          className={` relative  overflow-hidden bg-no-repeat images object-contain bg-cover  mx-auto  h-[113px] lg:items-center`}
        ></div>
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
                key={index}
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
                <img src={item.image} alt={item.alt} className="w-full mb-2 " />
                <div className="flex flex-col  gap-6  px-6 mb-16  ">
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
function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
