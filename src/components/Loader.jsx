import React from "react";
import logo from "../assests/images/logo.webp"

const Loader = () => {
  return (
    <div>
      <div class="flex space-x-2 justify-center items-center flex-col bg-[#2d3949] h-screen ">
        <div className=" animate-bounce mb-11">
                  <div className="flex justify-center items-center"></div>
                  <img src={logo} alt="logo" />
          <h2
            className="text-white
           text-[33.02px] font-bold font-roboto"
          >
           Loading...........
          </h2>
        </div>
        <div className="flex gap-1"></div>
      </div>
    </div>
  );
};

export default Loader;
