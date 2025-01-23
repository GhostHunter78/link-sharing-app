import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Preview() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [linksArray, setLinksArray] = useState([]);

  const platformsArr = [
    {
      name: "GitHub",
      icon: "/icons/github-icon-white.svg",
      bgColor: "#1a1a1a",
    },
    {
      name: "Frontend Mentor",
      icon: "/icons/frontend-mentor-icon-white.svg",
      bgColor: "#ffffff",
    },
    {
      name: "Twitter",
      icon: "/icons/twitter-icon-white.svg",
      bgColor: "#43b7e9",
    },
    {
      name: "Linkedin",
      icon: "/icons/linkedin-icon-white.svg",
      bgColor: "#2d68ff",
    },
    {
      name: "Youtube",
      icon: "/icons/youtube-icon-white.svg",
      bgColor: "#ee3939",
    },
    {
      name: "Facebook",
      icon: "/icons/facebook-icon-white.svg",
      bgColor: "#2442ac",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram-icon-white.svg",
      bgColor: "#b040e3",
    },
    {
      name: "Twitch",
      icon: "/icons/twitch-icon-white.svg",
      bgColor: "#ee3fc8",
    },
    { name: "Dev.to", icon: "/icons/devto-icon-white.svg", bgColor: "#333333" },
    {
      name: "Codewars",
      icon: "/icons/codewars-icon-white.svg",
      bgColor: "#8a1a50",
    },
    {
      name: "Codepen",
      icon: "/icons/codepen-icon-white.svg",
      bgColor: "#2a2929",
    },
    {
      name: "Free Code Camp",
      icon: "/icons/freecodecamp-icon-white.svg",
      bgColor: "#302267",
    },
    {
      name: "Gitlab",
      icon: "/icons/gitlab-icon-white.svg",
      bgColor: "#eb4925",
    },
    {
      name: "Stack Overflow",
      icon: "/icons/stack-overflow-icon-white.svg",
      bgColor: "#ec7100",
    },
  ];

  useEffect(() => {
    const getfirstName = localStorage.getItem("firstName");
    const getLastName = localStorage.getItem("lastName");
    const getUploadedAvatar = localStorage.getItem("uploadedAvatar");
    const savedLinks = localStorage.getItem("links");

    if (getfirstName) {
      setFirstName(JSON.parse(getfirstName));
    }

    if (getLastName) {
      setLastName(JSON.parse(getLastName));
    }

    if (getUploadedAvatar) {
      setBackgroundImage(JSON.parse(getUploadedAvatar));
    }

    if (savedLinks) {
      setLinksArray(JSON.parse(savedLinks));
    }
  }, []);

  console.log(linksArray);

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
      <div className="w-full flex flex-col items-center justify-center p-4">
        {linksArray.map((link) => {
          const platformDetails = platformsArr.find(
            (platform) => platform.name === link.platformName
          );

          const bgColor = platformDetails ? platformDetails.bgColor : "#d9d9d9";
          const icon = platformDetails
            ? platformDetails.icon
            : "/icons/link-icon-white";

          return (
            <a
              href={link.platformPath}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
              className="relative w-[270px] mb-4"
            >
              <div
                className="relative flex items-center justify-start rounded-lg overflow-hidden"
                style={{
                  backgroundColor: bgColor,
                  border:
                    link.platformName === "Frontend Mentor"
                      ? "solid 1px #d9d9d9"
                      : "none",
                }}
              >
                <img
                  src={icon}
                  alt={`${link.platformName} icon`}
                  className="absolute left-4 w-6 h-6"
                />
                <button
                  className="w-[240px] py-4 pr-[40px] pl-[64px] rounded-lg text-[16px] text-left text-white font-medium"
                  style={{
                    color:
                      link.platformName === "Frontend Mentor"
                        ? "#333333"
                        : "white",
                  }}
                >
                  {link.platformName}
                </button>
                <FiArrowRight
                  className="absolute right-4"
                  size={20}
                  style={{
                    color:
                      link.platformName === "Frontend Mentor"
                        ? "#737373"
                        : "white",
                  }}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Preview;
