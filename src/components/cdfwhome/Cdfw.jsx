import React from "react";
import FImage from "../../assets/image 7.png";
import SImage from "../../assets/image 8.png";
import THImage from "../../assets/Rectangle 1.png";
import data from "./cdfwData"
function Cdfw() {
  return (
    <div className="mt-10 p-4 m-auto">
      <h2 className="text-center m-auto max-w-[637px] font-inter leading-[24px]  ">
        JRGroups play a key role in supporting us to deliver significant and
        impactful programmes that benefit the industry at large.
      </h2>

      <div className="mx-auto items-center justify-center flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">
        {data.map((item, index) => (
            
      <div className="flex flex-col w-[370px] gap-6 mt-24 pl-6 pr-6 ">
      <img src={item.image} alt={item.alt} className="w-full" />
      <div className="flex flex-col gap-4">
        <h2 className="font-inter font-semibold text-start text-[24px] leading-[29px] text-[ #3F3F3F]   ">
            {item.title}
        </h2>

        <p className="font-Montserrat font-normal  text-[11px] text-[#000000] ">
            {item.paragraph}
        </p>
      </div>

      <div className="w-[167px] ">
        <div className="text-center items-center">
          <a
            className="block w-full rounded bg-[#C5C5C5] text-white px-8 py-4 text-sm font-medium  shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
            href="/"
          >
            Learn More
          </a>
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
