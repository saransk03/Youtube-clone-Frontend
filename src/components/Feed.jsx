import React, { useContext } from 'react'
import SideBar from './SideBar';
import { Context } from '../context/ContextApi';
import VideoList from './VideoList';

const Feed = () => {
  const {loading ,videoData}= useContext(Context);

  return (
    <div className=" flex flex-row h-screen bg-white text-gray-800 bg-yt-black">
      <SideBar className="hidden lg:block"/>
      <div className='w-[calc(100%-240px)] grow overflow-y-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 px-5 py-3'>
        {! loading && videoData?.map((item) =>(
          <div key={item?.id}>
          <VideoList video={item}/>
          </div>
        ))} 
        </div>

      </div>
    </div>
  )
}

export default Feed


