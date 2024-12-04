import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { CategoryItems } from "../static/data";
import { MenuToggle } from "../context/menuToggle";
import Feed from "../components/Feed";

const Home = () => {

  const { toggle} = useContext(MenuToggle)

  return (
    <>
      <SideBar />
      <div className={` ${toggle === false ? 'lg:w-[calc(100%-240px)] w-[100%] lg:ml-60':'md:w-[calc(100%-96px)] ml-16 md:ml-24'} transition-all duration-300  h-[calc(100%-53px)] pt-14 bg-yt-black`}>
        <div className="flex flex-row px-3 py-3 overflow-x-scroll relative scrollbar-hide gap-1 lg:gap-4">
          {CategoryItems.map((item, i) => (
            <h2
              className="text-yt-white font-normal text-[8px] lg:text-sm py-1 px-2 rounded-md lg:py-2 lg:px-4 break-keep whitespace-nowrap bg-yt-light cursor-pointer lg:rounded-lg hover:bg-yt-light-1"
              key={i}
            >
              {item}
            </h2>
          ))}
        </div>
        <Feed/>
      </div>
    </>
  );
};

export default Home;
