import React, { useContext, useEffect, useState } from "react";
import fetchApiForYoutubeData from "../utils/api";
import { Link } from "react-router-dom";
import { formatDuration, formatPublishTime, formatViewCount } from "../utils/helper";
import { MenuToggle } from "../context/menuToggle";

const VideoList = ({ video }) => {
  const [channelData, setChannelData] = useState();
  const { toggle } = useContext(MenuToggle);


  const fetchChannelData = async () => {
    const data = await fetchApiForYoutubeData("channels", {
      part: "snippet,contentDetails,statistics",
      id: video.snippet.channelId,
    });
    // console.log("data is --->", data.items);
    setChannelData(data.items[0]);
  };

  useEffect(() => {
    fetchChannelData();
  }, [video]);

  return (
    <>
     <Link to={`/video/${video.snippet.categoryId}/${video.id}`}>
        <div className="flex flex-col justify-center items-start mb-1 md:mb-4">
          <div className="w-full h-full relative">
            <img
              src={video.snippet.thumbnails.high.url}
              alt="video thumbnail"
              className={`w-full ${toggle === false? "h-[180px]":"h-[145px]"} lg:h-[230px] rounded-[6px] md:rounded-[12px] object-cover mb-2`}
            />
            <p className="bg-yt-black bg-opacity-75 text-yt-white absolute bottom-4 p-1 m-1 font-bold text-xs rounded-md right-0">{formatDuration(video?.contentDetails?.duration)}</p>
          </div>
          <div className="flex justify-center mt-1 md:mt-2">
            <img
              src={channelData?.snippet?.thumbnails?.medium?.url}
              alt="channel-logo"
              className="md:w-10 md:h-10 w-8 h-8 rounded-[50%]"
            />
            <div className="flex flex-col justify-center items-start ml-2 md:ml-4">
              <p className="text-yt-white text-[12px] md:text-lg font-bold">
                {video.snippet.title}
              </p>
              <p className="text-yt-gray md:text-sm text-[10px] py-0.5">
                {video.snippet.channelTitle}
              </p>
              <p className="text-yt-gray md:text-sm text-[10px]">
                {formatViewCount(video.statistics.viewCount)} views .{" "}
                {formatPublishTime(video.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </div>
     </Link>
    </>
  );
};

export default VideoList;
