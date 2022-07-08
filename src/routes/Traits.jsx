import React from 'react'

//import images
import trait1 from "../assets/images/friend1.0.png"
import trait2 from "../assets/images/fiend2.0.png"
const Traits = () => {
  return (
    <div class="leader">
        <h1>Traits</h1>
        <div className='img1'>
        <img src={trait1} alt='Feline Fiend trait' />
        </div>
        <div className='img2'>
            <img src={trait2} alt='Feline Fiend PFP trait' />
        </div>
    </div>
  )
}

export default Traits