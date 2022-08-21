import React from 'react'

import PrintTraining from './PrintTraining'

const courses = [
  {
    name: 'Learn React JS in 14 Days',
    link: '/courses/react',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react0-intro.png',
  },
]

const practice = [
  {
    name: 'Project: Building a Todo List App with React',
    link: '/courses/react/lessons/project-building-a-todo-list-app-with-react',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react15-project-todolist.png',
  },
  {
    name: 'Project: Building a Timer App with React',
    link: '/courses/react-timer-app',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react18-project-timer.png',
  },
  {
    name: 'Project: Building a Song Search App with React',
    link: '/courses/react-song-search-app',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react21-project-song-search.png',
  },
]

export default () => (
  <section className="bg-gray-lightest p-2 my-3 b bt-1">
    <div>
      <h2>
        <small className="d-block color-gray">
          Module 2:
        </small>
        Modern Front-End Development
      </h2>
      <h3 className="f-300 color-gray">
        Learn how to make traditional and modern front-end applications. Learn the JavaScript frameworks which are in demand today, and learn the techniques used by high-tech companies to build modern websites. It's all within reach here.
      </h3>
      <p>
        <strong>Time to completion:</strong>
        <br />
        3 weeks
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
        <li>Build modern and flashy websites</li>
        <li>Build interactive web app front-end</li>
        <li>Integrate your app with any sort of back-end</li>
        <li>Connect your app with any third-party API (whether it is Google, Facebook, etc.)</li>
        <li>Call yourself a Front-End Developer</li>
        <li>Market yourself as a Professional Developer and command a respectable salary</li>
      </ol>
    </div>
  </section>
)
