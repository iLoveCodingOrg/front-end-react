const thumb = (path: string) => `https://a.ilovecoding.org/thumb/${path}`

export interface TrainingItem {
  name: string
  link: string
  thumbSrc: string
}

export interface Module {
  eyebrow: string
  title: string
  description: string
  time?: { label: string, value: string }
  note?: string
  groups: { title: string, items: TrainingItem[] }[]
  outcomes?: string[]
}

export const modules: Module[] = [
  {
    eyebrow: 'Module 1',
    title: 'Fundamentals',
    description: 'Learn the fundamentals of HTML, CSS and JavaScript. This magic combination of three is the reason we enjoy using millions of beautiful websites.',
    time: { label: 'Time to completion', value: '6 weeks' },
    groups: [
      {
        title: 'Core Training',
        items: [
          { name: 'The Perfect Path to becoming a job-ready developer', link: '/courses/perfect-path', thumbSrc: thumb('perfect-path.jpg') },
          { name: 'Learn HTML & CSS Correctly', link: '/courses/htmlcss2', thumbSrc: thumb('htmlcss2.gif') },
          { name: 'Learn JavaScript Correctly', link: '/courses/js2', thumbSrc: thumb('js2.gif') },
          { name: 'Going Live: Putting Your Website Live', link: '/courses/going-live', thumbSrc: thumb('goingLive-part1.png') },
        ],
      },
      {
        title: 'Practice Projects',
        items: [
          { name: 'Project: Create a blog design from scratch using HTML and CSS', link: '/courses/htmlcss2/lessons/blog-design', thumbSrc: thumb('HTMLCSS14-9-myBlogDesign-part1.png') },
          { name: 'Build a stopwatch app with pure JavaScript', link: '/courses/stopwatch', thumbSrc: thumb('stopWatch.png') },
          { name: 'Build a simple To-Do App with pure JavaScript', link: '/courses/js2/lessons/todolist-app', thumbSrc: thumb('todolist-app.jpg') },
          { name: 'Build a Rock Paper Scissor app with pure JavaScript', link: '/courses/rock-paper-scissor', thumbSrc: thumb('rockPaperScissor.png') },
          { name: 'Project: Build Your Own Snake Game with JavaScript', link: '/courses/snake-game', thumbSrc: thumb('snakegame.jpg') },
        ],
      },
    ],
    outcomes: [
      'Build simple websites',
      'Launch your own website yourname.com',
      'Start Freelancing: Make websites for small businesses and non-profits',
      'Build simple mini applications',
      'Start thinking like a software engineer',
      'Call yourself a web designer',
    ],
  },
  {
    eyebrow: 'Module 2',
    title: 'Modern Front-End Development',
    description: 'Learn how to make traditional and modern front-end applications. Learn the JavaScript frameworks which are in demand today, and learn the techniques used by high-tech companies to build modern websites. It’s all within reach here.',
    time: { label: 'Time to completion', value: '3 weeks' },
    groups: [
      {
        title: 'Core Training',
        items: [
          { name: 'Learn React JS in 14 Days', link: '/courses/react', thumbSrc: thumb('react/react0-intro.png') },
        ],
      },
      {
        title: 'Practice Projects',
        items: [
          { name: 'Project: Building a Todo List App with React', link: '/courses/react/lessons/project-building-a-todo-list-app-with-react', thumbSrc: thumb('react/react15-project-todolist.png') },
          { name: 'Project: Building a Timer App with React', link: '/courses/react-timer-app', thumbSrc: thumb('react/react18-project-timer.png') },
          { name: 'Project: Building a Song Search App with React', link: '/courses/react-song-search-app', thumbSrc: thumb('react/react21-project-song-search.png') },
        ],
      },
    ],
    outcomes: [
      'Build modern and flashy websites',
      'Build interactive web app front-end',
      'Integrate your app with any sort of back-end',
      'Connect your app with any third-party API (whether it is Google, Facebook, etc.)',
      'Call yourself a Front-End or Full-Stack Developer',
      'Market yourself as a Professional Developer and command a respectable salary',
    ],
  },
  {
    eyebrow: 'Module 3',
    title: 'Back-End Development',
    description: 'Learn how to make web application back-ends. Build Web APIs, security and authentication (i.e. Login Feature) and connect your app with the database.',
    time: { label: 'Time to completion', value: '4 weeks' },
    groups: [
      {
        title: 'Core Training',
        items: [
          { name: 'Learn Node JS in a Week', link: '/courses/nodejs', thumbSrc: thumb('nodeWk-1-intro.png') },
          { name: 'Learn Express.js in 14 days', link: '/courses/expressjs', thumbSrc: thumb('express/express-0-intro.jpg') },
          { name: 'Crash Course to Databases & MongoDB', link: '/courses/mongodb', thumbSrc: thumb('mongodb/mongodb-0-intro.jpg') },
        ],
      },
      {
        title: 'Practice Projects',
        items: [
          { name: 'Create a Simple HTTP Server with Node.js', link: '/courses/nodejs/lessons/create-a-simple-http-server-with-nodejs', thumbSrc: thumb('nodeWk-8-httpServer.png') },
          { name: 'Project: Create a Web Scraper to Gather Information from the web', link: '/courses/nodejs/lessons/project-create-a-web-scraper-to-gather-information-from-the-web', thumbSrc: thumb('nodeWk-10-scraper.png') },
          { name: 'Creating a Simple Web App with Node.js', link: '/courses/nodejs/lessons/creating-a-simple-web-app-with-nodejs', thumbSrc: thumb('nodeWk-11-webapp.png') },
          { name: 'Project: Build a Note Taking App with Express.js', link: '/courses/expressjs-notes-app', thumbSrc: thumb('express-p/express-p1-setup.jpg') },
        ],
      },
    ],
    outcomes: [
      'Build Full-Stack Web Applications',
      'Build traditional Web Applications',
      'Build Modern Web Application Back-end',
      'Build Web API',
      'Build login capability for your app',
      'Implement security and permissions in your app',
      'Connect your app with a database',
      'Call yourself a Full-Stack JavaScript Developer',
    ],
  },
  {
    eyebrow: 'Electives',
    title: 'Additional Training',
    description: 'This is additional supplementary training. Choose the topic that sparks your interest in any order.',
    time: { label: 'Time investment', value: 'Use 2 weeks to pick up additional skills by choosing from the training below (focus for weeks 19 and 20)' },
    note: 'Be sure to read the prerequisite section under each training before starting the training.',
    groups: [
      {
        title: 'Core Training',
        items: [
          { name: 'Getting Good with Git', link: '/courses/git', thumbSrc: thumb('git-intro.png') },
          { name: 'How to set a full cover background image on your website', link: '/courses/full-cover-background-image', thumbSrc: thumb('fullCoverBackgroundImage.png') },
          { name: 'How to set fullscreen video in the background on your website', link: '/courses/fullscreen-video-in-background', thumbSrc: thumb('fullCoverBackgroundVideo.png') },
          { name: 'Load Page Elements when Scrolled to that Area', link: '/courses/wow-js', thumbSrc: thumb('showOnScroll.png') },
        ],
      },
    ],
  },
  {
    eyebrow: 'Archived',
    title: 'Archived Training',
    description: 'Training that is no longer pivotal to your success, so it has been moved to the archive.',
    groups: [
      {
        title: 'Courses',
        items: [
          { name: 'Learn jQuery in 14 days', link: '/courses/jquery', thumbSrc: thumb('jQuery14-0-Intro.png') },
          { name: 'Learn & Master Bootstrap in a Week', link: '/courses/learn-master-bootstrap-in-a-week', thumbSrc: thumb('bootstrap-1-intro.png') },
          { name: 'Learn React Native & Build Mobile App (Android & iOS)', link: '/courses/react-native', thumbSrc: thumb('react-native/0-intro.jpg') },
        ],
      },
      {
        title: 'Projects',
        items: [
          { name: 'Project: Create a Top Bar Widget with jQuery', link: '/courses/jquery/lessons/project-create-a-top-bar-widget-with-jquery', thumbSrc: thumb('jQuery14-7-1-projectTopBar.png') },
          { name: 'Project: Create Tabs functionality with jQuery', link: '/courses/jquery/lessons/project-create-tabs-functionality-with-jquery', thumbSrc: thumb('jQuery14-7-2-projectTabs.png') },
          { name: 'Animate: Animating elements with jQuery', link: '/courses/jquery/lessons/animate-animating-elements-with-jquery', thumbSrc: thumb('jQuery14-8-animate.png') },
          { name: 'Project: Create your own Image Carousel Slider with jQuery', link: '/courses/jquery/lessons/project-create-your-own-image-carousel-slider-with-jquery', thumbSrc: thumb('jQuery14-12-projectSlider.png') },
          { name: 'Ajax: Create a Single Page App with jQuery', link: '/courses/jquery/lessons/ajax-create-a-single-page-app-with-jquery', thumbSrc: thumb('jQuery14-13-ajaxSinglePage.png') },
          { name: 'Ajax: Create a Location Finder App using jQuery & Google Maps API', link: '/courses/jquery/lessons/ajax-create-a-location-finder-app-using-jquery-google-maps-api-part-1', thumbSrc: thumb('jQuery-14-14-googleMapsAPI-part1.png') },
          { name: 'Build a Calculator App with jQuery', link: '/courses/calculator', thumbSrc: thumb('calculator.png') },
          { name: 'Project: Create a Cryptocurrency price checker app with React Native', link: '/courses/react-native-crypto-price', thumbSrc: thumb('react-native/44-crypro-intro.jpg') },
        ],
      },
    ],
  },
]
