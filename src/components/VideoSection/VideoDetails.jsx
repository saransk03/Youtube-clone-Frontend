import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaDownload, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import VideoComments from "./VideoComments";
import RelatedVideos from "./RelatedVideos";
import { Context } from "../../context/ContextApi";
import fetchApiForYoutubeData from "../../utils/api";
import { formatPublishTime, formatViewCount } from "../../utils/helper";
import SideBar from "../SideBar";

const VideoDetails = () => {
  const { categoryId, videoId } = useParams();
  const { setLoading } = useContext(Context);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState();
  const [showFullDescription,setShowFullDescription] = useState(false);
  const [channelData, setChannelData] = useState();
  const [commentData, setCommentData] = useState()

  const fetchSelectedVideoDetails = async () => {
    setLoading(true);
    try {
      const data = await fetchApiForYoutubeData("videos", {
        part: "snippet,contentDetails,statistics",
        id: videoId,
      });
      setSelectedVideoDetails(data?.items[0]);
    } catch (error) {
      console.error(error, "error fetching selected videos");
    }
  };

  const fetchChannelData = async () => {
    if (selectedVideoDetails?.snippet?.channelId) {
      setLoading(true);
      try {
        const data = await fetchApiForYoutubeData(`channels`, {
          part: "snippet,contentDetails,statistics",
          id: selectedVideoDetails?.snippet?.channelId,
        });
        setChannelData(data?.items[0]);
      } catch (error) {
        console.log("error fetching cahnnel data", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchVideoComments = async () => {
      setLoading(true);
      try {
        const data = await fetchApiForYoutubeData(`commentThreads`, {
          part: "snippet",
          videoId: videoId,
          maxResults:10,
        });
        setCommentData(data?.items);
      } catch (error) {
        console.log("error fetching cahnnel data", error);
      } finally {
        setLoading(false);
      }
  };




  useEffect(() => {
    fetchSelectedVideoDetails();
    fetchVideoComments()
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [selectedVideoDetails]);

  const toggleDescription= () =>{
    setShowFullDescription(!showFullDescription)
  }
  const description= selectedVideoDetails?.snippet?.description;
  const truncatedDescription= description?.slice(0,240);

  return (
    <>
      
      <div
        className={`flex justify-center flex-row h-full bg-yt-black text-white py-16 px-1 md:px-16`}
      >
        <div className="w-full flex flex-col p-4 lg:flex-row lg:space-x-4">
          <div className="flex flex-col lg:w-[65%] px-4 py-3 lg:py-6 overflow-auto">
            <div className="h-[200px] md:h-[450px] lg:h-[500px] xl:h-[600px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                className="rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            {selectedVideoDetails && (
              <div className="md:mt-4 mt-2 flex flex-col gap-2 md:gap-6 ">
                <h2 className="text-[14px] md:text-2xl text-yt-white font-bold">
                  {selectedVideoDetails?.snippet?.title}
                </h2>
                <div className="flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center ">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <img
                      src={channelData?.snippet?.thumbnails?.default?.url}
                      alt={channelData?.snippet?.title}
                      className="md:w-12 md:h-12 w-8 h-8 rounded-full"
                    />
                    <div className="ml-2 lg:mt-0">
                      <h3 className="md:text-lg text-[14px] text-yt-white font-bold">
                        {channelData?.snippet?.title}
                      </h3>
                      <p
                        className={` font-medium md:text-sm text-[10px] text-yt-gray`}
                      >
                        {formatViewCount(
                          channelData?.statistics?.subscriberCount
                        )}{" "}
                        subscribers
                      </p>
                    </div>
                    <button className={`bg-yt-white text-yt-black font-semibold text-[14px] px-2 lg:px-6 py-1 lg:py-3 ml-5 lg:ml-6 rounded-full`}>
                      Subscribe
                    </button>
                  </div>
                  <div className="flex items-center text-yt-white justify-between space-x-4 ">
                    <button
                      className={` flex items-center space-x-1 md:space-x-2 rounded-full px-4 py-1.5 md:px-6 md:py-3 bg-yt-light-1 `}
                    >
                      <FaThumbsUp className="text-[12px] md:text-[18px]"/>
                      <span className="text-[10px] font-bold md:text-[16px]">
                       {formatViewCount(selectedVideoDetails?.statistics?.likeCount)}
                      </span>
                      <span className="text-yt-gray px-0 md:px-2">|</span>
                      <div className="h-5 w-[1px] bg-gray-400 mx-0 md:mx-2"></div>
                      <FaThumbsDown className="text-[12px] md:text-[18px]"/>
                    </button>
  
                    <button
                      className={` flex items-center space-x-2 rounded-full px-4 py-1.5 md:px-6 md:py-3 bg-yt-light-1 `}
                    >
                      <FaDownload className="text-[12px] md:text-[18px]"/>
                      <span className="text-[14px] font-bold md:text-[16px]">Download</span>
                    </button>
  
                  </div>
                </div>
                <div className="bg-yt-light-1 text-yt-white rounded-xl px-4 py-2 md:p-4">
                    <p className="text-gray-900 text-[13px] md:text-[16px]">
                 {formatViewCount(selectedVideoDetails?.statistics?.viewCount)}{" "} views .{" "}
                 {formatPublishTime(selectedVideoDetails?.snippet?.publishedAt)}
                    </p>
           <p className="text-yt-white text-[13px] md:text-[16px]">
  
             {showFullDescription ? description : truncatedDescription}
             {description?.length>240 && (
              <button
               onClick={toggleDescription}
               className="text-blue-500 ml-1 md:ml-2"
              >
               {showFullDescription ? "Show less": "show more"}
              </button>
             )}
           </p>
                </div>
              </div>
            )}
            <div className="mt-8">
              <p className="text-yt-white font-semibold text-[14px] md:text-lg ">
                 {formatViewCount(selectedVideoDetails?.statistics?.commentCount)}{" "}
                Comments
                </p>
                <hr className="text-yt-gray mt-2"/>
            </div>
            {commentData?.map((comment) =>(
              <VideoComments
                  comment={comment}
                  key={comment.id}
              />
            ))}
          </div>
        <div className="lg:w-[35%] px-3 py-4 md:p-4">
          <h3 className="text-xl text-yt-white font-bold mb-4">Related Videos</h3>
          <RelatedVideos
           categoryId={categoryId}
          />
  
        </div>
      </div>
      </div>
    </>
  );
};

export default VideoDetails;