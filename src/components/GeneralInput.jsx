import React from "react";

function GeneralInput({ inputIcon, type, inputPlaceholder }) {
  return (
    <div className="relative w-full">
      <div className="absolute top-4 left-4">{inputIcon}</div>
      <input
        type={type}
        placeholder={inputPlaceholder}
        style={{ border: "solid 1px #d9d9d9" }}
        className="w-full py-3 pr-4 pl-[44px] rounded-lg text-[16px] text-blackText focus:shadow-lg focus:border-[solid 1px #633cff] focus:bg-[#fff]"
      ></input>
    </div>
  );
}

export default GeneralInput;
