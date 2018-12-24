import React from 'react'
import { Link } from 'react-router-dom'
import HomeForm from './HomeForm'

import homePageImage from '../../_app/images/home-page-people.jpg'
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
                    <div className="col-12 col-md-7">
                        <h1 className="strong">Skip the cheap courses and the expensive bootcamps.</h1>
                        <p className="mt-4 lead">
                            Let me give you a complete step-by-step guide to becoming a confident, job-ready Front-End and/or Full-Stack Developer.
                        </p>
                        <p className="lead">
                            <strong>Get started with my FREE course:</strong>
                        </p>
                        {/* <h1 className="">Let me guide you!</h1> */}
                        {/* <h1 className="">Want to become a developer?</h1> */}
                        {/* <h1 className="">Let me guide you!</h1> */}
                        {/* <h1 className="strong">Sick of cheap courses and expensive bootcamps?</h1> */}
                        {/* <p className="mt-4 lead">
                            I get it! Learning how to code can be a confusing process. With dozens of expensive coding bootcamps and thousands of cheap courses, its tough to make a decision on <u>what to learn</u>, <u>where to learn it from</u>, and <u>how to go about it all</u>.
                        </p> */}
                        {/* <p className="lead">
                            <strong>Get started with my FREE course</strong>, where I show you a clear path to becoming a job-ready developer:
                        </p> */}
                        <HomeForm />
                        <p className="small text-center">No Spam; Easy Unsubscribe</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero