import React from 'react'

const VideoList = ({video}) => {

  return (
    <>
        <div className='flex flex-col justify-center items-start'>
            <div className='w-full h-full'>
                <img src={video.snippet.thumbnails.standard.url} alt="" className='w-full h-[260px] rounded-[12px] object-cover mb-2'/>
            </div>
            <p className='text-yt-white text-sm'>{video.snippet.title}</p>
            <p className='text-yt-white text-sm'>{video.snippet.channelTitle}</p>
            <p className='text-yt-white text-sm'>{video.statistics.viewCount} views * </p>
        </div>
    </>
  )
}

export default VideoList