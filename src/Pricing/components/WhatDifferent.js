import React from 'react'
import { CheckMark } from '../../_common'
import Video from '../../Video/components/Video'

export default function (){
    return (
    <div className="d-flex flex-column align-items-center">
        <div className="col-md-10 col-lg-8 row mb-4">
            <div className="col-md-4">
                <Video videoSource="311500900" />
            </div>
            <div className="col-md-8">
                <h2>How is iLoveCoding Different?</h2>
                <p className="lead">
                    iLoveCoding gives more value for your money than anyone else we know. See the value comparision chart below:
                </p>
            </div>
        </div>

        <div>
            <table className="table text-center">
                <thead className="bg-gray-200 bold strong">
                    <tr>
                        <th width="20%" className=""></th>
                        <th width="27%" className="h5 align-middle border-right border-left border-primary alert-primary">iLoveCoding</th>
                        <th width="27%" className="h5 align-middle">
                            Expensive Bootcamps
                            <br/>
                            <small>(Thinkful, General Assembly, Hack Reactor, etc.)</small>
                        </th>
                        <th width="27%" className="h5 align-middle">
                            Cheap Courses
                            <br/>
                            <small>(Udemy, Codecademy, Lynda, etc.)</small>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td className="text-right"><strong>Cost</strong></td>
                        <td className="border-right border-left border-primary border-top-0">$37/mo - $99/mo</td>
                        <td>$9500 - $19000</td>
                        <td>$12-$1000</td>
                    </tr>
                    <tr className="bg-light">
                        <td className="text-right"><strong>Complete Training</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td><CheckMark/> Yes</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No, you'll have to buy multiple courses to get the full information</td>
                    </tr>
                    <tr>
                        <td className="text-right"><strong>Focus on the right material</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td>
                            ❓ Maybe <br/>
                            Some bootcamps focus on the wrong technologies like Ruby, Rails, Python and the like, and only lightly touch the important topics.
                        </td>
                        <td>❓ Maybe<br/> Student has to find the right material constantly.</td>
                    </tr>
                    <tr className="bg-light">
                        <td className="text-right"><strong>Live mentor support</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/>Yes<br/>
                        (Premium: Live Video Call + Slack Chat; Pro: Slack Chat only)</td>
                        <td><CheckMark/> Yes</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No</td>
                    </tr>
                    <tr>
                        <td className="text-right"><strong>Bite-sized Training</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No</td>
                        <td>❓ Maybe <br/>(depends on the course author)</td>
                    </tr>
                    <tr className="bg-light">
                        <td className="text-right"><strong>Cheat sheets</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No</td>
                    </tr>
                    <tr>
                        <td className="text-right"><strong>Homework Assignments</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td><CheckMark/> Yes</td>
                        <td>❓ Maybe</td>
                    </tr>
                    <tr className="bg-light">
                        <td className="text-right"><strong>Mentor: Portfolio Help</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td><CheckMark/> Yes</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No</td>
                    </tr>
                    <tr>
                        <td className="text-right"><strong>Mentor: Career Help</strong></td>
                        <td className="border-right border-left border-primary border-top-0"><CheckMark/> Yes</td>
                        <td><CheckMark/> Yes</td>
                        <td><span className="oi oi-x text-danger" title="x" aria-hidden="true" /> No</td>
                    </tr>
                    <tr className="bg-light">
                        <td className="text-right"><strong>Intangibles</strong></td>
                        <td className="text-left border-right border-left border-primary border-top-0 border-bottom">
                            <CheckMark/> Simple Explanations <br/>
                            <CheckMark/> Focus on fundamentals<br/>
                            <CheckMark/> Real-world examples<br/>
                            <CheckMark/> Practice Projects<br/>
                            <CheckMark/> Practical advice vs Generic advice
                        </td>
                        <td>❓ Maybe</td>
                        <td>❓ Maybe</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)}
