import React from 'react'
import './style.css'

export default function ProgressBar({ percent, className }) {
  return (
    <div className={`progress-bar bg-gray-lighter b ${className}`} style={{ overflow: 'hidden' }}>
      <div className="stripes bg-gray t-center color-white" style={{ width: `${percent}%` }}>
        <small>{`${percent}%`}</small>
      </div>
    </div>
  )
}
