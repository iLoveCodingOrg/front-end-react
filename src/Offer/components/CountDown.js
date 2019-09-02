import React from 'react'
import Countdown from 'react-countdown-now'
import isNil from 'lodash/isNil'
import { connect } from 'react-redux'

function CountDown({ title, timeFrom, timeLeft }) {
  if (isNil(timeLeft)) return null

  function renderTimeUnit(time, label) {
    return (
      <div
        style={{ minWidth: '76px' }}
        className="flex flex-column align-items-center
                p--25
                card"
      >
        <span className="h2">{time}</span>
        <span className="text-dark">{label}</span>
      </div>
    )
  }

  return (
    <Countdown
      date={(timeFrom + timeLeft) * 1000}
      renderer={({
        days, hours, minutes, seconds, completed,
      }) => {
        if (completed) {
          // Render a completed state
          return null
          return (
            <div className="bg-dark color-white flex align-justify-center">
              <span className="h2 p-1 color-gray">
                The offer has expired
              </span>
            </div>
          )
        }
        // Render a countdown
        return (
          <div className="bg-danger flex flex-column">
            <div className="h5 mt-1 t-center">
              <span className="badge bg-gray">
                {title}
              </span>
            </div>
            <div className="my-1 flex align-justify-center">
              {renderTimeUnit(days, 'DAYS')}
              <div className="h2 color-white p--25">:</div>
              {renderTimeUnit(hours, 'HOURS')}
              <div className="h2 color-white p--25">:</div>
              {renderTimeUnit(minutes, 'MINS')}
              <div className="h2 color-white p--25">:</div>
              {renderTimeUnit(seconds, 'SECS')}
            </div>
          </div>
        )
      }
        }
    />
  )
}

function mapStateToProps(state) {
  return {
    timeFrom: state.offer.timeFrom,
    timeLeft: state.offer.timeLeft,
  }
}

export default connect(mapStateToProps)(CountDown)
