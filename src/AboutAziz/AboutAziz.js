import React from 'react'

class AboutAziz extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="flex-row">
                <img
                    className="float-left rounded-circle mb-2 mr-3"
                    src="//a.ilovecoding.org/img/_aziz/azizali-150.jpg" alt="Aziz Ali Profile Picture"
                />
                <div>
                    <h3>Hi, I’m your instructor Aziz Ali</h3>
                    <div className="blockquote">
                        <p>
                            A few years ago I was in your shoes - Afraid of programming. I thought coding was for geniuses and I was not smart enough to code. I wanted to make great websites and launch my startup so I tried to learn through cheap and free online courses and even hired a professional developer to teach me. Heck I even took coding classes in my university and nothing worked.
                        </p>
                        <p>I gave up on coding for 9 years.</p>
                        <p>Discouraged and demoralized with my confidence crushed.</p>
                        <p>
                            It was not until 5 years ago in the month of June that I stumbled upon a method that changed things for me. I went from someone who struggled to understand even the basics of programming to becoming good enough to landing my first job as a professional developer. All within 5 months. Since then I have worked at United Airlines, CVS Health, and a couple of healthcare and technology startups building modern websites and apps for them.
                        </p>
                        <p>
                            Using my process, I have taught programming to thousands of students via this very website. My students work at Twitter, Sony Ericsson, CVS Caremark and hundreds of smaller companies as salaried employees or independent contractors (freelancers).</p>
                        <p>
                            Here on this website, I openly and transparently share my process, methodology and training that made the difference for me. I hope it does the same magic for you, as it did for me and countless others.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutAziz