import React, { useState } from "react";
import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import GeneralInput from "../components/GeneralInput";
import { FaLink } from "react-icons/fa6";

function Home() {
  const [linksArray, setLinksArray] = useState([]);

  const platforms = [
    { name: "GitHub", icon: "/icons/github-icon.svg" },
    { name: "Frontend Mentor", icon: "/icons/frontend-mentor-icon.svg" },
    { name: "Twitter", icon: "/icons/twitter-icon.svg" },
    { name: "Linkedin", icon: "/icons/linkedin-icon.svg" },
    { name: "Youtube", icon: "/icons/youtube-icon.svg" },
    { name: "Facebook", icon: "/icons/facebook-icon.svg" },
    { name: "Instagram", icon: "/icons/instagram-icon.svg" },
    { name: "Twitch", icon: "/icons/twitch-icon.svg" },
    { name: "Dev.to", icon: "/icons/devto-icon.svg" },
    { name: "Codewars", icon: "/icons/codewars-icon.svg" },
    { name: "Codepen", icon: "/icons/codepen-icon.svg" },
    { name: "Free Code Camp", icon: "/icons/freecodecamp-icon.svg" },
    { name: "Gitlab", icon: "/icons/gitlab-icon.svg" },
    { name: "Stack Overflow", icon: "/icons/stack-overflow-icon.svg" },
  ];

  const addNewLink = () => {
    setLinksArray([
      ...linksArray,
      {
        id: Date.now(),
        name: "",
        open: false,
        linkIcon: "/icons/github-icon.svg",
        platformName: "GitHub",
        platformPath: "",
      },
    ]);
  };

  const toggleMenu = (index) => {
    const updatedLinks = linksArray.map((link, i) =>
      i === index ? { ...link, open: !link.open } : link
    );
    setLinksArray(updatedLinks);
  };

  const handleSelectingPlatform = (index, iconPath, platformTitle) => {
    const updatedLinks = linksArray.map((link, i) =>
      i === index
        ? { ...link, linkIcon: iconPath, platformName: platformTitle }
        : link
    );
    setLinksArray(updatedLinks);
  };

  const handleSelectingPlatformLink = (index, platformLink) => {
    const updatedLinks = linksArray.map((link, i) =>
      i === index ? { ...link, platformPath: platformLink } : link
    );
    setLinksArray(updatedLinks);
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
          className="w-full bg-white p-6 flex flex-col items-center justify-center"
        >
          <h1 className="text-[24px] font-bold text-blackText leading-normal mb-2">
            Customize your links
          </h1>
          <p className="text-[16px] text-lightGray leading-normal text-center mb-[40px]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button
            onClick={addNewLink}
            className="w-full py-[11px] bg-white flex flex-col items-center justify-center text-blueBtn rounded-lg border border-solid-[1px] border-blueBtn font-bold mb-6"
          >
            + Add new link
          </button>

          {linksArray.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center gap-y-6 py-[45px] px-5 bg-[#fafafa] rounded-xl mb-[1px]">
              <img src="/images/empty-links-mobile.jpg" alt="empty links" />
              <h1 className="text-[24px] font-bold text-blackText leading-normal">
                Let's get you started
              </h1>
              <p className="text-[16px] text-lightGray leading-normal text-center">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          )}

          {linksArray.map((link, index) => (
            <div
              key={link.id}
              className="w-full flex flex-col items-start justify-start gap-y-3 p-5 bg-[#fafafa] rounded-lg mb-2"
            >
              <div className="w-full flex items-center justify-between">
                <p className="text-[16px] text-lightGray">
                  - <strong>Link #{index + 1}</strong>
                </p>
                <p
                  onClick={() =>
                    setLinksArray(linksArray.filter((_, i) => i !== index))
                  }
                  className="text-[16px] text-lightGray cursor-pointer"
                >
                  Remove
                </p>
              </div>
              <div className="w-full flex flex-col items-start gap-y-1">
                <label className="text-[12px] text-blackText mb-1 block">
                  Platform
                </label>
                <div
                  style={{ border: "solid 1px #d9d9d9" }}
                  className="w-full py-3 px-4 flex items-center justify-between bg-white rounded-lg cursor-pointer"
                  onClick={() => toggleMenu(index)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={link.linkIcon}
                      alt={`${link.platformName} icon`}
                    />
                    <p className="text-[16px] ">{link.platformName}</p>
                  </div>
                  {link.open ? (
                    <SlArrowUp color="blue" />
                  ) : (
                    <SlArrowDown color="blue" />
                  )}
                </div>
                {link.open && (
                  <div
                    style={{ border: "solid 1px #d9d9d9" }}
                    className={`w-full px-4 py-3 rounded-lg bg-white mt-[5px] menu-container ${
                      link.open ? "open" : ""
                    }`}
                  >
                    {platforms.map((platform, subIndex) => (
                      <div
                        key={subIndex}
                        className="dropdown-item w-full flex items-center gap-3 cursor-pointer"
                        style={{
                          borderBottom:
                            subIndex !== platforms.length - 1
                              ? "solid 1px #d9d9d9"
                              : "none",
                          paddingTop: subIndex !== 0 ? "12px" : "0",
                          paddingBottom:
                            subIndex !== platforms.length - 1 ? "12px" : "0",
                        }}
                        onClick={() =>
                          handleSelectingPlatform(
                            index,
                            platform.icon,
                            platform.name
                          )
                        }
                      >
                        <img
                          src={platform.icon}
                          alt={`${platform.name} icon`}
                        />
                        <p
                          className="text-[16px]"
                          style={{
                            color:
                              link.platformName === platform.name
                                ? "#633cff"
                                : "#737373",
                          }}
                        >
                          {platform.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full flex flex-col items-start gap-y-1">
                <label className="text-[12px] text-blackText mb-1 block">
                  Link
                </label>
                <GeneralInput
                  type={"text"}
                  value={link.platformPath}
                  inputIcon={<FaLink color="#737373" />}
                  inputPlaceholder={"e.g. https://www.github.com/johnappleseed"}
                  onChange={(event) =>
                    handleSelectingPlatformLink(index, event.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            borderTop: "1px solid #737373",
          }}
          className="w-full bg-white p-4"
        >
          <BlueButton btnText={"Save"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
