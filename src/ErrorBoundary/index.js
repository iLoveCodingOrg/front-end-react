import React from 'react'
import { logError } from '../_app/logService'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    logError(error, { extra: errorInfo })
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return (
        <div
          className="snap"
          onClick={() => Raven.lastEventId() && Raven.showReportDialog()}
        >
          <img src="https://media.giphy.com/media/13ywPzPJdfhmBG/giphy.gif" />
          <p>We're sorry — something's gone wrong.</p>
          <p>Our team has been notified, but click here fill out a report.</p>
        </div>
      )
    }
    // when there's not an error, render children untouched
    return this.props.children
  }
}
