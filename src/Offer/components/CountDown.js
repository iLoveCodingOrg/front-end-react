import React from 'react'
import Countdown from 'react-countdown-now'
import { isNil } from 'lodash'
import { connect } from 'react-redux'

function CountDown({ title, timeFrom, timeLeft }) {
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
        date={(timeFrom + timeLeft)*1000}
        renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return null
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
                    <div className="bg-danger d-flex flex-column">
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
}

function mapStateToProps(state){
    return {
        timeFrom: state.offer.timeFrom,
        timeLeft: state.offer.timeLeft
    }
}

export default connect(mapStateToProps)(CountDown)