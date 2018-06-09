import './switch.scss'
import React from 'react'

export default function (props){
    const randomName = Math.floor(Math.random()*100)
    return (
        <div className="mb-3 d-flex flex-column align-items-center">
            <p className="text-white">Select payment option:</p>
            <div className="switch">
                <input
                    type="radio"
                    name={randomName}
                    id={`${randomName}-one`}
                    value="one"
                    checked={props.selected === 'one'}
                    onChange={props.onChange}
                />
                <label className="small" htmlFor={`${randomName}-one`}>One-Time Payment</label>
                <input
                    type="radio"
                    name={randomName}
                    id={`${randomName}-four`}
                    value="four"
                    checked={props.selected === 'four'}
                    onChange={props.onChange}
                />
                <label className="small" htmlFor={`${randomName}-four`}>4 Month Payment Plan</label>
                <span className="switch-handle"></span>
            </div>
        </div>
)}
