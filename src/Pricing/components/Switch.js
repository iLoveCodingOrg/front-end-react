import './switch.scss'
import React from 'react'

export default function (props){
    return (
        <div className="my-3 d-flex flex-column align-items-center">
            Select payment option:<br />
            {/* {props.selected} */}
            <div className="switch">
                <input
                    type="radio"
                    name="payment"
                    id="one"
                    value="one"
                    checked={props.selected === 'one'}
                    onChange={props.onChange}
                />
                <label className="small" htmlFor="one">One Time Payment</label>
                <input
                    type="radio"
                    name="payment"
                    id="four"
                    value="four"
                    checked={props.selected === 'four'}
                    onChange={props.onChange}
                />
                <label className="small" htmlFor="four">4 Month Payment Plan</label>
                <span className="switch-handle"></span>
            </div>
        </div>
)}
