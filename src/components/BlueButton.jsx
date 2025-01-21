import React from "react";

function BlueButton({ btnText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full outline-none rounded-md flex items-center justify-center py-[11px] text-[#fff] text-[16px] bg-blueBtn"
    >
      {btnText}
    </button>
  );
}

export default BlueButton;
