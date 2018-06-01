import React from 'react'

class AboutAziz extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="flex-row">
                <img
                    className="float-left rounded-circle mr-3"
                    src="https://ilovecoding-assets.s3.amazonaws.com/img/azizali-150-129x129.png" alt="Aziz Ali Profile Picture" width="150" height="150"
                />
                <div>
                    <h3>Hi, I’m your instructor Aziz Ali</h3>
                    <blockquote class="blockquotez">
                        <p>
                            After running away from coding for 9 years, I decided to face my demons. I committed to learning the most popular programming language on the planet – Javascript, and landed my <a title="How I landed my first Javascript Development Job and got 6 figures for it" href="https://blog.ilovecoding.org/6-figure-developer-job/">first 6-figure programming job</a>. I have made dozens of websites and applications and also worked on the Kiosk Application that runs on the United Airlines Airport terminal. Yup its made with Javascript. <a title="Aziz Ali, Founder of iLoveCoding" href="https://ilovecoding.org/pages/aziz-ali">Read more about me</a> and the story of <a title="About iLoveCoding" href="https://ilovecoding.org/pages/about">how iLoveCoding started</a>
                        </p>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default AboutAziz