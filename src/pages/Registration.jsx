import React from "react";
import LoginOrRegistration from "../components/LoginOrRegistration";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidLock } from "react-icons/bi";

function Registration() {
  const inputs = [
    {
      label: "Email address",
      type: "email",
      icon: <HiOutlineMailOpen color="#737373" />,
      placeholder: "e.g. alex@email.com",
    },
    {
      label: "Create password",
      type: "password",
      icon: <BiSolidLock color="#737373" />,
      placeholder: "At least .8 characters",
    },
    {
      label: "Confirm password",
      type: "password",
      icon: <BiSolidLock color="#737373" />,
      placeholder: "At least .8 characters",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-start p-8 mb-[200px]">
        <LoginOrRegistration
          pageName="Create account"
          description="Let's get you started sharing your links!"
          inputs={inputs}
          btnText={"Create new account"}
          accountOrNot={"Already have an account?"}
          createOrLogin={"Login"}
          linkPath={"/login"}
        />
      </div>
    </>
  );
}

export default Registration;
