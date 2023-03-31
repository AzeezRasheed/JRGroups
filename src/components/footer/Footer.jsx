import React from "react";
import Icon from "../../assets/Icon.png";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import CDFWLOGO from "../../assets/cdfw logo B.png";

function Footer() {
  return (
    <footer className="p-10 bg-white sm:p-10 sm:pt-14 sm:pl-0 ">
      <div className="flex flex-col gap-6">
        <div className="flex  items-center lg:items-start justify-center lg:justify-between m-auto gap-8 lg:gap-20 lg:flex-row  flex-col   ">
          <a
            href="/"
            className="flex items-center w-[130px] md:w-[180px] h-full"
          >
            <img src={CDFWLOGO} className="w-full h-full" alt="JRGroups Logo" />
          </a>

          <div>
            <div>
              <div className=" grid grid-cols-2 sm:grid-cols-3  gap-8 md:gap-20 lg:gap-36 ">
                <div>
                  <h2 className="mb-6 text-sm font-bold font-Montserrat text-gray-900 uppercase ">
                    COMPANY
                  </h2>
                  <ul className="text-gray-600 ">
                    <li className="mb-4">
                      <a
                        href="/about-us"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        JRGroups
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Our Partners
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="/editorials"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Editorials
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        News
                      </a>
                    </li>
                  </ul>
                </div>

                {/* second grid */}
                <div>
                  <h2 className="mb-6 text-sm font-bold font-Montserrat text-gray-900 uppercase ">
                    CDFW
                  </h2>
                  <ul className="text-gray-600 ">
                    <li className="mb-4">
                      <a
                        href="/expo"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Expo
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Concept store
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Patrons
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="/"
                        class="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        London Shown
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Dubai fashion
                      </a>
                    </li>
                  </ul>
                </div>

                {/* third grid */}

                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                    Contact Us
                  </h2>
                  <div className="text-gray-600 ">
                    <div className="flex flex-col gap-1 mb-2">
                      <h2 className=" font-Montserrat font-normal text-[14px] leading-[24px] tracking-[0.2px] ">
                        Call Us Directly
                      </h2>

                      <h2 className=" font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] ">
                        @infojrgroups.com
                      </h2>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h2 className=" font-Montserrat font-normal text-[14px] leading-[24px] tracking-[0.2px] ">
                        Call Us Directly
                      </h2>

                      <h2 className=" font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] ">
                        @infojrgroups.io
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-center justify-between items-center pl-4 md:pl-20 ">
          <div className="hidden lg:block"></div>
          <span className=" text-[14px] leading-[24px] tracking-[0.2px] font-bold font-Montserrat text-gray-900 uppercase">
            &copy;{new Date().getFullYear()}’s CDFW All Right Reserve
          </span>
          <div className="flex space-x-6 sm:justify-center mt-0">
            <a href="/" className="text-gray-900 hover:text-gray-500  ">
              <BsFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="/" className="text-gray-900 hover:text-gray-500 ">
              <BsInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="/" className="text-gray-900 hover:text-gray-500 ">
              <BsTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="/" className="text-gray-900 hover:text-gray-500  ">
              <BsYoutube />
              <span className="sr-only">Youtube account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
