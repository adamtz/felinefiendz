import React from 'react'

import '../components/team.css'
//images
import fiend1 from "../assets/images/friend1.0.png"
import fiend2 from "../assets/images/fiend2.0.png"
import team1 from "../assets/images/fiendnft.png"

//pdf files
import pdf1 from "../assets/PDF/privpolicy.pdf"
import pdf2 from "../assets/PDF/tos.pdf"

const Team = () => {
  return (
    <div className='first'>
      <div className='title1'>
        <h1>Meet The Team</h1>
      </div>
      <div className='expl1'>
        <div className='name1'>
          <h2>Who is Feline Fiendz?</h2>
        </div>
        <div className='pgr1'>
          <p>
            An exclusive brand for degens. Our community consists of all types of individuals ranging from artists to web developers, to parents,</p> 
          <p>
          hypebeasts, we do not shy away from how diverse our community is.
          </p>
          <p>
          It only continues to grow as we prosper in the web3 space. We are a collection of 7777 Feline Fiendz located on the Ethereum blockchain. 
          </p>
          <p>
          With limited edition clothing drops, exclusive airdrops, real life events, and much more to come.
          </p>
        </div>
        <div className='title2'>
          <h2>Traits</h2>
        </div>
        <div className='img1'>
          <img src={fiend1} alt='traits' />
        </div>
        <div className='img2'>
        <img src={fiend2} alt="traits" />
        </div>
      </div>
      <div className='tname1'>
        <h2>Fiendz Team</h2>
      </div>
      <div>
        <img className='team' src={team1} alt='theteam' />
      </div>
      <div className='priv'>
        <a href={pdf1}>Privacy Policy</a>
        <div>
        <a classname= "tos" href= {pdf2}>TERMS OF SERVICE</a>
        </div>
      </div>
      
    </div>
  )
}

export default Team