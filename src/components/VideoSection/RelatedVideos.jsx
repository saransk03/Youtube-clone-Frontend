import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/ContextApi';
import fetchApiForYoutubeData from '../../utils/api';
import { formatPublishTime, formatViewCount } from '../../utils/helper';
import { formatDuration } from 'date-fns';

const RelatedVideos = ({categoryId}) => {
  const [relatedVideos,setRelatedVideos] =useState([])
  const {setLoading} =useContext(Context)

  const fetchRelatedVideos = async() =>{
        setLoading(true);
        try {
           const data= await fetchApiForYoutubeData('videos',{
            part: "snippet,contentDetails,statistics",
            regionCode:"IN",
            chart: "mostPopular",
            videoCategoryId: categoryId,
            maxResults:20
           })
           setRelatedVideos(data?.items)
          //  console.log(data)
        } catch (error) {
          console.error(error,'error fetching realated videos')
        }
          finally{
            setLoading(false);
          }
        }

        useEffect(() =>{
          fetchRelatedVideos()
        },[categoryId])

  return (
    <div>
      {relatedVideos?.map((video)=>(
            <Link to={`/video/${video.snippet.categoryId}/${video.id}`}>
            <div className="flex flex-col xl:flex-row  mb-2">
              <div className="relative h-[200px] lg:h-[140px] w-[400px] min-w-[230px] lg:w-60 md:rounded-xl overflow-hidden">
                <img
                  src={video?.snippet?.thumbnails?.medium?.url}
                  alt={video.snippet.title}
                  className="w-full h-full object-cover  rounded-md mb-2"
                />
                <span className="absolute bottom-4 right-0 bg-yt-light-black text-yt-white text-xs p-1 m-1 rounded">
                  {formatDuration(video?.contentDetails?.duration)}
                </span>
              </div>
              
    
                <div
                  className={`flex flex-col ml-0 md:ml-4 md:mt-0 overflow-hidden text-yt-white`}
                >
                  <h3 className={`text-md font-semibold text-gray-300 `}>{video?.snippet?.title}</h3>
                  <div
                    className={`text-xs text-gray-400 `}
                  >
                    {video?.snippet?.channelTitle}
                  </div>
                  <div
                    className={`text-xs text-gray-400`}
                  >
                    {formatViewCount(video?.statistics?.viewCount)} views .{" "}
                    {formatPublishTime(video?.snippet?.publishedAt)}
                  </div>
                </div>
              </div>
          </Link>
      ))}
     
    </div>
  )
}

export default RelatedVideos