import React from 'react'
import { Helmet } from 'react-helmet'
import { EASY_WEBINAR_WIDGET_JS } from '../../_app/constants'

export default class GroupCall extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = EASY_WEBINAR_WIDGET_JS
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    return (
      <div className="flex flex-column">
        <Helmet>
          <title>Weekly Group Video-Calls - iLoveCoding</title>
        </Helmet>
        <div className="container align-self-center mt-1 mb-3">
          <h1>Weekly Group Video-Calls</h1>
          <h3 className="f-300">Register to the next upcoming weekly group video-call</h3>
          <div className="card card-info pb-0">
            <h5>
              Please come to the call prepared
            </h5>
            <ol>
              <li>Write all your questions down.</li>
              <li>If you need to discuss some code challenges, have your computer and project ready.</li>
            </ol>
          </div>

          <div className="widget_wrapper">
            <div
              className="ewp_form_container ewp_widget_container"
              webinar_id="7TeZqZ7i2W+C+GVXkbe9OA=="
            />
          </div>
        </div>
      </div>
    )
  }
}
