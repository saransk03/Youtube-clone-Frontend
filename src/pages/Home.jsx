import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { CategoryItems } from "../static/data";
import { MenuToggle } from "../context/menuToggle";

const Home = () => {

  const { toggle} = useContext(MenuToggle)

  return (
    <>
      <SideBar />
      <div className={` ${toggle === false ? 'w-[calc(100%-240px)]  ml-60':'w-[calc(100%-128px)]  ml-32'} transition-all duration-300  h-[calc(100%-53px)] pt-20 bg-yt-black`}>
        <div className="flex flex-row px-3 overflow-x-scroll relative scrollbar-hide gap-4">
          {CategoryItems.map((item, i) => (
            <h2
              className="text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light cursor-pointer rounded-lg hover:bg-yt-light-1"
              key={i}
            >
              {item}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
