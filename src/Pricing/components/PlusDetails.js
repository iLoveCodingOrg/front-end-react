import React from 'react'
import { CheckMark } from '../../_common'

export default ()=>{
    return (
        <div className="my-3">
            <div className="mb-2 strong">Complete Training:</div>
            <div>
                <CheckMark />
                Full access to all courses, lessons
            </div>
            <div>
                <CheckMark />
                Full access to source code
            </div>
            <div>
                <CheckMark />
                Full access to Q &amp; A section
            </div>
            <div>
                <CheckMark />
                Access to all future training
            </div>

            <br/>
            <div className="mb-2 strong">Community Access:</div>
            <div>
                <CheckMark />
                Connect with peers
            </div>
            <div>
                <CheckMark />
                Access to private Slack channel
            </div>
            <div>
                <CheckMark />
                Access to private Facebook group
            </div>

            <br/>
            <div className="mb-2 strong">Mentor Support:</div>
            <div>
                <CheckMark />
                Unlimited access to mentor via email
            </div>
            <div>
                <CheckMark />
                Get feedback on your code &amp; projects
            </div>
            <div>
                <CheckMark />
                Get career guidance &amp; ask questions
            </div>

            <br/>
            <div className="mb-2 strong">Live Mentor Support:</div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Schedule live calls with mentor
            </div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Live code review &amp; feedback
            </div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Live interview preparation
            </div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Resume Improvement &amp; planning
            </div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Introduction with job recruiters
            </div>
        </div>
    )    
}