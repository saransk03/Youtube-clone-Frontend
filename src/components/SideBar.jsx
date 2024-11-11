import React, { useContext, useState } from "react";
import { SideBarItems, SideBarShort } from "../static/data";
import { MenuToggle } from "../context/menuToggle";

const SideBar = () => {
  const [active, setActive] = useState("Home");
  const { toggle } = useContext(MenuToggle);

  return (
    <>
      {toggle === false ? (
        <div className="w-60 h-[calc(100vh-50px)] bg-yt-black text-yt-white fixed mt-14 top-0 left-0 p-3 scrollbar-hide overflow-scroll  transition-all duration-300">
          <div className="mb-4">
            {SideBarItems.Top.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-start items-center ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  } rounded-md p-2`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <p className="font-medium p-2 text-sm">{item.name}</p>
                </div>
              );
            })}
          </div>
          <hr className="text-yt-light-black" />
          <div className="mb-4">
            {SideBarItems.Middle.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-start items-center ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  } rounded-md p-2`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <p className="font-medium p-2 text-sm">{item.name}</p>
                </div>
              );
            })}
          </div>
          <hr className="text-yt-light-black" />
          <p className="text-yt-white font-medium text-sm text-start pt-4 px-3">
            Explore
          </p>
          <div className="mb-4">
            {SideBarItems.Explore.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-start items-center ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  } rounded-md p-2`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <p className="font-medium p-2 text-sm">{item.name}</p>
                </div>
              );
            })}
          </div>
          <hr className="text-yt-light-black" />
          <div className="p-4 text-yt-gray">
            <p className="font-[400] text-xs hover:text-yt-white duration-300 transition-all cursor-context-menu">
              Designed by Sarankumar
            </p>
          </div>
        </div>
      ) : (
        <div className="w-32 h-[calc(100vh-50px)] bg-yt-black text-yt-white fixed mt-14 top-0 left-0 p-3 scrollbar-hide overflow-scroll transition-all duration-300">
          <div>
            {SideBarShort.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col justify-start items-center ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  } rounded-md p-2 gap-2 mb-6`}
                  onClick={() => setActive(item.name)}
                >
                  <span>{item.icon}</span>
                  <p className="font-medium text-[10px]">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
