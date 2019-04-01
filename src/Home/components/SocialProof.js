import React from 'react'
import PrintReviews from '../../Reviews/components/PrintReviews'

const data = [{
    title: 'I find your videos very informative',
    body: 'The knowledge is presented in a way that suits me and my current programming knowledge which is more of the hobby side. Keep up and well done for the things you’ve done so far.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/ivaylo-yosifov.gif',
    credit1: 'Ivaylo Yosifov',
    credit2: ''
}
    , {
    title: '',
    body: 'I really love this site I always wanted to learn to code but never had the money to pay for school and this will make one of my wishes become reality.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/ryan-dracula.gif',
    credit1: 'Ryan Dracula',
    credit2: 'Suriname, South America'
}
    , {
    title: '',
    body: 'Awesome man, keep up a good work. I love what you do (For real). I think you do good as a pseudo coder. You are not only knowing your material, but the most, you can teach clearly . I am so lucky to find your site.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/francis.jpg',
    credit1: 'Francis',
    credit2: ''
}]

class SocialProof extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                    <div className="">
                        <h3 className="text-center mb-4"><u>10,751 students</u> learned coding from iLoveCoding last month (Mar 2019);
                        <br/> Here's what some of them had to say:</h3>
                        <PrintReviews
                            containerClasses=""
                            itemClasses="col-md-3 mr-2"
                            data={data} />
                    </div>
        )
    }
}

export default SocialProof