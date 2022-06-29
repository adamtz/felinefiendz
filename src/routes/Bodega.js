import React from 'react'

//imported packages
import VideoLooper from "react-video-looper"
import FiendzVideo from "../assets/Bodega Video2.mp4"

const Bodega = () => {
  return (
    <div>
        <VideoLooper source={FiendzVideo} start={6.00} end={8.00} objectFit autoPlay />
    </div>
  )
}

export default Bodega