import React from 'react'

import '../components/team.css'

//images
import team1 from "../assets/images/FTeam.png"
import trait1 from "../assets/images/friend1.0.png"
import trait2 from "../assets/images/fiend2.0.png"

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
            We are a collection of 7777 Feline Fiendz located on the Ethereum blockchain. An exclusive brand for degens by degens.
          </p>
          <p>
            You can find other like minded individuals in Our community ranging from artists to web developers, from parents to hypebeasts, and everyone in between.
          </p>
          <p>
            We do not shy away from how diverse our community is and continue to grow as we prosper in the web3 space.
          </p>
          <p>
            Our project offers utility with exclusive airdrops, real life events, limited edition clothing drops and much more to come.
          </p>
          <p>
            See you in the Litter box!
          </p>
        </div>
      </div>
      <div className='trait1'>
        <h1>Traits</h1>
        <div className='img1'>
          <img src={trait1} alt='Feline Fiend trait' />
        </div>
      </div>
      <div>
      <div className='trait2'>
            <img src={trait2} alt='Feline Fiend PFP trait' />
        </div>
      </div>
      <div className='tname1'>
        <h1>Fiendz Team</h1>
      </div>
      <div>
        <img className='team' src={team1} alt='theteam' />
      </div>
      <div className='priv'>
        <a href={pdf1} target="_blank" rel="noreferrer">Privacy Policy </a>
        <div>
          <a classname="tos" href={pdf2} target="_blank" rel="noreferrer">TERMS OF SERVICE</a>
        </div>
      </div>

    </div>
  )
}

export default Team