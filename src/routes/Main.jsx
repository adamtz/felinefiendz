import React from 'react';
import { Link } from 'react-router-dom';

//stylesheet
import "../components/Main.css"

//imported packages
//import VideoLooper from "react-video-looper"
import FiendzVideo from "../assets/Bodega Video2_Trim.mp4"


//song import
//import song from "../assets/static/bodegamusic.mp3"


const Main = () => {
    return (
        // Start of the animation loop from the mp4 file
        //<VideoLooper src={FiendzVideo} start={0.00} end={4.00} loop autoPlay /> 
        <div className='main'>
            <Link to="/Bodega">
           <video src= {FiendzVideo} autoPlay loop muted /> 
           </Link>
           
           
        </div>

    )
}


export default Main