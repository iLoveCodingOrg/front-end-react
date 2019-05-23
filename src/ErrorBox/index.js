import React from 'react'

export default class ErrorBox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    return (
      <div
        className="d-flex flex-column align-items-center"
        onClick={() => Raven.lastEventId() && Raven.showReportDialog()}
      >
        <div className="alert alert-danger d-inline-block mt-3">
                    We're sorry — something's gone wrong.
          {' '}
          <br />
                    Our team has been notified, but click here fill out a report.
        </div>
        <img src="https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif" />
      </div>
    )
  }
}
