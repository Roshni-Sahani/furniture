import bigsofa from "../assests/images/bigsofa.webp"
import Button from "./Button";

const Woodensec = () => {
  return (
    <div className="bg-[#F7F7F8] md:pt-[75px]  pt-10 max-sm:pb-10  relative z-10 overflow-x-clip">
      <div className="container px-3 max-w-[1320px] mx-auto ">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-5/12 w-full px-3 ">
            <div className="flex items-center gap-[11px] lg:justify-start justify-center md:mb-[19px]">
              <div className="w-[13%] border border-solid border-black"></div>
              <h3 className=" font-poppins sm:text-xl text-lg text-nowrap leading-normal font-normal text-[#BD7D41]">
                Shopping Store
              </h3>
            </div>
            <div className="max-lg:flex max-lg:justify-center ">
              <h2 className="text-[#243040] font-poppins lg:text-[35px] md:text-2xl text-xl max-lg:text-center font-bold md:pt-6 sm:pt-4 pt-2 max-w-[436px]">
                Wooden Sofa Starts From ₹{" "}
                <span className="lg:text-[33px] md:text-3xl text-2xl">
                  1200.00
                </span>
              </h2>
            </div>

            <div className="max-lg:flex max-lg:justify-center ">
              <Button text="SHOP NOW" />
            </div>
          </div>

          <div className="lg:w-7/12 w-full px-3 relative justify-center flex max-lg:pt-5">
            <img src={bigsofa} alt="sofa" className="max-lg:ml-3" />
            <div className="max-h-[150px] lg:hidden bottom-[5%] max-lg:ml-3 bg-[#243040] w-full h-full max-lg:absolute  -z-10"></div>
          </div>
        </div>
      </div>
      <div className="xl:max-w-[741px] max-w-[650px]  xl:max-h-[270px] max-h-[200px] bg-[#243040] w-full h-full lg:absolute xl:bottom-[-20%] bottom-[10%] right-0 -z-10"></div>
    </div>
  );
};

export default Woodensec;
