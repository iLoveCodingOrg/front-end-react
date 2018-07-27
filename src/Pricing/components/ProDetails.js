import React from 'react'

export default ()=>{
    return (
        <div className="my-3">
            <div className="mb-2 strong">Complete Training:</div>
            <div>
                <span className="oi oi-circle-check text-teal" title="circle-check" aria-hidden="true" />&nbsp;
                Full access to all courses, lessons
            </div>
            <div>
                <span className="oi oi-circle-check text-teal" title="circle-check" aria-hidden="true" />&nbsp;
                Full access to questions and answers section
            </div>
            <div>
                <span className="oi oi-circle-check text-teal" title="circle-check" aria-hidden="true" />&nbsp;
                Access to all future training
            </div>
            
            <br/>
            <div className="mb-2 strong">Personal Priority Support:</div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Unlimited access to mentor via email
            </div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Connect with peers via private student community
            </div>
            <div>
                <span className="oi oi-x text-muted" title="x" aria-hidden="true" />&nbsp;
                Access to member-only Slack &amp; Facebook group
            </div>
        </div>
    )    
}