import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Wistia } from '../../Video'
import { CountDown } from '../../Offer'

function Play({ timeFrom, timeLeft }) {
  const isTimeValid = !Number.isNaN(timeFrom + timeLeft)

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
        style={{
          animation: 'fadeInOut 3s linear infinite',
        }}
        className="color-red h3 t-center my-1"
      >
        Your webinar is in progress! Do not close the window or the presentation will send.
      </div>
      <Wistia sourceId="op37bgyfp2" />
      {isTimeValid && (
      <CountDown timeFrom={timeFrom} timeLeft={timeLeft}>
        <button type="button" className="btn btn-primary">Hello</button>
      </CountDown>
      )}
    </div>
  )
}

function mapStateToProps({ offer }) {
  return {
    timeFrom: offer.timeFrom,
    timeLeft: offer.timeLeft,
  }
}

export default connect(mapStateToProps)(Play)
