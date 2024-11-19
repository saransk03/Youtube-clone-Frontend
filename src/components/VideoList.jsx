import React, { useEffect, useState } from "react";
import fetchApiForYoutubeData from "../utils/api";
import { Link } from "react-router-dom";
import { formatPublishTime, formatViewCount } from "../utils/helper";

const VideoList = ({ video }) => {
  const [channelData, setChannelData] = useState();

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
        <div className="flex flex-col justify-center items-start mb-4">
          <div className="w-full h-full">
            <img
              src={video.snippet.thumbnails.standard.url}
              alt="video thumbnail"
              className="w-full h-[260px] rounded-[12px] object-cover mb-2"
            />
          </div>
          <div className="flex justify-center  mt-2">
            <img
              src={channelData?.snippet?.thumbnails?.medium?.url}
              alt="channel-logo"
              className="w-10 h-10 rounded-[50%]"
            />
            <div className="flex flex-col justify-center items-start ml-4">
              <p className="text-yt-white text-md font-bold">
                {video.snippet.title}
              </p>
              <p className="text-yt-gray text-sm py-0.5">
                {video.snippet.channelTitle}
              </p>
              <p className="text-yt-gray text-sm">
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
