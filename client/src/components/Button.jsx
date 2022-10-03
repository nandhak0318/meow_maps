import React from 'react'
import '../assets/styles/button.scss'
export default function Button({primaryText, innerText,handler}) {
  return (
    <button onClick={handler} className="overlap">
        <p className="overlapText">{primaryText}</p>
        <div className="overlapTwo">
            <p className="overlapTwoText">{innerText}</p>
        </div>
    </button>
  )
}
