import React from 'react'
import { Link } from 'react-router-dom'
import { PrintTestimonials } from '../'

const data = [
    {
        title: 'You’re hands down the best teacher I’ve found (in 3–4 years)',
        body: 'I REALLY — want to learn more stuff from you The best thing about iLoveCoding is how great a teacher Aziz is. You know how some people are just natural teachers? That’s what you get on this site. He’s articulate, doesn’t assume you’re coming in knowing anything, and builds your knowledge from the ground up.',
        thumbSrc: 'https://cdn-images-1.medium.com/max/1600/1*BNTQnmPKkx8_z-tPwTv6rQ.jpeg',
        credit1: 'Kevin B. from St. Louis, MO',
        credit2: 'Currently a User Interface Developer'
    },
    {
        title: 'Fortune 500 Company, Salary Doubled',
        body: 'I went from a small agency to Fortune 500 Company (Fidelity National Finance) as a full time web developer where my salary literally doubled. I by no means do not know everything about JS, but knowing the basic commands, how to create variables, functions, using AJAX, and knowing how to speak like a developer certainly helped me in landing this job',
        thumbSrc: 'https://cdn-images-1.medium.com/max/1600/1*U5UxTlEx3kPer0hoG63lHg.png',
        credit1: 'Jason Hess (Front-End Developer)',
        credit2: 'Flagstaff, AZ USA'
    }
]
class Testimonials extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="d-flex justify-content-center">
                <div className="
                    col-md-10
                    col-lg-8">
                <PrintTestimonials
                    itemClasses="blockquote"
                    data={data} />
                </div>
            </section>
        )
    }
}


export default Testimonials