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
                <div className="row flex-lg-row-reverse">
                    <div className="col-12 col-md-7 col-lg-6">
                        <img className="w-100" src={homePageImage} alt="People"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="">
                            Become a skilled JavaScript developer.
                        </h1>
                        <p className="h3 font-weight-light text-muted mb-4">
                            Learn to build real world apps and think like a software engineer - Yup finally!
                        </p>
                        

                        <Link className="btn btn-lg btn-primary" to="/pricing">Become a member</Link>
                        &nbsp;
                        <Link className="btn btn-lg u" to="/pages/how-it-works">or See How it Works</Link>
                        <p className="mt-4 lead">
                            I get it! Learning how to code can be a confusing process. With dozens of expensive coding bootcamps and thousands of cheap courses, its tough to make a decision on <u>what to learn</u>, <u>where to learn it from</u>, and <u>how to go about it all</u>.
                        </p>
                        <p className="lead">
                            The good news? <Link to="/pages/how-it-works" className="u">iLoveCoding is different</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero