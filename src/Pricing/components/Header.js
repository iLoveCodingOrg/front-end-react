import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="d-flex justify-content-center">
                <div className="
                    col-md-10
                    col-lg-8">
                    <h1 className="text-center">
                        Become a Ninja Developer even if you have never written a single line of code in your life.
                    </h1>
                    <p className="lead text-muted">
                        Using my 3x Metholody, you will achieve success even if:
                    </p>
                    <ul className="lead text-muted">
                        <li>...you are limited on time, and have a super busy schedule</li>
                        <li>...you have taken dozens of coding courses and not made progress</li>
                        <li>...you attended a coding bootcamp and have an heartache with the money you have lost</li>
                        <li>...you are a little older in age, and think its too late for you</li>
                        <li>...you have zero-confidence in your ability and are scared to death about navigating into a new career</li>
                    </ul>
                    <p className="lead text-muted">
                        Here you will find quick links to resources which are included in your enrollment.
                    </p>
                </div>
            </section>
        )
    }
}

export default Header