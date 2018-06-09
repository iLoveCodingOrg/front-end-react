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

                    <h1><span className="text-muted">Introducing:</span> Full Stack Mastery</h1>
                    <p className="lead">
                        A comprehensive and complete traing that has helps 3000+ developers learn how to code and build awesome websites and mobile apps
                    </p>
                    <hr/>
                    <p className="">
                        Using my 3x Metholody, you will achieve success even if:
                    </p>
                    <ul className="">
                        <li>...you have never written a single line of code ever</li>
                        <li>...you are limited on time, and have a super busy schedule</li>
                        <li>...you have taken dozens of coding courses and not made progress</li>
                        <li>...you attended a coding bootcamp and have an heartache with the money you have lost</li>
                        <li>...you are a little older in age, and think its too late for you</li>
                        <li>...you have zero-confidence in your ability and are scared to death about navigating into a new career</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header