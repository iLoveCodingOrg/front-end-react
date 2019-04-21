import React from 'react'
import { Helmet } from 'react-helmet'

class Pricing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="pricing-page" className="d-flex flex-column">
                <Helmet>
                    <title>Pricing - iLoveCoding</title>
                </Helmet>

                <p className="alert alert-info lead text-center">
                    <strong>Sorry, Training is closed!</strong><br/>
                    iLoveCoding is currently not accepting new students. Please get on the wait list, and we'll inform you when the training re-opens.
                </p>
                <h1 className="text-center">Get on the waitlist</h1>
                <form
                    className="mt-5 col-lg-6 col-md-8 mx-auto"
                    action="https://ilovecoding.us3.list-manage.com/subscribe/post?u=0bf351e3ad180589cd43cdefb&amp;id=2555c81382" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label strong" htmlFor="mce-EMAIL">Email Address</label>
                        <div className="col-md-9">
                            <input  type="email" name="EMAIL" className="form-control form-control-lg required email" id="mce-EMAIL" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label strong" htmlFor="mce-FNAME">First Name </label>
                        <div className="col-md-9">
                            <input  type="text" name="FNAME" className="form-control form-control-lg" id="mce-FNAME" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label strong" htmlFor="mce-LNAME">Last Name </label>
                        <div className="col-md-9">
                            <input  type="text" name="LNAME" className="form-control form-control-lg" id="mce-LNAME" />
                        </div>
                    </div>
                    <div className="clear"><input type="submit" value="Get me on the wait list" name="subscribe" id="mc-embedded-subscribe" className="my-3 btn btn-lg btn-primary btn-block" /></div>
                </form>
            </div>
        )
    }
}
export default Pricing