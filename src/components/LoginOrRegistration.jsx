import React from "react";
import GeneralInput from "./GeneralInput";
import BlueButton from "./BlueButton";
import { Link } from "react-router-dom";

function LoginOrRegistration({
  pageName,
  description,
  inputs,
  btnText,
  accountOrNot,
  createOrLogin,
  linkPath,
}) {
  return (
    <>
      <img
        className="mb-[64px]"
        src="/images/logo-wide.png"
        alt="logo and company name"
      />
      <h2 className="text-[24px] font-bold text-blackText mb-2">{pageName}</h2>
      <p className="text-[16px] text-lightGray leading-normal mb-[40px]">
        {description}
      </p>
      <form className="w-full">
        {inputs.map((input, index) => (
          <div key={index} className="mb-6">
            <label className="text-[14px] text-blackText mb-1 block">
              {input.label}
            </label>
            <GeneralInput
              type={input.type}
              inputIcon={input.icon}
              inputPlaceholder={input.placeholder}
            />
          </div>
        ))}
      </form>
      <BlueButton btnText={btnText} />
      <p className="text-center text-[16px] text-lightGray leading-normal mt-6 mx-auto">
        {accountOrNot}
      </p>
      <Link
        to={linkPath}
        className="text-center text-[16px] text-blueBtn leading-normal mx-auto"
      >
        {createOrLogin}
      </Link>
    </>
  );
}

export default LoginOrRegistration;
