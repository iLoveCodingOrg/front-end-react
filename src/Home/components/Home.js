import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { selectors } from '../../_user'
import { Link } from 'react-router-dom'

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
                <div className="my-5 bg-gray-100 py-5 container-fluid border-top">
                    <SocialProof />
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <div className="col-12 col-md-5">
                        <h3 className="h2 text-center mb-4">Skip the cheap courses and the expensive bootcamps!</h3>
                        {/* <h3 className="h2 text-center mb-4">Learn to code so well, that you can confidently build real-world apps, build an impressive portfolio and pass that tricky interview!</h3> */}
                        <p className="lead mb-5">
                            I get it! Learning how to code can be a confusing process. With dozens of expensive coding bootcamps and thousands of cheap courses, its tough to make a decision on <u>what to learn</u>, <u>where to learn it from</u>, and <u>how to go about it all</u>.
                        </p>
                        <p className="lead mb-5">
                            <Link to="/pages/how-it-works">iLoveCoding is different!</Link> we give you a complete roadmap, complete video training and mentor support every step of the way till you achieve your goal.
                        </p>
                        <p className="lead mb-5">
                            Whether you want to become job-ready, start your freelancing business or launch your tech startup, iLoveCoding will give you the <strong>complete technical skills</strong> to make that possible.
                        </p>
                        <p className="lead mb-5">
                            Programming has a lot of "big words"! These words look and sound complicated on the surface, but if understood correctly, they are very simple. In my training, I explain these big words and new concepts in a simple manner so you not only <strong>think like a developer, but you also talk like one.</strong>
                        </p>
                        <p className="lead mb-5">
                            Every time I teach something new, I show you how to use that new concept to build something practical; This way you know the theory and the <strong>practical use-case</strong> of each new concept.
                        </p>
                        <p className="lead mb-5">
                            iLoveCoding makes you a <strong>highly-skilled</strong> Front-End and Full-Stack JavaScript developer, who can build websites, web apps, mobile apps and even desktop apps. Yes our curriculum is that solid. <Link to="/curriculum">See the Full Curriculum</Link>
                        </p>
                        <p className="lead mb-5">
                            <strong>Have more questions?</strong> email <a href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>, and we'd be happy to answer them.
                        </p>
                        <p className="text-center">
                            <Link to="pricing" className="btn btn-lg btn-primary">Get Started Now</Link>
                        </p>
                    </div>
                </div>
                {/* <div className="bg-gray-100 border-top mt-5">
                    <div className="col-md-10 col-lg-8 mr-auto ml-auto py-5">
                        <AboutAziz />
                        <MyWorkLogos />
                    </div>
                </div> */}
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