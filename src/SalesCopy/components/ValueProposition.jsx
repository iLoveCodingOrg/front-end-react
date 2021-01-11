import React from 'react'

export default function ({ id, className }) {
  return (
    <div id={id} className={className}>
      <h3 className="h3 t-center">What is the training worth to you?</h3>
      <div className="flex space-around h3 f-300">
        <div className="p-1">Our students earn $55k - $80k/year at their first developer job.</div>
        <div className="p-1">Your second, and third job could be in the range of $90k-$120k/year.</div>
        <div className="p-1">You get a highly respected career in a booming market where you are valued.</div>
      </div>
    </div>
  )
}
