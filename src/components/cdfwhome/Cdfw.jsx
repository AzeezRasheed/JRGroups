import React from "react";
import data from "./cdfwData";
import { TypedText } from "../typedText/TypedText";

// What we want to do at this point is to create a function for typing text and then call it in the return statement

function Cdfw() {
  // So we create a function that returns the text we want to type and then call it and save it in a variable
  const typedText = TypedText();

  //Then we have a cdfw component that returns the data for all we need to display on the page and then we call the typedText variable in the return statement
  return (
    <div className="mt-10 p-4 mb-10 m-auto">
      <div className="h-[60px]  lg:h-[48px] md:h-[48px] ">
        {" "}
        <h2 className=" blinking-cursor text-center m-auto max-w-[637px] font-inter leading-[24px] text-[20px] font-normal   md:pl-2 md:pr-2 lg:pl-2 lg:pr-2 pt-3 pb-3 ">
          {typedText}
        </h2>
      </div>

      <div className="mx-auto items-center justify-center max-w-[1153px] flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 pl-6 pr-6 lg:pl-10 lg:pr-10 mt-24 ">
          {data.map((item, index) => (
            <div className=" flex flex-col gap-6 justify-between">
              <div className="flex flex-col  gap-6  ">
                <img src={item.image} alt={item.alt} className="w-full " />
                <div className="flex flex-col gap-4">
                  <h2 className="font-inter font-semibold text-start text-[20px] lg:text-[22px] md::text-[22px] leading-[29px] text-[ #3F3F3F]   ">
                    {item.title}
                  </h2>

                  <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
                    {item.paragraph}
                  </p>
                </div>
              </div>

            <div>
            <div className="w-[167px] ">
                <div className="text-center items-center">
                  <a
                    className="block w-full rounded bg-[#C5C5C5] text-white  py-4 text-sm font-medium  shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                    href={item.buttonLink}
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cdfw;
