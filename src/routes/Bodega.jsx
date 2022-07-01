import React from 'react'
//import Link from 'react-router-dom'

//stylesheet
import "../components/bodega.css"

//imported packages
//import VideoLooper from "react-video-looper"
import FiendzVideo2 from "../assets/Bodega Video2_instore.mp4"

const Bodega = () => {
  return ( 
    <div className='chief'>
      <div className='btn2'>
        <a href='https://discord.com/channels/934616456015007815/953830951811686470'>
          <button>Click me</button>
          </a>
        </div>
      <div className='video2'>
        <video src={FiendzVideo2} autoPlay muted > </video>
        </div>
    </div>
    
  )
}




export default Bodega