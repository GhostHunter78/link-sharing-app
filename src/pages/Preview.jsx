import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Preview() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const getfirstName = localStorage.getItem("firstName");
    const getLastName = localStorage.getItem("lastName");
    const getUploadedAvatar = localStorage.getItem("uploadedAvatar");
    if (getfirstName) {
      setFirstName(JSON.parse(getfirstName));
    }

    if (getLastName) {
      setLastName(JSON.parse(getLastName));
    }

    if (getUploadedAvatar) {
      setBackgroundImage(JSON.parse(getUploadedAvatar));
    }
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div className="w-full flex items-center justify-between mb-[70px]">
        <Link to={"/home"}>
          <button
            style={{ border: "solid 1px #633cff" }}
            className="flex items-center justify-center py-[11px] px-6 text-[16px] text-blueBtn font-semibold bg-[#ffffff] rounded-lg"
          >
            Back to Editor
          </button>
        </Link>
        <button
          style={{ border: "solid 1px #633cff" }}
          className="flex items-center justify-center py-[11px] px-6 text-[16px] text-[white] font-semibold bg-blueBtn rounded-lg"
        >
          Share Link
        </button>
      </div>
      <div
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : "url('/images/user-photo.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: backgroundImage ? "transparent" : "#efebff",
          border: "solid 4px #633cff",
        }}
        className="w-[130px] h-[130px] rounded-[50%] mb-[25px]"
      ></div>
      <h1 className="text-[32px] text-blackText leading-normal font-bold capitalize mb-2">
        {firstName} {lastName}
      </h1>
      <p className="text-16px] text-lightGray leading-normal mb-[55px]">
        email
      </p>
    </div>
  );
}

export default Preview;
