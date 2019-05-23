import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="d-flex justify-content-center">
        <div className="container">
          <div className="text-center">
            <h1>
                            Complete Video Training &amp; Mentor Support.
            </h1>
            <p className="lead">
                            Become a
              {' '}
              <u>Job-Ready</u>
              {' '}
Front-End and Full-Stack JavaScript Developer with Confidence.
              <br />
                            No more confusing explanations and boring theory. Learn while building real-world projects.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
