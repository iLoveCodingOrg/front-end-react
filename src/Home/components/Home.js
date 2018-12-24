import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectors } from '../../_user'

import Hero from './Hero'
import AboutAziz from '../../AboutAziz/AboutAziz'
import MyWorkLogos from '../../LogoList/MyWorkLogos'
import UsedBy from '../../LogoList/UsedBy'
import SocialProof from './SocialProof'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.isLoggedIn) return <Redirect to="/dashboard" />
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>iLoveCoding: Master JavaScript, Learn via Video Screencasts</title>
                    <meta name="description" content="iLoveCoding teaches you how to think and build like a software developer focusing on Full-Stack JavaScript development."/>
                </Helmet>
                <Hero />
                <SocialProof />
                <UsedBy />
                <div className="bg-gray-200 mt-5">
                    <div className="col-md-10 col-lg-8 mr-auto ml-auto py-5">
                        <AboutAziz />
                    </div>
                </div>
                <div className="mt-1">
                    <MyWorkLogos />
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