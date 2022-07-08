import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//modal $nip 
import Modal from "../components/modal"

//stylesheet
import "../components/bodega.css"
import "../components/button.css"

//video background
import FiendzVideo2 from "../assets/Bodega Video2_instore.mp4"
import FiendzVideo3 from "../assets/final2.0.mp4"

const Bodega = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='chief'>
      <div className='btn2'>
        <a href='https://discord.com/channels/934616456015007815/953830951811686470' target="_blank" rel='noreferrer'>
          <button>Click me</button>
        </a>
      </div>
      <div className='btn3'>
        <Link to="/Merch">
          <button>play</button>
        </Link>
      </div>
      <div className='btn4'>
        <Link to="/RoadMap">
          <button>roadmap</button>
        </Link>
      </div>
      <div className='btn5'>
        <a href='https://opensea.io/collection/felinefiendznft' target="_blank" rel='noreferrer'>
          <button>opensea</button>
        </a>
      </div>
      <div className='btn6'>
        <Link to="/team">
          <button>team</button>
        </Link>
      </div>
      <div className='btn7'>
        <div className='modal'>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className='modal-guts'>
              The native currency for the Bodega is called $NIP. The amount of $NIP you earn per day, corresponds to how many Fiendz you own. The more Fiendz you own, the more $NIP you earn per day. $NIP has to be collected daily in our discord. For more information go to our discord server.
            </div>
          </Modal>
          <button onClick={() => setIsOpen(true)}>$NIP</button>
        </div>
      </div>
      <div className='btn8'>
        <Link to="/traits">
          <button>traits</button>
        </Link>
      </div>
      <div className='video2'>
        <video src={FiendzVideo2} autoPlay muted></video>
      </div>
      <div className='video3'>
        <video src={FiendzVideo3} autoPlay loop muted></video>
      </div>
    </div>

  )
}




export default Bodega