import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectors } from '../../_user'

import HomeForm from './HomeForm'
import AboutAziz from './AboutAziz'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.isLoggedIn) return <Redirect to="/dashboard" />
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>
                        iLoveCoding: Master Javascript, Learn via Video Screencasts
                    </title>
                </Helmet>
                <section className="
                    align-self-center
                    text-center
                    col-sm-12
                    col-md-8
                    col-lg-6
                    mt-3
                    mb-5
                    pb-5"
                    style={{ maxWidth: '540px' }}
                >
                    <h1 className="headline">
                        Become a confident Front-End or
                        Full-Stack Developer
                    </h1>
                    <div className="col-xs-12 text-center">
                        <p className="lead text-muted">
                            Enroll in my Free 5 lesson email course where I show you the exact strategies I used to go from a struggling newbie to a professional web developer.
                        </p>
                        <HomeForm />
                    </div>
                </section>
                <div className="bg-gray-200 mt-5">
                    <div className="container p-5">
                        <AboutAziz />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: selectors.isLoggedIn(state)
    }
}

export default connect(mapStateToProps)(Home)