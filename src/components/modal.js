//style sheet
import "../components/modal.css"

import React from 'react'

export default function Modal({ open, children, onClose }) {
    if(!open) return null
  return (
    <div>
        <div className="btn8">
        <button onClick={onClose}>Exit</button>
        </div>
        {children}
    </div>
  )
}
