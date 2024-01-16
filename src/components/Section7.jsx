import React from 'react'
import Button from './Button';

const Section7 = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 lg:pb-[109px] overflow-x-clip lg:pt-[130px] py-10">
      <div className="flex-row flex flex-wrap">
        <div
          className="lg:w-1/2 w-full px-3 mb-10 lg:mb-0"
          data-aos="flip-right"
          data-aos-duration="3000"
        >
          <div className="bg-[url(./assests/images/bg1.webp)] bg-size bg-center bg-no-repeat lg:pl-[107px] pt-8 pb-[71px] pl-8">
            <p className="font-poppins text-xl leading-normal font-normal  md:after:w-[95px] after:h-[2px] after:bg-black after:absolute relative after:left-[-100px] lg:after:left-[-20%] after:top-[14px] mb-5">
              Festival Offer
            </p>
            <p className="text-[35px] font-poppins font-bold text-[#BD7D41] leading-normal mb-[15px]">
              Upto 40% Off
            </p>
            <p className=" font-poppins text-lg font-normal leading-normal text-[#000000B2] max-w-[262px] mb-[38px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <Button text="ADD TO CART" name="!py-2.5 !px-3 !mt-0" />
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full px-3"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="bg-[url(./assests/images/bg2.webp)] bg-size bg-center bg-no-repeat lg:pl-[107px] pt-8 pb-[71px] pl-8">
            <p className="font-poppins text-xl leading-normal font-normal  md:after:w-[95px] after:h-[2px] after:bg-black after:absolute relative after:left-[-100px] lg:after:left-[-20%] after:top-[14px] mb-5">
              Festival Offer
            </p>
            <p className="text-[35px] font-poppins font-bold text-[#BD7D41] leading-normal mb-[15px]">
              Upto 40% Off
            </p>
            <p className=" font-poppins text-lg font-normal leading-normal text-[#000000B2] max-w-[262px] mb-[38px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <Button text="ADD TO CART" name="!py-2.5 !px-3 !mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7
