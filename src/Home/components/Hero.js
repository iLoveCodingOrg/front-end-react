import React from 'react'
import { Link } from 'react-router-dom'
import HomeForm from './HomeForm'

import homePageImage from '../../_app/images/home-page-people.jpg'
import homePageImage2 from '../../_app/images/skill-path.png'
import { Video } from '../../Video'

class Hero extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="
                    container
                    my-4
                    mt-md-5
                    "
                >
                <div className="row flex-md-row-reverse">
                    <div className="col-12 col-md-5 col-lg-5">
                        <img className="w-100" src={homePageImage} alt="People"/>
                    </div>
                    <div className="col-12 col-md-7 justify-content-center">
                        <p className="h3">Learn to Code with Confidence</p>
                        <h1 className="strong mb-4">Complete Video Training + Mentor Support</h1>
                        <p className="lead mb-5 line-height-2">
                            Get everything you need to become a <u>job-ready</u>, <u>interview-ready</u>, <u>portfolio-ready</u>, and <u>launch-your-idea-ready</u> Front-End and/or Full-Stack JavaScript Developer.
                        </p>
                        <Link to="/pricing" className="btn btn-lg btn-primary">Get Started Now</Link>
                        <Link to="/pages/how-it-works" className="btn-link btn-lg">Or see How it works</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero