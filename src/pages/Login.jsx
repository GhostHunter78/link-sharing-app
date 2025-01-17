import React from "react";
import LoginOrRegistration from "../components/LoginOrRegistration";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidLock } from "react-icons/bi";

function Login() {
  const inputs = [
    {
      label: "Email address",
      type: "email",
      icon: <HiOutlineMailOpen color="#737373" />,
      placeholder: "e.g. alex@email.com",
    },
    {
      label: "Password",
      type: "password",
      icon: <BiSolidLock color="#737373" />,
      placeholder: "Enter your password",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-start p-8 mb-[200px]">
        <LoginOrRegistration
          pageName="Login"
          description="Add your details below to get back into the app"
          inputs={inputs}
          btnText={"Login"}
          accountOrNot={"Don't have an account?"}
          createOrLogin={"Create account"}
          linkPath={"/registration"}
        />
      </div>
    </>
  );
}

export default Login;
