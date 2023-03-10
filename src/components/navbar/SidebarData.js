import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {FaInfoCircle} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "About Us",
    path: "/about-us",
    icon: <FaInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Concept Store",
    path: "/concept-store",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  //   {
  //     title: "Messages",
  //     path: "/messages",
  //     icon: <FaIcons.FaEnvelopeOpenText />,
  //     cName: "nav-text",
  //   },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
