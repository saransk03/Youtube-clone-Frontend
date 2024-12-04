import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/ContextApi";
import fetchApiForYoutubeData from "../utils/api";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { formatPublishTime, formatViewCount } from "../utils/helper";
import { MenuToggle } from "../context/menuToggle";

const SearchVideo = () => {
  const { searchQuery } = useParams();
  const { toggle} = useContext(MenuToggle)
  const [searchResult, setSearchResult] = useState([]);
  const { loading, setLoading } = useContext(Context);

 
  const showSearchResult = async () => {
    setLoading(true);
    try {
      const resData = await fetchApiForYoutubeData("search", {
        part: "snippet",
        regionCode: "IN",
        q: searchQuery,
        type: "video",
        maxResults: 20,
      });
      // console.log("data -->", resData.items);
      const videoIds = resData.items.map((item) => item.id.videoId).join(",");
      const videoDetailData = await fetchApiForYoutubeData("videos", {
        part: "snippet,contentDetails,statistics",
        id: videoIds,
      });
      setSearchResult(videoDetailData.items);
      
    } catch (error) {
      console.error("Error from search", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showSearchResult();
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      <div className=" flex flex-row h-screen bg-white text-gray-800 bg-yt-black">
        <SideBar />
        <div className={` ${toggle === false ? 'lg:w-[calc(100%-240px)] w-[100%] lg:ml-60':'md:w-[calc(100%-96px)] ml-16 md:ml-24'} transition-all duration-300 grow overflow-y-auto py-2 px-4 md:p-6 mt-16 md:mt-24`}>
          {searchResult?.map((result,index) => (
            <div key={index} className="flex flex-col mb-3">
              <Link to={`/video/${result.snippet.categoryId}/${result.id}`}>
                <div className="flex md:flex-row flex-col justify-start items-start mb-2">
                    <img
                      src={result.snippet.thumbnails.high.url}
                      alt="video thumbnail"
                      className={`w-[600px] ${toggle === false? "h-[170px]":"h-[135px]"} md:h-[280px] rounded-md md:rounded-[12px]  object-cover`}
                    />
                   

                  <div className="flex flex-col justify-start mt-2 lg:mt-0 ml-2 md:ml-6 items-start md:w-2/3">
                    
                      <p className="text-yt-white text-[12px] md:text-lg font-bold">
                        {result.snippet.title}
                      </p>
                      <p className="text-yt-gray text-[8px] md:text-sm">
                        {formatViewCount(result.statistics.viewCount)} views .{" "}
                        {formatPublishTime(result.snippet.publishedAt)}
                      </p>
                    
                    <div className="flex justify-center md:mt-2">
                      {/* <img
                        src={channelData?.snippet?.thumbnails?.medium?.url}
                        alt="channel-logo"
                        className="w-10 h-10 rounded-[50%]"
                      /> */}
                      <p className="text-yt-gray text-[8px] md:text-sm py-0.5">
                        {result.snippet.channelTitle}
                      </p>
                    </div>
                    <p className="text-yt-gray text-[8px] md:text-xs">{result.snippet.description.slice(0,100)}...</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchVideo;
