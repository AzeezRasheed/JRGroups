import React from "react";
import { ImPlay2 } from "react-icons/im";
function Subscribe() {
  return (
    <section className="flex flex-col lg:p-10 md:p-10 p-2  justify-center m-auto mt-8 max-w-[1055.94px] ">
      <div className=" items-center justify-center w-full  m-auto  ">
        <div className=" bg-[#EFF9FF]  h-full  w-full rounded ">
          <div className="flex flex-col gap-4 text-center items-center mx-auto p-8 ">
            <h2 className=" text-[#000000]  font-extrabold font-Manrope text-[34px] leading-[45px]  ">
              #Subscribe To Our Newsletters
            </h2>
            <p className=" text-[#3F3F3F] text-center font-Manrope leading-[30px] text-[16px] font-normal max-w-[592px] ">
              Protect yourself by not giving your persinal data to anyone . Want
              to experience more bankng conevenince? Lets keep your personal
              data safe with us.
            </p>
            <div className="bg-[#B9C9D2]  rounded-[5px] w-full max-w-[492px] h-[41px] "></div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-6 pt-3">
              <div className="">
                <div className="text-center items-center">
                  <a
                    className="block w-full rounded bg-[#3F3F3F] font-Poppins leading-[24px] text-center text-[15.9px] font-medium text-white px-8 py-4 text-sm   shadow hover:bg-slate-400 font- focus:outline-none focus:ring active:bg-[#C5C5C5] sm:w-auto"
                    href="/"
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>

              <button className="flex flex-row gap-4 items-center  ">
                <ImPlay2 size={30} className="cursor-pointer" />
                <h2 className=" text-[#000000] text-center leading-[30px] text-[16px] font-Manrope font-semibold ">
                  JRGroup’s Introduction
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
