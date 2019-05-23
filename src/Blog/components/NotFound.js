import React from 'react'

class NotFound extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1>Blog post not found :-(</h1>
        <p className="lead">
                    Oops, you landed out of the internet! The page you are looking for does not exist
        </p>
        <img src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif" />
      </div>
    )
  }
}

export default NotFound
