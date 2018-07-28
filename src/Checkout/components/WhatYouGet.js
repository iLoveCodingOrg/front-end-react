import React from 'react'

export default function (props) {
    return (
        <div>
            <h4 className="mb-3 text-center">Here's What You Get:</h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 className="my-0">Complete Developer Training</h6>
                        <small className="text-muted">
                            Step-by-step, look-over-my-shoulder style video training, that will teach you how to code and build practical and respectable websites, web apps, and mobile apps.
                        </small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 className="my-0">Student Community</h6>
                        <small className="text-muted">
                            Connect &amp; learn from a community of students who share your learn-to-code journey. 
                            Talk to them live over Slack &amp; a Private Facebook Group
                        </small>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 className="my-0">30-Day Full Money Back Guarantee</h6>
                        <small className="text-muted">Give us a try for the first 30-days, and if you find that iLoveCoding is not for you, Email us and ask for a full-refund.</small>
                    </div>
                </li>
            </ul>
        </div>
    )
}