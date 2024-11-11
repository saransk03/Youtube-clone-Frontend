import React, { useContext } from "react";
import { MdMic, MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import logo from "../assets/yt-logo-white.png";
import { MenuToggle } from "../context/menuToggle";

const Navbar = () => {

  const {toggleFunction} = useContext(MenuToggle)

  return (
    <>
      <div className="w-full h-16 fixed bg-yt-black pl-4 pr-5 py-2 flex justify-between items-center z-10">
        <div className="flex justify-between items-center">
          <div className="text-yt-white  hover:bg-yt-light-black rounded-full p-2 cursor-pointer" onClick={toggleFunction}>
            <HiOutlineBars3 size={28} />
          </div>
          <div className="">
            <img src={logo} alt="yt-logo" className=" w-32" />
          </div>
        </div>

        <div className="h-10 flex justify-center items-center">
          <div className="w-[623px] bg-yt-black flex border justify-between border-yt-light-black items-center rounded-3xl h-12">
            <input
              type="text"
              placeholder="Search"
              className="bg-yt-black text-yt-white text-[18px] text-start font-[400] placeholder:text-yt-gray focus:outline-none ml-4 pl-1 py-2 h-5"
            />
            <button className="bg-yt-light-black rounded-r-3xl flex border-l-2 border-yt-light-black justify-center items-center px-3 py-0.5 w-[70px] h-12">
              <HiMagnifyingGlass
                size={26}
                className="text-yt-white inline-block text-end font-thin"
              />
            </button>
          </div>
          <div className="text-yt-white bg-yt-light w-12 h-12 items-center flex justify-center rounded-full ml-4 hover:bg-yt-light-black cursor-pointer">
            <MdMic className="text-center " size={28} />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-row items-center">
            <div className="mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <BiVideoPlus
                size={25}
                className="text-yt-white text-center font-thin"
              />
            </div>
            <div className="mr-2 p-2 w-10 hover:bg-yt-light-black rounded-full cursor-pointer">
              <FaRegBell
                size={22}
                className="text-yt-white text-center font-thin"
              />
            </div>
            <button className="bg-yt-transparent border border-yt-white py-1 px-2 rounded-full text-yt-white text-[14px] font-[700] flex items-center justify-center">
              <MdOutlineAccountCircle size={24} className="w-8" />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
