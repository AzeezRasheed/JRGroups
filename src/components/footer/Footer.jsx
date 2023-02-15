import React from "react";
import Icon from "../../assets/Icon.png";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className="p-10 bg-white sm:p-10 sm:pt-14 sm:pl-0 ">
      <div className="flex flex-col gap-6">
        <div className="flex  justify-between m-auto gap-8 lg:gap-20 lg:flex-row  flex-col   ">
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
                        href="https://flowbite.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        JRGroups
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Our Partners
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Editorials
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
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
                        href="https://flowbite.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Expo
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Concept store
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        Patrons
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        class="hover:underline font-Montserrat font-semibold text-[14px] leading-[24px] tracking-[0.2px] "
                      >
                        London Shown
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
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

          <div className="lg:w-[380px] md:w-[380px] mb-8 ml-10 ">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-sm font-bold ml-10 font-Montserrat text-gray-900 uppercase ">
                KEEP IN TOUCH
              </h2>
              <form>
                <div className="flex items-center">
                  <div className="flex lg:w-[378px] w-full  ">
                    <input
                      type="text"
                      className="block w-full px-4 py-2  bg-slate-100 lg:text-[20px] font-Montserrat leading-[24px] font-normal text-[#000000] border rounded-md focus:outline-none focus:ring "
                      placeholder="Enter your email address"
                    />
                    <button className="px-4 py-4 text-white bg-[#BCBCBC] border-l rounded-xl ">
                      <img src={Icon} alt="submit" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between       ">
          <div className="hidden lg:block"></div>
          <span className="mb-6 text-sm font-bold font-Montserrat text-gray-900 uppercase">
            &copy;{new Date().getFullYear()} CDFW
            {/* <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved. */}
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="/" className="text-gray-500 hover:text-gray-900 ">
              <BsFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 ">
              <BsInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 ">
              <BsTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 ">
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
