import React from 'react'
import PrintReviews from '../../Reviews/components/PrintReviews'
import { lastMonthViews } from '../../_app/constants'

function getMonthName(delta = 0) {
  const date = new Date()
  date.setMonth(date.getMonth() + delta)
  const lastMonthIndex = date.getMonth()

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


function getYearOftMonth(delta) {
  const date = new Date()
  date.setMonth(date.getMonth() + delta)
  return date.getFullYear()
}

function getMonthAndYear(delta) {
  const monthName = getMonthName(delta)
  const year = getYearOftMonth(delta)
  return `${monthName} ${year}`
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
        learned coding from iLoveCoding last month ({getMonthAndYear(-1)})
        <br />
        {' '}
        Here&apos;s what some of them had to say:
      </h3>
      <PrintReviews
        containerClasses=""
        data={data}
      />
    </div>
  )
}


export default SocialProof
