import React from 'react'
import { Link } from 'react-router-dom'
import modules from '../../_app/images/get/modules.jpg'
import community from '../../_app/images/get/community.jpg'
import mentorship from '../../_app/images/get/mentorship.jpg'
import { CheckMark } from '../../_common'
import Video from '../../Video/components/Video'

export default function () {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-md-10 col-lg-8 row mb-4">
        <div className="col-md-5">
          <Video videoSource="311500556" />
        </div>
        <div className="col-md-7">
          <h2>What do you get?</h2>
          <p className="lead">
            With any iLoveCoding paid membership you get access to Complete Training, and Mentor-Moderated Private Student Community
          </p>
        </div>
      </div>

      <div className="col-md-10 col-lg-9 flex-column align-items-center">
        <div className="bg-white rounded p-4">
          <div className="row mb-5">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src={modules} alt="All Modules" className="w-100" style={{ maxWidth: '300px' }} />
            </div>
            <div className="col-lg-8 pl-lg-5">
              <h4>
                (A) Complete Step-by-Step Training (
                <Link to="curriculum">See Full Curriculum</Link>
                )
              </h4>
              <p>
                40+ hours of video training organized such that it is easy to make progress.
              </p>
              <CheckMark />
              {' '}
              5 Modules (11+ Courses, 20+ practice projects)
              <br />
              <CheckMark />
              {' '}
              Module 1: Fundamentals of Programming and Web
              <br />
              <CheckMark />
              {' '}
              Module 2: Modern Front-End Development
              <br />
              <CheckMark />
              {' '}
              Module 3: Back-end Development and Databases
              <br />
              <CheckMark />
              {' '}
              Module 4: Mobile Development (iOS and Android)
              <br />
              <CheckMark />
              {' '}
              Module 5: Electives (Git, Working with API, etc.)
              <br />
              <CheckMark />
              {' '}
              Downloadable Cheat Sheets
              <br />
              <CheckMark />
              {' '}
              Access to Homework
              <br />
              <Link to="curriculum">See Full Curriculum</Link>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src={community} alt="Slack Student Community" className="border w-100" style={{ maxWidth: '300px' }} />
            </div>
            <div className="col-lg-8 pl-lg-5">
              <h4>(B) Mentor-Moderated Student Community</h4>
              <p>Never get stuck again! Get answers to your specific questions from your peers and mentor in the member-only slack channel.</p>
              <CheckMark />
              {' '}
              Get solution to your problem
              <br />
              <CheckMark />
              {' '}
              Learn from your peers
              <br />
              <CheckMark />
              {' '}
              Get career, code, and project help
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src={mentorship} alt="Live Mentorship" className="border w-100" style={{ maxWidth: '300px' }} />
            </div>
            <div className="col-lg-8 pl-lg-5">
              <h4>
                (C) Weekly Group Calls with Mentor
                {' '}
                <span className="badge badge-success">Premium</span>
              </h4>
              <p>Every week you join a live group call with your mentor.</p>

              <CheckMark />
              {' '}
              Work on your code problems live
              <br />
              <CheckMark />
              {' '}
              See how your mentor troubleshoots problems
              <br />
              <CheckMark />
              {' '}
              Share your screen with your mentor
              <br />
              <CheckMark />
              {' '}
              Live code reviews
              <br />
              <CheckMark />
              {' '}
              Live career guidance
              <br />
              <CheckMark />
              {' '}
              Live resume, code and portfolio feedback
              <br />

              <br />
              {/* <p>
                <strong>Important:</strong>
                {' '}
                Weekly Group Calls are for iLoveCoding Premium members only. iLoveCoding Pro members can always get help from mentor in the Mentor-Moderated Private Student Community.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
