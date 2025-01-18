import React, { useState } from "react";
import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import GeneralInput from "../components/GeneralInput";
import { FaLink } from "react-icons/fa6";

function Home() {
  const [linksArray, setLinksArray] = useState([]);
  const [activePlatform, setActivePlatform] = useState("GitHub");

  const addNewLink = () => {
    setLinksArray([
      ...linksArray,
      {
        id: Date.now(),
        name: "",
        open: false,
        linkIcon: "/icons/github-icon.svg",
        platformName: "GitHub",
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
                    <p className="text-[16px] text-lightGray">
                      {link.platformName}
                    </p>
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
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full pb-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/github-icon.svg",
                          "GitHub"
                        )
                      }
                    >
                      <img src="/icons/github-icon.svg" alt="github-icon" />
                      <p className="text-[16px] text-lightGray">GitHub</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/frontend-mentor-icon.svg",
                          "Frontend Mentor"
                        )
                      }
                    >
                      <img
                        src="/icons/frontend-mentor-icon.svg"
                        alt="frontend-mentor-icon"
                      />
                      <p className="text-[16px] text-lightGray">
                        Frontend Mentor
                      </p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/twitter-icon.svg",
                          "Twitter"
                        )
                      }
                    >
                      <img src="/icons/twitter-icon.svg" alt="twitter-icon" />
                      <p className="text-[16px] text-lightGray">Twitter</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/linkedin-icon.svg",
                          "Linkedin"
                        )
                      }
                    >
                      <img src="/icons/linkedin-icon.svg" alt="linkedin-icon" />
                      <p className="text-[16px] text-lightGray">Linkedin</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/youtube-icon.svg",
                          "Youtube"
                        )
                      }
                    >
                      <img src="/icons/youtube-icon.svg" alt="youtube-icon" />
                      <p className="text-[16px] text-lightGray">Youtube</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/facebook-icon.svg",
                          "Facebook"
                        )
                      }
                    >
                      <img src="/icons/facebook-icon.svg" alt="facebook-icon" />
                      <p className="text-[16px] text-lightGray">Facebook</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/instagram-icon.svg",
                          "Instagram"
                        )
                      }
                    >
                      <img
                        src="/icons/instagram-icon.svg"
                        alt="instagram-icon"
                      />
                      <p className="text-[16px] text-lightGray">Instagram</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/twitch-icon.svg",
                          "Twitch"
                        )
                      }
                    >
                      <img src="/icons/twitch-icon.svg" alt="twitch-icon" />
                      <p className="text-[16px] text-lightGray">Twitch</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/devto-icon.svg",
                          "Dev.to"
                        )
                      }
                    >
                      <img src="/icons/devto-icon.svg" alt="devto-icon" />
                      <p className="text-[16px] text-lightGray">Dev.to</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/codewars-icon.svg",
                          "Codewars"
                        )
                      }
                    >
                      <img src="/icons/codewars-icon.svg" alt="codewars-icon" />
                      <p className="text-[16px] text-lightGray">Codewars</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/codepen-icon.svg",
                          "Codepen"
                        )
                      }
                    >
                      <img src="/icons/codepen-icon.svg" alt="codepen-icon" />
                      <p className="text-[16px] text-lightGray">Codepen</p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/freecodecamp-icon.svg",
                          "Free Code Camp"
                        )
                      }
                    >
                      <img
                        src="/icons/freecodecamp-icon.svg"
                        alt="freecodecamp-icon"
                      />
                      <p className="text-[16px] text-lightGray">
                        Free Code Camp
                      </p>
                    </div>
                    <div
                      style={{ borderBottom: "solid 1px #d9d9d9" }}
                      className="w-full py-3 flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/gitlab-icon.svg",
                          "Gitlab"
                        )
                      }
                    >
                      <img src="/icons/gitlab-icon.svg" alt="gitlab-icon" />
                      <p className="text-[16px] text-lightGray">Gitlab</p>
                    </div>
                    <div
                      className="w-full pt-3 flex items-center gap-3"
                      onClick={() =>
                        handleSelectingPlatform(
                          index,
                          "/icons/stack-overflow-icon.svg",
                          "Stack Overflow"
                        )
                      }
                    >
                      <img
                        src="/icons/stack-overflow-icon.svg"
                        alt="stack-overflow-icon"
                      />
                      <p className="text-[16px] text-lightGray cursor-pointer">
                        Stack Overflow
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full flex flex-col items-start gap-y-1">
                <label className="text-[12px] text-blackText mb-1 block">
                  Link
                </label>
                <GeneralInput
                  type={"text"}
                  inputIcon={<FaLink color="#737373" />}
                  inputPlaceholder={"e.g. https://www.github.com/johnappleseed"}
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
