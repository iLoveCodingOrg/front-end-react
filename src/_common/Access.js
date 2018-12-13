import React from 'react'

export default function Access({isFree = true, of}){
    if(of==='blog' || of==='pages') return null
    return (
        <span>
            {
                isFree?
                <span className="badge badge-pill badge-dark mr-3">FREE</span>
                :
                <span className="badge badge-pill badge-success mr-3">PRO</span>
            }
        </span>
    )
}