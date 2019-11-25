import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now'

function CountDown({
  title, timeFrom, timeLeft, children,
}) {
  if (!timeLeft) return null

  const renderTimeUnit = (time, label) => (
    <div
      style={{ minWidth: '76px' }}
      className="flex flex-column align-items-center p--25 card"
    >
      <span className="h2">{time}</span>
      <span className="t-dark">{label}</span>
    </div>
  )

  return (
    <Countdown
      date={(timeFrom + timeLeft)}
      renderer={({
        days, hours, minutes, seconds, completed,
      }) => {
        if (completed) {
          // Render a completed state
          // return null
          return (
            <div className="bg-dark color-white flex flex-align-justify-center">
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
            <div className="my-1 flex flex-align-justify-center">
              {renderTimeUnit(days, 'DAYS')}
              <div className="h2 color-white t-center p--25">:</div>
              {renderTimeUnit(hours, 'HOURS')}
              <div className="h2 color-white t-center p--25">:</div>
              {renderTimeUnit(minutes, 'MINS')}
              <div className="h2 color-white t-center p--25">:</div>
              {renderTimeUnit(seconds, 'SECS')}
            </div>
            {children}
          </div>
        )
      }}
    />
  )
}

CountDown.propTypes = {
  title: PropTypes.string,
  timeFrom: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
}

CountDown.defaultProps = {
  title: 'Time remaining:',
}

export default CountDown
