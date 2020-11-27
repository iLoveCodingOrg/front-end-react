import React from 'react'
import PrintReviews from '../../Reviews/components/PrintReviews'
import { lastMonthViews } from '../../_app/constants'

const add = (a, b) => a + b

function getMonthName(delta = 0) {
  const lastMonthIndex = add((new Date()).getMonth(), delta)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[lastMonthIndex]
}

const data = [{
  title: 'I find your videos very informative',
  body: 'The knowledge is presented in a way that suits me and my current programming knowledge which is more on the hobby side. Keep up and well done for the things you’ve done so far.',
  thumbSrc: '//a.ilovecoding.org/img/_reviews/ivaylo-yosifov.gif',
  credit1: 'Ivaylo Yosifov',
  credit2: '',
},
{
  title: '',
  body: 'I really love this site. I always wanted to learn to code but never had the money to pay for school. And this will make one of my wishes become reality.',
  thumbSrc: '//a.ilovecoding.org/img/_reviews/ryan-dracula.gif',
  credit1: 'Ryan Dracula',
  credit2: 'Suriname, South America',
},
{
  title: '',
  body: 'Awesome man, keep up the good work! I really love what you do (For real). I think you do good as a pseudo coder. You not only know your material, but most importantly you can teach clearly. I am so lucky to find your site.',
  thumbSrc: '//a.ilovecoding.org/img/_reviews/francis.jpg',
  credit1: 'Francis',
  credit2: '',
}]

function SocialProof() {
  return (
    <div className="container">
      <h3 className="t-center mb-2">
        <u>{lastMonthViews} students</u>
        {' '}
        learned coding from iLoveCoding last month ({getMonthName(-1)} {(new Date()).getFullYear()})
        <br />
        {' '}
        Here&apos;s what some of them had to say:
      </h3>
      <PrintReviews
        containerClasses=""
        itemClasses="mr--5"
        data={data}
      />
    </div>
  )
}


export default SocialProof
