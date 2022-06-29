import React from 'react'

import "../components/team.css"
import fiend1 from "../assets/images/fiend1.png"

const Team = () => {
  return (
   <div className='first'>
    <div className='expl1'>
    <div className='name1'>
        <h2>Who is Feline Fiendz?</h2>
      </div>
      <div className='pgr1'>
        <p>
          An exclusive brand for degens. Our community consists of all types of individuals ranging from artists to web developers, to parents, hypebeasts, we do not shy away from how diverse our community is. It only continues to grow as we prosper in the web3 space. We are a collection of 7777 Feline Fiendz located on the Ethereum blockchain. With limited edition clothing drops, exclusive airdrops, real life events, and much more to come.
        </p>
      </div>
      <div className='img1'>
        <img src={fiend1} alt='traits'/>
      </div>
    </div>
   </div>
  )
}

export default Team