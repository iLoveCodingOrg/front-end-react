import React from 'react'
import { CheckMark } from '../../_common'

export default ()=>{
    return (
        <div className="my-3">
            <div className="mb-2 strong">Unlimited Access:</div>
            <div>
                <CheckMark />
                Unlimited access to all courses &amp; lessons
            </div>
            <div>
                <CheckMark />
                Unlimited access  to source code
            </div>
            <div>
                <CheckMark />
                Unlimited access  to Q &amp; A section
            </div>
            <div>
                <CheckMark />
                Unlimited access to all future training
            </div>

            <br/>
            <div className="mb-2 strong">➕ Support:</div>
            <div>
                <CheckMark />
                Mentor Moderated Private Facebook Group
            </div>
            <div>
                <CheckMark />
                Connect with peers
            </div>
        </div>
    )
}