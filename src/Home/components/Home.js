import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectors } from '../../_user'

import HomeForm from './HomeForm'
import AboutAziz from '../../AboutAziz/AboutAziz'
import MyWorkLogos from '../../LogoList/MyWorkLogos'
import StudentCompanies from '../../LogoList/StudentCompanies'
import UsedBy from '../../LogoList/UsedBy'

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

                <div className="
                    align-self-center
                    text-center
                    my-4
                    mt-md-5
                    mx-2 mx-sm-0
                    "
                    style={{ maxWidth: '770px' }}
                >
                    {/* <p className="lead text-primary text-muted">
                        Becoming a respectable software developer is a <strong>winnable game</strong>
                    </p> */}
                    <h1>
                        I will teach you how to code and
                        become a software developer
                        {/* build awesome websites and apps */}
                    </h1>
                    <p className="h3 font-weight-light text-muted">
                        <em>
                            - even if you have failed miserably in the past!
                        </em>
                    </p>
                </div>

                <div
                    className="
                        mx-2 mx-sm-0
                        my-3
                        align-self-center
                        card
                        p-4
                        border-primary
                        bg-gray-100
                        "
                    style={{
                        maxWidth: '640px'
                    }}>
                    <div className="h4">
                    🔥 NEW: Free 7-Day Email Course
                    </div>
                    <p>
                        In this course you'll get a <em><u>jump start into programming</u></em>. I'll have you write your first few lines of professional code and even have you put your first simple little website live on the internet.
                    </p>
                    <p>
                        I will show you the <em><u>right way of thinking</u></em> so you are no longer afraid of coding - Its going to start making sense after all.
                    </p>
                    <p>
                        From theory to examples to practice, I'll show you the most effective path to becoming a job ready software developer that you've never seen before.
                    </p>
                    <p>
                        No spam. Easy unsubscribe if you hate it.
                    </p>
                    <HomeForm />
                    <p className="small mt-2 mb-0">
                        Plus: 
                        Along the way in the course, I'll also show you two little known yet Free tools used by top developers to do great work - I use the same tools on this site.
                    </p>
                    {/* <p className="mt-mb-0">
                        No prior computer science training necessary — I teach using simple words, skipping all the overly complicated language.
                    </p> */}
                </div>
                <div className="">
                    <UsedBy />
                </div>
                <div className="bg-gray-200 mt-5">
                    <div className="col-md-10 col-lg-8 mr-auto ml-auto py-5">
                        <AboutAziz />
                    </div>
                </div>
                <div className="mt-1">
                    <MyWorkLogos />
                    {/* <StudentCompanies /> */}
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