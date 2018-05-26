import React from 'react'

export default function (props) {
    return (
        <div>
            <h4 className="mb-3 text-center">Here's What You Get:</h4>
            <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 class="my-0">Complete Developer Training</h6>
                        <small class="text-muted">
                            Step-by-step, look-over-my-shoulder style video training, that will teach you how to code and build practical and respectable websites, web apps, and mobile apps.
                        </small>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 class="my-0">2x Extended Access</h6>
                        <small class="text-muted">Get <del>3 month</del> <del>6-month</del> 12-month access to the program</small>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 class="my-0">True Mentorship Access</h6>
                        <small class="text-muted">Access to Aziz as your mentor. Schedule calls with Aziz and get solution to the exact problem you are facing.</small>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 class="my-0">Student Community</h6>
                        <small class="text-muted">
                            Connect &nbsp; learn from a community of students who share your learn-to-code journey. 
                            Talk to them live over Slack &nbsp; a Private Facebook Group
                        </small>
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between text-success">
                    <div>
                        <h6 class="my-0">60-Day Full Money Back Guarantee</h6>
                        <small class="text-muted">Give us a try for the first 60-days, and if you find that iLoveCoding is not for you, Email us and ask for a full-refund.</small>
                    </div>
                </li>
            </ul>
        </div>
    )
}