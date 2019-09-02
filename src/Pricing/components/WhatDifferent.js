import React from 'react'
import { CheckMark } from '../../_common'
import Video from '../../Video/components/Video'

export default function () {
  return (
    <div className="container">
      <div className="grid-list-item align-items-center mb-2">
        <div><Video videoSource="311500900" /></div>
        <div>
          <h2>How is iLoveCoding Different?</h2>
          <h3 className="f-300">
            iLoveCoding gives more value for your money than anyone else we know. See the value comparison chart below:
          </h3>
        </div>
      </div>
      <div>
        <table className="table t-center">
          <thead className="bg-gray-lighter strong">
            <tr>
              <th width="20%" />
              <th width="27%" className="h4 align-middle b bt-1 bb-0 bx-1 b-blue alert-primary">
                iLoveCoding Premium
                {/* <br />
                <small>Premium)</small> */}
              </th>
              <th width="27%" className="h5 align-middle">
                Expensive Bootcamps
                <br />
                <small>(Thinkful, General Assembly, Hack Reactor, etc.)</small>
              </th>
              <th width="27%" className="h5 align-middle">
                Cheap Courses
                <br />
                <small>(Udemy, Codecademy, Lynda, etc.)</small>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="t-right"><strong>Cost</strong></td>
              <td className="b by-0 bx-1 b-blue">$199/mo</td>
              <td>$9500 - $19000</td>
              <td>$12-$1000</td>
            </tr>
            <tr className="bg-gray-lightest">
              <td className="t-right"><strong>Complete Training</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No, you'll have to buy multiple courses to get the full information
              </td>
            </tr>
            <tr>
              <td className="t-right"><strong>Focus on the right material</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                ❓ Maybe
                {' '}
                <br />
                Some bootcamps focus on the wrong technologies like Ruby, Rails, Python and the like, and only lightly touch the important topics.
              </td>
              <td>
                ❓ Maybe
                <br />
                {' '}
                Students have to find the right material by themselves constantly.
              </td>
            </tr>
            <tr className="bg-gray-lightest">
              <td className="t-right"><strong>Live mentor support</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                Yes
                <br />
                Live Weekly Video Calls + Slack Chat
              </td>
              <td>
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No
              </td>
            </tr>
            <tr>
              <td className="t-right"><strong>Bite-sized Training</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No
              </td>
              <td>
                <span role="img" aria-label="Question mark">❓</span>
                {' '}
                Maybe
                <br />
                (depends on the course author)
              </td>
            </tr>
            <tr className="bg-gray-lightest">
              <td className="t-right"><strong>Cheat sheets</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No
              </td>
            </tr>
            <tr>
              <td className="t-right"><strong>Homework Assignments</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span role="img" aria-label="Question mark">❓</span>
                {' '}
                Maybe
              </td>
            </tr>
            <tr className="bg-gray-lightest">
              <td className="t-right"><strong>Mentor: Portfolio Help</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No
              </td>
            </tr>
            <tr>
              <td className="t-right"><strong>Mentor: Career Help</strong></td>
              <td className="b by-0 bx-1 b-blue">
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <CheckMark />
                {' '}
                Yes
              </td>
              <td>
                <span className="oi oi-x color-red" title="x" aria-hidden="true" />
                {' '}
                No
              </td>
            </tr>
            <tr className="bg-gray-lightest">
              <td className="t-right"><strong>Intangibles</strong></td>
              <td className="t-left b bt-0 bb-1 bx-1 b-blue">
                <CheckMark />
                {' '}
                Simple Explanations
                <br />
                <CheckMark />
                {' '}
                Focus on fundamentals
                <br />
                <CheckMark />
                {' '}
                Real-world examples
                <br />
                <CheckMark />
                {' '}
                Practice Projects
                <br />
                <CheckMark />
                {' '}
                Practical advice vs generic advice
              </td>
              <td>
                <span role="img" aria-label="Question mark">❓</span>
                {' '}
                Maybe
              </td>
              <td>
                <span role="img" aria-label="Question mark">❓</span>
                {' '}
                Maybe
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
