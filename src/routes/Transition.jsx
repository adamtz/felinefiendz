import React from 'react'
import FiendzVideo3 from "../assets/inside.mp4"

function Transition() {
  return (
    <div className='transition1'>
      <video src={FiendzVideo3} autoPlay loop ></video>
    </div>
  )
}

export default Transition