import React from 'react'

import PrintTraining from './PrintTraining'

const courses = [
  {
    name: 'The Perfect Path to becoming a job-ready developer',
    link: '/courses/perfect-path',
    thumbSrc: '//a.ilovecoding.org/thumb/perfect-path.jpg',
  },
  {
    name: 'Learn HTML & CSS Correctly',
    link: '/courses/htmlcss2',
    thumbSrc: '//a.ilovecoding.org/thumb/htmlcss2.gif',
  },
  {
    name: 'Learn JavaScript Correctly',
    link: '/courses/js2',
    thumbSrc: '//a.ilovecoding.org/thumb/js2.gif',
  },
  {
    name: 'Going Live: Putting Your Website Live',
    link: '/courses/going-live',
    thumbSrc: '//a.ilovecoding.org/thumb/goingLive-part1.png',
  },
]

const practice = [
  {
    name: 'Project: Create a blog design from scratch using HTML and CSS',
    link: '/courses/htmlcss2/lessons/blog-design',
    thumbSrc: '//a.ilovecoding.org/thumb/HTMLCSS14-9-myBlogDesign-part1.png',
  },
  {
    name: 'Build a stopwatch app with pure JavaScript',
    link: '/courses/stopwatch',
    thumbSrc: '//a.ilovecoding.org/thumb/stopWatch.png',
  },
  {
    name: 'Build a simple To-Do App with pure JavaScript',
    link: '/courses/js2/lessons/todolist-app',
    thumbSrc: '//a.ilovecoding.org/thumb/todolist-app.jpg',
  },
  {
    name: 'Build a Rock Paper Scissor app with pure JavaScript',
    link: '/courses/rock-paper-scissor',
    thumbSrc: '//a.ilovecoding.org/thumb/rockPaperScissor.png',
  },
  {
    name: 'Project: Build Your Own Snake Game with JavaScript',
    link: '/courses/snake-game',
    thumbSrc: '//a.ilovecoding.org/thumb/snakegame.jpg',
  },
]

export default () => (
  <section className="bg-gray-lightest p-2 my-3 b bt-1">
    <div>
      <h2>
        <small className="d-block color-gray t-uppercase h4">
          Module 1:
        </small>
        Fundamentals
      </h2>
      <h3 className="f-300 color-gray">
        Learn the fundamentals of the HTML, CSS and JavaScript. This magic combination of three is the reason we enjoy using millions of beautiful websites.
      </h3>
      <p>
        <strong>Time to completion:</strong>
        <br />
        6 weeks
      </p>
    </div>
    <div className="pl-xl-5 ">
      <PrintTraining
        title="Core Training"
        data={courses}
      />
      <hr />
      <PrintTraining
        title="Practice Projects"
        data={practice}
        maxWidth={190}
      />

      <hr />
      <h4>Module Outcomes:</h4>
      <p>Once you are done with this module you will be able to:</p>
      <ol>
        <li>Build simple websites</li>
        <li>Launch your own website yourname.com</li>
        <li>Start Freelancing: Make websites for small businesses and non-profits</li>
        <li>Build simple mini applications</li>
        <li>Start thinking like a software engineer</li>
        <li>Call yourself a web designer</li>
      </ol>
    </div>
  </section>
)
