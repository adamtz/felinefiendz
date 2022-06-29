import React from 'react';

//imported packages
import VideoLooper from "react-video-looper"
import FiendzVideo from "../assets/Bodega Video2.mp4"

//song import
//import song from "../assets/static/bodegamusic.mp3"


const Store = () => {
    return (
        // Start of the animation loop from the mp4 file//
        <div>
            <VideoLooper source= {FiendzVideo} start={0.00} end={4.00} loopcount={5} autoPlay objectFit />
        </div>
    )
}


export default Store