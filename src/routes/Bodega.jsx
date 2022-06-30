import React from 'react'

//imported packages
import VideoLooper from 'react-video-looper'
import FiendzVideo from "../assets/Bodega Video2.mp4"

const Bodega = () => {
  return (
    <div className='main'>
      <div className='video2'>
        <VideoLooper source={FiendzVideo} start={6.00} end={9.00} loopCount={10} autoPlay objectFit />
        </div>
    </div>
  )
}

export default Bodega