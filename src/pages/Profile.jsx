import React from "react";
import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import { TbPhoto } from "react-icons/tb";
import GeneralInput from "../components/GeneralInput";

function Profile() {
  return (
    <div>
      <Header />
      <div className="w-full px-4 py-4">
        <div
          style={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
          className="w-full bg-white p-6 flex flex-col items-start justify-start"
        >
          <h1 className="text-[24px] font-bold text-blackText leading-normal mb-2">
            Profile Details
          </h1>
          <p className="text-[16px] text-lightGray leading-normal text-left mb-[40px]">
            Add your details to create a personal touch to your profile.
          </p>
          <div className="w-full p-5 rounded-xl bg-[#fafafa] mb-6">
            <p className="text-[16px] text-lightGray leading-normal mb-4">
              Profile Picture
            </p>
            <div className="w-[193px] h-[193px] rounded-xl flex flex-col items-center justify-center bg-[#efebff] cursor-pointer mb-6">
              <div className="w-full flex flex-col items-center justify-center gap-y-2">
                <TbPhoto className="w-[32.5px] h-[32.5px]" color="#633cff" />
                <p className="text-[16px] text-blueBtn leading-normal font-bold">
                  + Upload Image
                </p>
              </div>
            </div>
            <p className="text-[14px] text-lightGray leading-normal">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>

          <div className="w-full p-5 rounded-xl bg-[#fafafa] flex flex-col items-start gap-y-3">
            <div className="w-full flex flex-col items-start gap-y-1">
              <label className="text-[12px] text-blackText">First name*</label>
              <GeneralInput
                type={"text"}
                inputPlaceholder={"Enter your first name"}
              />
            </div>
            <div className="w-full flex flex-col items-start gap-y-1">
              <label className="text-[12px] text-blackText">Last name*</label>
              <GeneralInput
                type={"text"}
                inputPlaceholder={"Enter your last name"}
              />
            </div>
            <div className="w-full flex flex-col items-start gap-y-1">
              <label className="text-[12px] text-blackText">Email</label>
              <GeneralInput
                type={"text"}
                inputPlaceholder={"johnDoe@example.com"}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            borderTop: "1px solid #737373",
          }}
          className="w-full bg-white p-4"
        >
          <BlueButton btnText={"Save"} onClick={() => saveLinks()} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
