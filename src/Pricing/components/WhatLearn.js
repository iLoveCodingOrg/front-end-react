import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function (){
    return (
    <div className="d-flex flex-column align-items-center">
        <div className="col-md-10 col-lg-8 row mb-4">
            <div className="col-md-4">
                <Video videoSource="311500783" />
            </div>
            <div className="col-md-8">
                <h2>What will you learn?</h2>
                <p className="lead">
                    You will learn all the technical skills so you can call yourself a competent Front-End and Full-Stack JavaScript developer - who is job-ready and can build any kind of app.
                </p>
                <div className="">
                    <CheckMark /> Build simple and advanced websites <br />
                    <CheckMark /> Build responsive-design websites <br />
                    <CheckMark /> Build Modern Front-End Applications <br />
                    <CheckMark /> Think like a developer <br />
                    <CheckMark /> Problem-solving <br />
                    <CheckMark /> Backend Development <br />
                    <CheckMark /> Working with databases <br />
                    <CheckMark /> Collaborate code with Git <br />
                    <CheckMark /> Breaking features down into functions <br />
                    <CheckMark /> Writing reusable code <br />
                    <CheckMark /> Build mobile apps <br />
                    <CheckMark /> Build password-protected websites <br />
                    <CheckMark /> Working with third-party APIs (Twitter, Facebook, etc.) <br />
                </div>
            </div>
        </div>
    </div>
)}
