import chairimg from "../assests/images/chairimg.webp";
import Button from "./Button";

const Section2 = () => {
  return (
    <div className="pt-[134px] lg:pb-[266px] pb-10 overflow-x-clip">
      <div className="max-w-[1320px] mx-auto px-3 flex-center">
        <div className="flex flex-row flex-wrap -mx-3">
          <div
            className="lg:w-1/2 w-full px-3 flex justify-center relative z-[1]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="max-w-[416px] w-full h-full max-h-[336px] bg-gradient absolute z-[-1] top-[-14%] left-[10%] lg:left-[6%] hidden sm:block "></div>
            <div className=" relative shadow-[3px_8px_26px_0px_#0000001F]">
              <img src={chairimg} alt="img" />
              <div className="max-w-[254px] max-h-[78px] w-full h-full bg-white absolute bottom-0 right-0 flex py-4 px-[15px] items-center justify-between">
                <p className="font-poppins text-sm  leading-normal font-normal text-center text-[#243040]">
                  Explore Video
                </p>
                <div className="w-[30%] border-t border-[#243040] border-solid"></div>
                <a href="">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#BD7D41" />
                    <path
                      d="M33 22.5L17.25 31.5933L17.25 13.4067L33 22.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full px-3"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <div className="flex items-center gap-[11px] mb-[19px] lg:justify-start justify-center mt-5 lg:mt-0">
              <div className="w-[13%] border border-solid border-black"></div>
              <h3 className=" font-poppins text-xl leading-normal font-normal text-[#BD7D41] ">
                Welcome Our Story
              </h3>
            </div>
            <h2 className=" max-w-[436px] text-[35px] font-poppins font-bold leading-normal text-[#243040] mb-[19px] text-center lg:text-start mx-auto lg:mx-0">
              We create the product you tell us you wish existed.
            </h2>
            <p className="font-poppins text-lg leading-normal font-normal text-[#000000B2] max-w-[596px] text-center lg:text-start mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, urna at pulvinar porta, augue lorem ullamcorper orci,
              non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper
              ante et mattis
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button text="READ MORE" name="!mt-[34px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
