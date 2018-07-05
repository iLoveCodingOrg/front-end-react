import React from 'react'
import { withRouter } from 'react-router-dom'
import Countdown from 'react-countdown-now'
import qs from 'query-string'
import { isNil } from 'lodash'

export default withRouter(({ location, title }) => {
    const query = qs.parse(location.search)
    const timeNow = parseInt(query.t) || Date.now()
    const timeLeft = query.l ? parseInt(query.l) : undefined

    if (isNil(timeLeft)) return null

    function renderTimeUnit(time, label){
        return(
            <div
                style={{ minWidth: '76px' }}
                className="d-flex flex-column align-items-center
                p-1 p-md-3
                rounded bg-white">
                <span className="h2">{time}</span>
                <span className="text-dark">{label}</span>
            </div>
        )
    }

    return <Countdown
        date={timeNow + timeLeft}
        renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return (
                    <div className="
                        bg-dark text-white
                        d-flex justify-content-center align-items-center
                    ">
                        <span className="h2 p-3 text-muted">
                            The offer has expired
                        </span>
                    </div>
                )
            } else {
                // Render a countdown
                return (
                    <div className="bg-danger">
                        <div className="h5 mt-3 text-center">
                            <span className="badge badge-light text-uppercase">
                                {title}
                            </span>
                        </div>
                        <div className="
                            my-3
                            d-flex justify-content-center align-items-center
                            ">
                            {renderTimeUnit(days, 'DAYS')}
                            <div className="h2 text-white p-1 p-md-2">:</div>
                            {renderTimeUnit(hours, 'HOURS')}
                            <div className="h2 text-white p-1 p-md-2">:</div>
                            {renderTimeUnit(minutes, 'MINS')}
                            <div className="h2 text-white p-1 p-md-2">:</div>
                            {renderTimeUnit(seconds, 'SECS')}
                        </div>
                    </div>
                )
            }
        }
        }
    />
})