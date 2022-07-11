//style sheet
import "../components/modal.css"

import React from 'react'

export default function Modal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="modalcontainer">
      <div className="content">
      <p>
      The native currency for the Bodega is called $NIP. The amount of $NIP you earn per day, corresponds to how many Fiendz you own. The more Fiendz you own, the more $NIP you earn per day. $NIP has to be collected daily in our discord. For more information go to our discord server.
      <p onClick={onClose} className="closeBtn">Exit</p>
      </p>
      </div>
    </div>
  )
}
