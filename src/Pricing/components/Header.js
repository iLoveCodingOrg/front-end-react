import React from 'react'

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
                    
                    <h2 class="text-center">
                        Better than a coding bootcamp at 2% of the cost
                    </h2>
                    <h1 class="text-center">
                        <span className="text-muted">Introducing:</span> Full-Stack Mastery
                    </h1>
                    <p className="lead">
                        A comprehensive and complete training that has helped 3000+ developers learn how to code and build awesome websites and mobile apps
                    </p>
                    <hr/>
                    <p>
                        Using my practice-focused, fundamentals-first learning methodology, you will achieve success even if:
                    </p>
                    <ul>
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