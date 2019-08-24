import '../node_modules/open-iconic/font/css/open-iconic-bootstrap.css'
import './_app/styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css'

import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from './_app/store'
import Auth from './Auth'
import isPrivate from './isPrivate'
import Wrap from './Wrap'

import ErrorBoundary from './ErrorBoundary'
import ScrollToTop from './ScrollToTop'
import Home from './Home'
import Dashboard from './Dashboard'
import QuestionRoutes from './Question'
import LessonRoutes from './Lesson'
import CourseRoutes from './Course'
import BlogRoutes from './Blog'
import PageRoutes, { AsyncNotFound as NotFound } from './Page'
import Login from './Login'
import Signup from './Signup'
import Checkout from './Checkout'
import VerifyEmail from './VerifyEmail'
import {
  AsyncResetPassword as ResetPassword,
  AsyncForgotPassword as ForgotPassword,
} from './ForgotPassword'
import Reviews from './Reviews'
import Curriculum from './Curriculum'
import Pricing from './Pricing'
import OfficeHours from './OfficeHours'
import GroupCalls from './GroupCalls'
import SubscriptionRoutes from './Subscription'
import ChangePassword from './ChangePassword'
import Webinar from './Webinar'

const RemoveTrailingSlash = ({ location }) => {
  const { pathname } = location

  if (pathname.substr(-1) === '/') {
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
            <Auth>
              <Switch>
                <Route
                  exact
                  strict
                  path="/verify-email"
                  component={VerifyEmail}
                />
                <Route
                  exact
                  strict
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route
                  exact
                  strict
                  path="/reset-password/:accessToken"
                  component={ResetPassword}
                />
                <Route
                  exact
                  strict
                  path="/login"
                  component={Login}
                />
                <Route
                  exact
                  strict
                  path="/signup"
                  component={Signup}
                />
                <Route
                  exact
                  strict
                  path="/checkout/:slug"
                  component={Checkout}
                />
                <Route
                  strict
                  path="/webinar"
                  component={Webinar}
                />
                <Wrap>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={Home}
                    />

                    <Route
                      exact
                      path="/pricing"
                      component={Pricing}
                    />

                    <Route
                      exact
                      path="/reviews"
                      component={Reviews}
                    />

                    <Route
                      exact
                      path="/curriculum"
                      component={Curriculum}
                    />

                    <Route
                      exact
                      path="/dashboard"
                      component={isPrivate(Dashboard)}
                    />

                    <Route
                      strict
                      path="/q"
                      component={QuestionRoutes}
                    />

                    <Route
                      strict
                      path="/lessons"
                      component={LessonRoutes}
                    />

                    <Route
                      strict
                      path="/courses"
                      component={CourseRoutes}
                    />

                    <Route
                      strict
                      path="/blog"
                      component={BlogRoutes}
                    />

                    <Route
                      strict
                      path="/pages"
                      component={PageRoutes}
                    />

                    <Route
                      strict
                      path="/officehours"
                      component={isPrivate(OfficeHours)}
                    />

                    <Route
                      strict
                      path="/groupcalls"
                      component={isPrivate(GroupCalls)}
                    />

                    <Route
                      strict
                      path="/subscriptions"
                      component={isPrivate(SubscriptionRoutes)}
                    />

                    <Route
                      exact
                      strict
                      path="/change-password"
                      component={isPrivate(ChangePassword)}
                    />

                    <Route
                      component={NotFound}
                    />
                  </Switch>
                </Wrap>
              </Switch>
            </Auth>
          </ErrorBoundary>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

renderApp()
