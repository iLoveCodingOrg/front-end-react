import React from 'react'
import { CheckMark } from '../../_common'
import oldWay from '../../_app/images/old-way.webp'
import newWay from '../../_app/images/new-way.webp'

export default function ({ id, className }) {
  return (
    <div id={id} className={className}>
      <h2 className="t-center">A Structured Way to Learn to Code</h2>
      <div className="flex space-around">
        <div className="w-50 p-1">
          <h4 className="t-center">Old way to learn</h4>
          <img className="img-fluid p-2" src={oldWay} alt="Old way to learn how to code" />
          <div>
            <div>
              <span className="oi oi-x color-red" title="x" aria-hidden="true" />&nbsp;
              Google tirelessly for solutions
            </div>
            <div>
              <span className="oi oi-x color-red" title="x" aria-hidden="true" />&nbsp;
              Blindly copy-paste code from stackoverflow
            </div>
            <div>
              <span className="oi oi-x color-red" title="x" aria-hidden="true" />&nbsp;
              Running away from reading documentation
            </div>
            <div>
              <span className="oi oi-x color-red" title="x" aria-hidden="true" />&nbsp;
              Stare at blank screens, being clueless where to begin
            </div>
            <div>
              <span className="oi oi-x color-red" title="x" aria-hidden="true" />&nbsp;
              Focus on memorizing code and language features
            </div>
            <div>
              <span className="oi oi-x color-red" title="x" aria-hidden="true" />&nbsp;
              Use multiple courses and piecing together information
            </div>
          </div>
        </div>
        <div className="w-50 p-1">
          <h4 className="t-center">New way to learn</h4>
          <img className="img-fluid p-2" src={newWay} alt="New way to learn how to code" />
          <div>
            <div><CheckMark /> Write your own solutions confidently</div>
            <div><CheckMark /> Understand code snippets of other devs &amp; write code intentfully</div>
            <div><CheckMark /> Read original documentation with ease</div>
            <div><CheckMark /> Know how to breakdown problem and code in proper order</div>
            <div><CheckMark /> Focus on building small projects for fun</div>
          </div>
        </div>
      </div>
    </div>
  )
}
