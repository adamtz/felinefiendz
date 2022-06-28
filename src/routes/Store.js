import React from 'react';
import VideoLooper from "react-video-looper"
import FiendzVideo from "../assets/BodegaVideo.mp4"


const Store = () => {
    return (
        <div>
            <VideoLooper source= {FiendzVideo} start={0.00} end={3.00} loopcount={5} autoplay objectFit />
        </div>
    )
}

export default Store