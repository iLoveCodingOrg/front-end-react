import React from 'react'
import { withRouter } from 'react-router-dom'
import Countdown from 'react-countdown-now'
import qs from 'query-string'
import { isNil } from 'lodash'

export default withRouter(({ location, Valid, Invalid }) => {
    const query = qs.parse(location.search)
    const timeNow = parseInt(query.t)
    const timeLeft = query.l ? parseInt(query.l) : undefined

    if (isNil(timeLeft)) return null

    return <Countdown
        date={timeNow + timeLeft}
        renderer={({ total, days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return (
                  <Invalid
                    total={total}
                    days={days}
                    hours={hours}   
                    minutes={minutes}
                    seconds={seconds}
                    completed={completed}
                  />
                )
            } else {
                // Render a countdown
                return <Valid
                    total={total}
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    completed={completed}
                />
            }
        }}
    />
})