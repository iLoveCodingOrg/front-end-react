import React, { useEffect } from 'react'
import { Wistia } from '../../Video'

export default function Play() {
  useEffect(() => {
    const { backgroundColor } = document.body.style
    document.body.style.backgroundColor = 'black'
    return () => {
      document.body.style.backgroundColor = backgroundColor
    }
  }, [])
  return (
    <div className="container">
      <div
        className="color-red h3 t-center my-1"
      >
        Webinar Replay
      </div>
      <Wistia sourceId="vgzeuj0mgl" />
    </div>
  )
}
