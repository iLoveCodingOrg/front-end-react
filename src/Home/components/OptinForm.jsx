import React from 'react'

function OptinForm() {
  return (
    <>
      {/* <form
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
          className="form-control form-control-lg border-primary mb-1"
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
      </form> */}

      {/* <form
        className="d-none d-sm-block"
        action="https://www.getdrip.com/forms/419499831/submissions"
        method="post"
        data-drip-embedded-form="419499831"
      >
        <div className="flex flex-wrap justify-content-center">
          <input
            className="form-control form-control-lg b-blue m--25"
            placeholder="Enter your email address"
            type="email"
            id="drip-email"
            name="fields[email]"
            required
          />
          <input
            type="submit"
            value="Send Me Lesson #1"
            data-drip-attribute="sign-up-button"
            className="btn btn-lg btn-primary btn-block m--25"
          />
        </div>
      </form> */}
      <form
        className="d-none d-sm-block"
        action="https://app.birdsend.co/subscribe"
        method="post"
        bs-form
      >
        <div className="flex flex-wrap justify-content-center">
          <input type="hidden" name="meta_id" value="10951" />
          <input type="hidden" name="meta_user_id" value="2413" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="form-control form-control-lg b-blue m--25"
            required
            />
          <input
            type="submit"
            value="Send Me Lesson #1"
            className="btn btn-lg btn-primary btn-block m--25"
            />
          <div id="bs-message"></div>
        </div>
      </form>
    </>
  )
}

export default OptinForm
