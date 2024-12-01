import React, { useContext, useState } from "react";
import { SideBarItems, SideBarShort } from "../static/data";
import { MenuToggle } from "../context/menuToggle";
import { Context } from "../context/ContextApi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = useState("Home");
  const { toggle } = useContext(MenuToggle);
  const {selectedCategory,setSelectedCategory,setMobileMenu,mobileMenu} = useContext(Context)

  const handleSelectedCategoryData = () =>{
    setSelectedCategory(item)
  }

  return (
    <>
      {toggle === false ? (
        <div className="w-60 h-[calc(100vh-50px)] bg-yt-black text-yt-white fixed mt-14 top-0 left-0 px-3 py-4  yt-scrollbar overflow-scroll  transition-all duration-300">
          <div className="mb-4">
            {SideBarItems.Top.map((item, index) => {
              return (
                <Link to={"/"}>
                  <div
                    key={index}
                    className={`flex justify-start items-center ${
                      item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                    } rounded-[10px] px-2 py-1.5`}
                    onClick={() => setActive(item.name)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <p className="font-medium cursor-pointer p-2 text-sm">{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <hr className="text-yt-light-black" />
          <div className="mb-4 pt-3">
            {SideBarItems.Middle.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-start items-center ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  } rounded-[10px] px-2 py-1.5`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <p className="font-medium p-2 cursor-pointer text-sm">{item.name}</p>
                </div>
              );
            })}
          </div>
          <hr className="text-yt-light-black" />
          <p className="text-yt-white font-medium text-sm text-start py-4 px-3">
            Explore
          </p>
          <div className="mb-4">
            {SideBarItems.Explore.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-start items-center ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  } rounded-[10px] px-2 py-1.5`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <p className="font-medium cursor-pointer p-2 text-sm">{item.name}</p>
                </div>
              );
            })}
          </div>
          <hr className="text-yt-light-black" />
          <div className="p-4 text-yt-gray">
            <p className="font-[400] text-xs hover:text-yt-white duration-300 transition-all cursor-context-menu">
              Cloned by Sarankumar
            </p>
            <p className="font-[400] text-xs hover:text-yt-white duration-300 transition-all py-3 cursor-context-menu">
            &#169; Copyrights 2024 All rights reserved
            </p>
          </div>
        </div>
      ) : (
        <div className="w-24 h-[calc(100vh-50px)] bg-yt-black text-yt-white fixed mt-14 top-0 left-0 px-3 py-7 scrollbar-hide overflow-scroll transition-all duration-300">
          <div>
            {SideBarShort.map((item, index) => {
              return (
               <Link to={"/"}>
                  <div
                    key={index}
                    className={`flex flex-col justify-start items-center ${
                      item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                    } rounded-[9px] p-3 gap-2 mb-6`}
                    onClick={() => setActive(item.name)}
                  >
                    <span>{item.icon}</span>
                    <p className="font-[400] text-[10px]">{item.name}</p>
                  </div>
               </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
