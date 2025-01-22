import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import { TbPhoto } from "react-icons/tb";
import GeneralInput from "../components/GeneralInput";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const saveFirstNameValue = () => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
  };

  const saveLastNameValue = () => {
    localStorage.setItem("lastName", JSON.stringify(lastName));
  };

  useEffect(() => {
    const getfirstName = localStorage.getItem("firstName");
    const getLastName = localStorage.getItem("lastName");
    if (getfirstName) {
      setFirstName(JSON.parse(getfirstName));
    }

    if (getLastName) {
      setLastName(JSON.parse(getLastName));
    }
  }, []);

  const [backgroundImage, setBackgroundImage] = useState(null);

  const triggerFileInput = () => {
    document.getElementById("avatar").click();
  };

  const validateImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      if (img.width <= 1024 && img.height <= 1024) {
        console.log("Valid image dimensions!");
        setBackgroundImage(objectUrl);
      } else {
        console.error("Invalid image dimensions!");
        alert("Image must be 1024x1024px or smaller.");
        event.target.value = "";
      }

      URL.revokeObjectURL(objectUrl);
    };

    img.src = objectUrl;
  };

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
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpg, image/jpeg"
            className="hidden"
            onChange={(event) => validateImage(event)}
          />
          <div className="w-full p-5 rounded-xl bg-[#fafafa] mb-6">
            <p className="text-[16px] text-lightGray leading-normal mb-4">
              Profile Picture
            </p>
            <div
              className="w-[193px] h-[193px] rounded-xl flex flex-col items-center justify-center cursor-pointer mb-6"
              onClick={triggerFileInput}
              style={{
                backgroundImage: backgroundImage
                  ? `url(${backgroundImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: backgroundImage ? "transparent" : "#efebff",
              }}
            >
              {!backgroundImage && (
                <div className="w-full flex flex-col items-center justify-center gap-y-2">
                  <TbPhoto className="w-[32.5px] h-[32.5px]" color="#633cff" />
                  <p className="text-[16px] text-blueBtn leading-normal font-bold">
                    + Upload Image
                  </p>
                </div>
              )}
            </div>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpg, image/jpeg"
              className="hidden"
              onChange={validateImage}
            />
            <p className="text-[14px] text-lightGray leading-normal">
              Image must be below 1024x1024px. Use PNG, JPG or JPEG format.
            </p>
          </div>

          <div className="w-full p-5 rounded-xl bg-[#fafafa] flex flex-col items-start gap-y-3">
            <div className="w-full flex flex-col items-start gap-y-1">
              <label className="text-[12px] text-blackText">First name*</label>
              <GeneralInput
                type={"text"}
                inputPlaceholder={"Enter your first name"}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="w-full flex flex-col items-start gap-y-1">
              <label className="text-[12px] text-blackText">Last name*</label>
              <GeneralInput
                type={"text"}
                inputPlaceholder={"Enter your last name"}
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
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
          <BlueButton
            btnText={"Save"}
            onClick={() => {
              saveFirstNameValue(), saveLastNameValue();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
