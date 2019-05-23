import React from 'react'
import PrintReviews from '../../Reviews/components/PrintReviews'

const data = [
  {
    title: 'You’re hands down the best teacher I’ve found (in 3–4 years)',
    body: 'I REALLY — want to learn more stuff from you. The best thing about iLoveCoding is how great a teacher Aziz is. You know how some people are just natural teachers? That’s what you get on this site. He’s articulate, doesn’t assume you’re coming in knowing anything, and builds your knowledge from the ground up.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/kevin-b.jpeg',
    credit1: 'Kevin B. (Currently a User Interface Developer) ',
    credit2: 'from St. Louis, MO',
  },
  {
    title: 'Fortune 500 Company, Salary Doubled',
    body: 'I went from a small agency to Fortune 500 Company (Fidelity National Finance) as a full time web developer where my salary literally doubled. I by no means do not know everything about JS, but knowing the basic commands, how to create variables, functions, using AJAX, and knowing how to speak like a developer certainly helped me in landing this job',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/jason-hess.png',
    credit1: 'Jason Hess (Front-End Developer)',
    credit2: 'Flagstaff, AZ USA',
  },
  {
    title: 'Great hands-on experience',
    body: 'By following along with Aziz you not only get great hands on experience, but also insights into the thought process of a developer as they build out the types of solutions we see on the web everyday',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/robert-crocker.jpg',
    credit1: 'Robert Crocker (Technology Consultant, Startup Founder)',
    credit2: 'San Francisco, CA USA',
  },
  {
    title: 'I am glad to having you as my mentor!',
    body: 'Wow! Amazing. I am going through your calculator tutorial at the moment and I must say its something like I have never seen with other JavaScript courses (Udemy/Youtube). Thank you for making these courses/tutorials. I am learning a lot and I am glad to having you as my mentor!',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/kevin-freeman.png',
    credit1: 'Kevin Freeman (Freelance Web Developer)',
  },
  {
    title: 'He boils it down so you understand it then shows you how to apply it!',
    body: 'I did a PHP course on udemy & found the language very easy. I did 2x courses on JavaScript via udemy and honestly, really had zero idea about JS at the end of them. I found Aziz, joined iLC and wow, within weeks I was writing pure JS from scratch, using jQuery to build animations and even using API\'s. Best of all, I understood/understand it! Aziz has a unique way of teaching/explaining. It\'s hard to put into words actually. He boils it down so you understand it then shows you how to apply it. After every lesson you build something actually useful. As in, real life useful. If you have done other JS courses before & felt confused & felt maybe its not for you....give Aziz a shot! He\'ll have you confident in no time. Since doing iLC course I\'ve hired a team of full stack JS developers and it\'s been so awesome to be able to understand what they\'re doing, all thanks to Aziz.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/mike-sweeny.jpg',
    credit1: 'Mike Sweeny (Entrepreneur)',
    credit2: 'Leicester, UK',
  },
  {
    title: 'Killer course for those wanting to learn JavaScript the right way!',
    body: 'I am in the second month of Aziz\'s school and it\'s been a very eye opening experience. Coming from a front-end coding / marketing / designer perspective, my JavaScript skills have grown leaps and bounds in these last 2 months. I graduated from school with a Political Science degree, not a Computer Science degree – Aziz has a skill that communicates coding to those without the formal education in the arena. Killer course for those wanting to learn JavaScript the right way.',
    thumbSrc: '//a.ilovecoding.org/img/_reviews/kolin-karchon.jpg',
    credit1: 'Kolin Karchon (Entrepreneur & Front-End Developer)',
    credit2: 'Seattle, WS USA',
  },
]

function Testimonials({ itemNum }) {
  return (
    <section className="d-flex justify-content-center">
      <div className="
                col-md-10
                col-lg-8"
      >
        <PrintReviews
          containerClasses="flex-column"
          data={[data[itemNum || 0]]}
        />
      </div>
    </section>
  )
}

export default Testimonials
