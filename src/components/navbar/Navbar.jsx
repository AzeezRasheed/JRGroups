import React, { useState } from "react";
import Logo from "../../assets/CDFW.png";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";
import data from "../../components/data/sidebar";
import { Link } from "react-router-dom";
import "./navbar.css";
import { SidebarData } from "./SidebarData";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const showSidebar = () => setNavbar(!navbar);
  return (
    <header className=" relative top-0 z-30 w-full px-4 sm:px-4 py-2.5   bg-slate-100  shadow-xl">
      <div className=" flex flex-wrap items-center justify-between mx-auto w-full ">
        <a href="/" className="flex lg:pl-10 md:pl-10 pl-4 pb-2 pt-2 items-center">
          <img src={Logo} className="  " alt="JRGroups Logo" />
        </a>

        {/* inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 */}

        <button
          className="flex-none px-2 inline-flex  lg:hidden z-10"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          <span className="sr-only">Open Menu</span>
        </button>

        {/* absolute top-0 left-0 z-40 w-64 h-screen space-y-6 transform ease-in-out sm:translate-x-0 duration-200 overflow-y-auto bg-slate-100 */}
        {/* ${ navbar ? 'absolute top-0 left-0 z-40 '  : '' } */}
        <Sidebar className={` lg:relative lg:flex lg:flex-row lg:z-0  fixed  `}>
          <div className=" px-3 py-4 overflow-y-auto">
            <ul className={` items-center lg:inline-flex  ${"hidden"}`}>
              <li>
                <a
                  href="/"
                  className="px-10 py-2 font-normal text-[18px] leading-[22px] font-inter text-center text-[#1E1E1E] hover:text-gray-600 rounded"
                >
                  Home
                </a>
              </li>
              <li className="px-10">
                <div
                  className=" items-center w-20 relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <div
                    className={` cursor-pointer w-full  flex items-center justify-between font-normal text-[18px] leading-[22px] font-inter text-center text-[#1E1E1E]   
        `}
                  >
                    About
                    <BiChevronDown
                      size={20}
                      className={`${open && "rotate-180"}`}
                    />
                  </div>
                  <div
                    className={`  ${
                      open
                        ? "lg:fixed    min-w-max items-center  lg:bg-white text-base lg:z-50 py-2  list-none text-start lg:rounded-lg lg:shadow-lg  m-0  lg:ring-1 lg:ring-black lg:ring-opacity-5 lg:focus:outline-none} "
                        : "hidden"
                    }`}
                  >
                    {data.map((child, index) => {
                      return (
                        <li key={index} className="s-child  min-w-max">
                          <a href={child.path}>
                            <div className="">
                              <span className="cursor-pointer  text-start  hover:bg-gray-100 text-gray-700   bg-transparent whitespace-nowrap  dropdown-item text-sm py-2 px-4 font-normal  w-full block">
                                {child.title}
                              </span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/"
                  className="px-10 py-2 font-normal text-[18px] leading-[22px] font-inter text-center text-[#1E1E1E] hover:text-gray-600 rounded"
                >
                  Concept store
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-10 py-2 font-normal text-[18px] leading-[22px] font-inter text-center text-[#1E1E1E] hover:text-gray-600 rounded"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

     <div className="">
     <div >
      <form
            action=""
            className={` relative items-center m-auto  lg:block   hidden `}
          >
            <Input
              type="text "
              className={` Input relative peer z-10 bg-transparent w-12 h-12 rounded-full border focus:w-full  transition  focus:border-lime-400 focus:cursor-text pl-12 focus:pr-4 focus:pl-1g   `}
            />

            <FiSearch className="absolute top-0 bottom-0 inset-y-0 h-8 w-12 my-auto px-3.5 pt-0 items-center   border-r border-transparent peer-focus:border-lime-300  stroke-gray-500  peer-focus:stroke-gray-500  " />
          </form>
      </div>
     </div>
        </Sidebar>

        {/* sidebar opens on click of the button but it does not close on click of the button again */}

        <nav className={navbar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <img src={Logo} className="  " alt="JRGroups Logo" />
              </Link>
            </li>

            <form className="max-w-sm px-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar} >
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* end */}
      </div>
    </header>
  );
}

export default Navbar;

const Input = styled.input`
  transition: linear 0.5s;
`;

const Sidebar = styled.div`
  // transition: linear 0.5s;
`;
