import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {FaInfoCircle} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "About",
    path: "/about-us",
    // icon: <FaInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "CDFW",
    path: "/cdfw",
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "EXPO",
    path: "/expo",
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
