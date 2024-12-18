import React from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { formatPublishTime, formatViewCount } from '../../utils/helper'

const VideoComments = ({comment}) => {
  return (
    <div className='flex flex-row item-start lg:items-start mb-4 py-1.5 md:p-4 rounded-lg '>
      <img
         src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
         alt={comment?.snippet?.title}
         className='md:w-12 md:h-12 w-7 h-7 rounded-full mb-2 lg:mb-0 lg:mr-4'
      />

      <div className='flex-1'>
        <div className='flex items-center gap-2 px-2 text-yt-white'>
          <h3 className='text-[13px] lg:text-base font-semibold'>
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </h3>
          <p className='text-[10px] lg:text-sm '>
         {formatPublishTime(comment?.snippet?.topLevelComment?.snippet?.publishedAt)}
          </p>
        </div>
        <p className='text-sm lg:text-base text-yt-white mt-2'>
          {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
        <div className='flex items-center space-x-4 mt-2 text-yt-white'>
          <div className='flex items-center space-x-1 '>
              <FaThumbsUp/>
              <span className='text-xs lg:text-sm'>{formatViewCount(comment?.snippet?.topLevelComment?.snippet?.likeCount)}</span>
          </div>
          <div className='flex items-center space-x-2 '>
            <FaThumbsDown/>
          </div>

        </div>

      </div>
  
    </div>
  )
}

export default VideoComments