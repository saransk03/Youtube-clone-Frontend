import React, { useContext, useEffect, useState } from "react";
import { MdMic, MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import logo from "../assets/yt-logo-white.png";
import { MenuToggle } from "../context/menuToggle";
import { Context } from "../context/ContextApi";
import { Link, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const { toggleFunction } = useContext(MenuToggle);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleClearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <>
      <div className="w-full h-16 fixed bg-yt-black pl-4 pr-5 py-2 flex justify-between items-center z-10">
        <div className="flex justify-between items-center">
          <div
            className="text-yt-white  hover:bg-yt-light-black rounded-full md:p-2 cursor-pointer"
            onClick={toggleFunction}
          >
            <HiOutlineBars3 className="text-[20px] md:text-[28px]" />
          </div>
          <Link to={"/"}>
            <img src={logo} alt="yt-logo" className="hidden md:block w-32" />
          </Link>
        </div>

        <div className="h-10 flex justify-center items-center">
          <div className="w-[200px] lg:w-[623px] bg-yt-black flex border justify-between border-yt-light-black items-center rounded-3xl h-8 lg:h-11 relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-yt-transparent text-yt-white text-[12px] lg:text-[16px] text-start w-full font-[400] placeholder:text-yt-gray focus:outline-none ml-4 pl-1 py-2"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onKeyUp={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            {searchQuery && (
              <button className="absolute right-12 md:right-20 top-1/2 transform -translate-y-1/2"
              onClick={handleClearSearchQuery}>
                <CgClose
                  className="text-yt-white text-[16px] lg:text-2xl"
                />
              </button>
            )}
            <button className="bg-yt-light-black rounded-r-3xl flex border-l-2 border-yt-light-black justify-center items-center px-3 py-0.5 w-[50px] md:w-[70px] h-8 lg:h-11"
            onClick={handleSearch}
            >
              <HiMagnifyingGlass
                className="text-yt-white text-[16px] md:text-[24px] inline-block text-end font-thin"
              />
            </button>
          </div>
          <div className="text-yt-white bg-yt-light w-8 h-8  md:w-12 md:h-12 items-center flex justify-center rounded-full ml-2 md:ml-4 hover:bg-yt-light-black cursor-pointer">
            <MdMic className="text-center text-[20px] md:text-[28px]" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-row items-center">
            <div className="hidden md:block mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <BiVideoPlus
                size={25}
                className="text-yt-white text-center font-thin"
              />
            </div>
            <div className="hidden md:block mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <FaRegBell
                size={22}
                className="text-yt-white text-center font-thin"
              />
            </div>
            <button className="bg-yt-transparent md:border md:border-yt-white py-1 md:px-2 rounded-full text-yt-white text-[0px] md:text-[14px] font-[700] flex items-center justify-center">
              <MdOutlineAccountCircle size={24} className="w-6" />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
