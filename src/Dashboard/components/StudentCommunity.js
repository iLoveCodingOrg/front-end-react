import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isPaid } from '../../_user/selectors'

function StudentCommunity({ isPaid }) {
  return (
    <div>
      <h4>Private Student Community</h4>
      <ul className="list-unstyled">
        {
          isPaid
            ? (
              <p>
                <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/ilovecoding/shared_invite/enQtNTIzNTI3MDIyNTY1LWE2Njc4YmU0MDkyN2EzYzA0YWU1YTE5ODU1OTA1OWNlNWE3ZGE1ZTg2MjQ0MDIzMmM4MWMxM2NiNmVjYjQyZmY">Join the Mentor-Moderated Private Student Community (on Slack).</a>
                <br />
                <br />
                I have a
                {' '}
                <strong>"no-student left behind"</strong>
                {' '}
                policy! and to support that, I have created this
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/ilovecoding/shared_invite/enQtNTIzNTI3MDIyNTY1LWE2Njc4YmU0MDkyN2EzYzA0YWU1YTE5ODU1OTA1OWNlNWE3ZGE1ZTg2MjQ0MDIzMmM4MWMxM2NiNmVjYjQyZmY">Private Student Community</a>
                {' '}
                for you to keep in touch with me.
                <br />
                <br />
                Ask questions and get help. Make a point to help others, this will not only help your peers, it will actually exercise your ability to solve problems.
              </p>
            )
            : (
              <p>
                <Link to="pricing">Upgrade to iLoveCoding PRO / PREMIUM</Link>
                {' '}
                to unlock the private student community.
                <Link to="pricing" className="badge badge-pill badge-success">Upgrade to PRO / PREMIUM</Link>
              </p>
            )
        }
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isPaid: isPaid(state),
  }
}

export default connect(mapStateToProps)(StudentCommunity)
