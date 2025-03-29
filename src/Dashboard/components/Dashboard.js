import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Video } from '../../Video'
import PremiumSection from './PremiumSection'
import StudentCommunity from './StudentCommunity'

export default function () {
  return (
    <div className="flex flex-column">
      <Helmet>
        <title>Dashboard - iLoveCoding</title>
      </Helmet>
      <section className="
                align-self-center
                container
                mt-1
                mb-3"
      >
        <div className="flex flex-wrap">
          <div className="flex-3" style={{ flexBasis: '300px' }}>
            <h1 className="headline">Dashboard</h1>
            <h3 className="f-300 color-gray">
              Here you will find quick links to resources which are included in your membership.
            </h3>
          </div>
          <div className="flex-1" style={{ flexBasis: '250px' }}>
            <Video videoSource="6rH9BULLa9w" />
          </div>
        </div>
        <hr className="mb--25" />
        <div>
          <div className="grid mt-3" style={{ gridTemplateColumns: '2fr 3fr' }}>
            <div>
              <h3>Start Training</h3>
              <ul className="list-unstyled">
                <li><Link to="/curriculum">Full Curriculum</Link></li>
                {/* <li><Link to="/courses/core">Core Training</Link></li>
                <li><Link to="/courses/projects">Practice Projects</Link></li> */}
                <li className="d-inline-block"><Link to="/pages/resources">Tools &amp; Resources</Link></li>
              </ul>
            </div>

            <div>
              <StudentCommunity />
            </div>

            <div>
              <h3>Account Settings</h3>
              <ul className="list-unstyled">
                <li><Link to="/change-password">Change Password</Link></li>
                <li className="d-inline-block pt--5 mt--5 b bt-1">
                  Contact:
                  {' '}
                  <a href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
                </li>
              </ul>
            </div>
            <div>
              <PremiumSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
