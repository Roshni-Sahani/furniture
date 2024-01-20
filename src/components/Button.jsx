import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.roshni}
        className={`${props.name} bg-[#BD7D41] px-[48px] py-[19px] text-white font-poppins font-semibold text-xl sm:py-[19px] sm:px-12  sm:text-xl z-[1] before:z-[-1] hover:text-[#BD7D41] border before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:top-[-100%] before:bg-transparent before:hover:top-[0] before:hover:w-full before:left-0 before:w-full before:h-full border-none outline outline-[#BD7D41] relative overflow-hidden inline-block mt-[53px]`}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button
