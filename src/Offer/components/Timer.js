import React from 'react'
import IsOfferValid from './IsOfferValid'

export default ({ title }) => {
    return (
        <IsOfferValid
            Valid={(params)=><CountDown title={title} {...params} />}
            Invalid={()=><Expired />}
        />
    )
}

function Expired(){
    return(
        <div className="
            bg-dark text-white
            d-flex justify-content-center align-items-center
        ">
            <span className="h2 p-3 text-muted">
                The offer has expired
            </span>
        </div>
    )
}

function CountDown({title, days, hours, minutes, seconds}){
    return(
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