import 'react-toastify/dist/ReactToastify.min.css'
import '../node_modules/open-iconic/font/css/open-iconic-bootstrap.css'
import './_app/styles/index.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import store from './_app/store'
import withAuth from './withAuth'
import Wrap from './Wrap'

import BlogRoutes from './Blog'
import ChangePassword from './ChangePassword'
import CourseRoutes from './Course'
import Curriculum from './Curriculum'
import Dashboard from './Dashboard'
import ErrorBoundary from './ErrorBoundary'
import {
  AsyncForgotPassword as ForgotPassword,
  AsyncResetPassword as ResetPassword,
} from './ForgotPassword'
import Free from './Free'
import GroupCalls from './GroupCalls'
import Home from './Home/components/HomeSalesPage'
import LessonRoutes from './Lesson'
import Login from './Login'
import OfficeHours from './OfficeHours'
import PageRoutes, { AsyncNotFound as NotFound } from './Page'
import QuestionRoutes from './Question'
import Reviews from './Reviews'
import ScrollToTop from './ScrollToTop'
import Signup from './Signup'
import SubscriptionRoutes from './Subscription'
import VerifyEmail from './VerifyEmail'
import Webinar from './Webinar'

const RemoveTrailingSlash = ({ location }) => {
  const { pathname, hash } = location

  if (pathname.substr(-1) === '/' && !hash.length) {
    return <Redirect to={pathname.substr(0, pathname.length - 1)} />
  }
  return null
}

function renderApp() {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ErrorBoundary>
            <Route path="/" render={RemoveTrailingSlash} />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <Switch>
              <Route exact strict path="/verify-email" component={withAuth(VerifyEmail, false)} />
              <Route exact strict path="/forgot-password" component={withAuth(ForgotPassword, false)} />
              <Route exact strict path="/reset-password/:accessToken" component={withAuth(ResetPassword, false)} />
              <Route exact strict path="/login" component={withAuth(Login, false)} />
              <Route exact strict path="/signup" component={withAuth(Signup, false)} />
              <Route strict path="/webinar" component={withAuth(Webinar, false)} />
              <Wrap>
                <Switch>
                  <Route exact path="/" component={withAuth(Home, false)} />
                  <Redirect exact path="/pricing" to="/" />
                  <Route exact path="/reviews" component={withAuth(Reviews, false)} />
                  <Route exact path="/free" component={Free} />
                  <Route exact path="/curriculum" component={withAuth(Curriculum, false)} />
                  <Route exact path="/dashboard" component={withAuth(Dashboard)} />
                  <Route strict path="/q" component={withAuth(QuestionRoutes, false)} />
                  <Route strict path="/lessons" component={withAuth(LessonRoutes, false)} />
                  <Route strict path="/courses" component={withAuth(CourseRoutes, false)} />
                  <Route strict path="/blog" component={withAuth(BlogRoutes, false)} />
                  <Route strict path="/pages" component={withAuth(PageRoutes, false)} />
                  <Route strict path="/officehours" component={withAuth(OfficeHours)} />
                  <Route strict path="/groupcalls" component={withAuth(GroupCalls)} />
                  <Route strict path="/subscriptions" component={withAuth(SubscriptionRoutes)} />
                  <Route exact strict path="/change-password" component={withAuth(ChangePassword)} />
                  <Route component={withAuth(NotFound, false)} />
                </Switch>
              </Wrap>
            </Switch>
          </ErrorBoundary>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

renderApp()
