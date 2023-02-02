import React, { useState } from "react";
import Logo from "../../assets/logo 1.png";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="top-0 z-30 w-full py-0 px-4 lg:py-4 md:py-2  bg-slate-100  shadow-xl">
      <div className="flex items-center justify-between mx-auto max-w-7xl ">
        <a href="/" className="flex items-center">
          <img src={Logo} class=" mr-3 " alt="JRGroups Logo" />
        </a>

        <div className="inline-flex lg:hidden">
          <button
            className="flex-none px-2 "
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
        </div>

        <div className={`lg:inline-flex   ${navbar ? "block   " : "hidden"}`}>
          <ul>
            <li>
              <a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">
                About
              </a>
            </li>
            <li>
              <a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">
                Concept store
              </a>
            </li>
            <li>
              <a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
