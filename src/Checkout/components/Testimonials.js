import React from 'react'
import PrintReviews from '../../Reviews/components/PrintReviews'

const data = [
  // '../../Reviews/data' [3]
  {
    title: 'I am glad to having you as my mentor!',
    body: 'Wow! Amazing. I am going through your calculator tutorial at the moment and I must say it\'s something like I have never seen with other JavaScript courses (Udemy/Youtube). Thank you for making these courses/tutorials. I am learning a lot and I am glad to having you as my mentor!',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/kevin-freeman.png',
    credit1: 'Kevin Freeman (Freelance Web Developer)',
  },
  // '../../Reviews/data' [8]
  {
    title: 'He shows where these things are being used in the real world! ',
    body: 'He speaks jargon free and helps me actually keep up with the Whys, When\’s, How\’s, and Where\’s. Aziz is approachable, shoots it straight, and sincerely wants to help. More specifically, the videos are fairly quick and divided up in bite-sized readers digest versions that I understand.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/daniel-maldonado.png',
    credit1: 'Daniel Maldonado',
    credit2: 'User Interface Developer',
  },
]

class Testimonials extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="d-flex justify-content-center">
        <div className="">
          <PrintReviews
            containerClasses="flex-column"
            itemClasses="mb-3"
            data={data}
          />
        </div>
      </section>
    )
  }
}


export default Testimonials
