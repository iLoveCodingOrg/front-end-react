import React from 'react'

class HomeForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form
          className="d-none d-sm-block"
          action="https://ilovecoding.us3.list-manage.com/subscribe/post?u=0bf351e3ad180589cd43cdefb&amp;id=2555c81382"
          method="post"
          id="mc-embedded-subscribe-form1"
          name="mc-embedded-subscribe-form1"
        >

          <div className="input-group">
            <input
              className="form-control form-control-lg border-primary"
              placeholder="Enter your email address"
              required
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
            />
            <input
              required
              type="hidden"
              name="TAGS_FIELD"
              value="perfect-path"
            />
            <div className="input-group-prepend">
              <input
                value="Send Me Lesson #1"
                className="btn btn-lg btn-primary rounded-right"
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </div>
        </form>

        <form
          className="d-sm-none"
          action="https://ilovecoding.us3.list-manage.com/subscribe/post?u=0bf351e3ad180589cd43cdefb&amp;id=2555c81382"
          method="post"
          id="mc-embedded-subscribe-form2"
          name="mc-embedded-subscribe-form2"
          target="_blank"
        >

          <input
            autoFocus
            className="form-control form-control-lg border-primary mb-3"
            placeholder="Enter your email address"
            required
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
          />
          <input
            value="Send Me Lesson #1"
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
          />
        </form>

        {/* <form
                    className="d-none d-sm-block"
                    action="https://www.getdrip.com/forms/924464645/submissions"
                    method="post"
                    data-drip-embedded-form="924464645"
                >
                    <div className="input-group">
                        <input
                            className="form-control form-control-lg border-primary"
                            placeholder="Enter your email address"
                            type="email"
                            id="drip-email"
                            name="fields[email]"
                            required
                        />
                        <div className="input-group-prepend">
                            <input
                                type="submit"
                                value="Send Me Lesson #1"
                                data-drip-attribute="sign-up-button"
                                className="btn btn-lg btn-primary rounded-right"
                            />
                        </div>
                    </div>
                </form> */}

        {/* <form
                    className="d-sm-none"
                    action="https://www.getdrip.com/forms/924464645/submissions"
                    method="post"
                    data-drip-embedded-form="924464645"
                >
                    <input
                        autoFocus
                        className="form-control form-control-lg border-primary mb-3"
                        placeholder="Enter your email address"
                        type="email"
                        id="drip-email"
                        name="fields[email]"
                        required
                    />
                    <input
                        type="submit"
                        value="Send Me Lesson #1"
                        className="btn btn-lg btn-primary btn-block"
                        data-drip-attribute="sign-up-button"
                    />
                </form> */}
      </div>
    )
  }
}

export default HomeForm
