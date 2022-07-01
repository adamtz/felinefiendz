import React from 'react'

//stylesheet
import "../components/bodega.css"

//imported packages
//import VideoLooper from "react-video-looper"
import FiendzVideo from "../assets/Bodega Video2_instore.mp4"

const Bodega = () => {
  return ( 
    <div className='btn2'>
      <div className='video2'>
        <video src={FiendzVideo} autoPlay  muted > </video>
        </div>
    </div>
    
  )
}


export default Bodega