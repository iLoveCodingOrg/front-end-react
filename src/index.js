import ("../node_modules/open-iconic/font/css/open-iconic-bootstrap.css")
import './_app/styles/'
import('react-toastify/dist/ReactToastify.min.css')

import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from './_app/store'
import Auth from './Auth'
import isPrivate from './isPrivate'
import Wrap from './Wrap'

import ErrorBoundary from './ErrorBoundary'
import ScrollToTop from './ScrollToTop'
import { AsyncHome as Home } from './Home'
import { AsyncDashboard as Dashboard } from './Dashboard'
import { AsyncRoutes as QuestionRoutes } from './Question'
import { AsyncRoutes as LessonRoutes } from './Lesson'
import { AsyncRoutes as CourseRoutes } from './Course'
import {
    AsyncRoutes as PageRoutes,
    AsyncNotFound as NotFound
} from './Page'
import { AsyncLogin as Login } from './Login'
import { AsyncCheckout as Checkout } from './Checkout'
import { AsyncVerifyEmail as VerifyEmail } from './VerifyEmail'
import {
    AsyncResetPassword as ResetPassword,
    AsyncForgotPassword as ForgotPassword
} from './ForgotPassword'
import { AsyncReviewsPage as Reviews } from './Reviews'
import { AsyncCurriculum as Curriculum } from './Curriculum'
import { AsyncPricing as Pricing } from './Pricing'
import { AsyncOfficeHours as OfficeHours } from './OfficeHours'
import { AsyncGroupCalls as GroupCalls } from './GroupCalls'

const RemoveTrailingSlash = ({ location }) => {
    const { pathname } = location
      
    if (pathname.substr(-1) === '/') {
      return <Redirect to={pathname.substr(0, pathname.length - 1)} />
    } else {
      return null
    }
}

function renderApp(){
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
                            newestOnTop={true}
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
                                    component={VerifyEmail} />
                                <Route
                                    exact
                                    strict
                                    path="/forgot-password"
                                    component={ForgotPassword} />
                                <Route
                                    exact
                                    strict
                                    path="/reset-password/:accessToken"
                                    component={ResetPassword} />
                                <Route
                                    exact
                                    strict
                                    path="/login"
                                    component={Login} />
                                <Route
                                    exact
                                    strict
                                    path="/checkout/:slug"
                                    component={Checkout} />
                                <Wrap>
                                    <Switch>
                                        <Route
                                            exact
                                            path="/"
                                            component={Home} />

                                        <Route
                                            exact
                                            path="/pricing"
                                            component={Pricing} />

                                        <Route
                                            exact
                                            path="/reviews"
                                            component={Reviews} />

                                        <Route
                                            exact
                                            path="/curriculum"
                                            component={Curriculum} />

                                        <Route
                                            exact
                                            path="/dashboard"
                                            component={isPrivate(Dashboard)} />

                                        <Route
                                            strict
                                            path="/questions"
                                            component={QuestionRoutes} />

                                        <Route
                                            strict
                                            path="/lessons"
                                            component={LessonRoutes} />

                                        <Route
                                            strict
                                            path="/courses"
                                            component={CourseRoutes} />

                                        <Route
                                            strict
                                            path="/pages"
                                            component={PageRoutes} />
                                        
                                        <Route
                                            strict
                                            path="/officehours"
                                            component={isPrivate(OfficeHours)} />

                                        <Route
                                            strict
                                            path="/groupcalls"
                                            component={isPrivate(GroupCalls)} />

                                        <Route
                                            component={NotFound} />
                                    </Switch>
                                </Wrap>
                            </Switch>
                        </Auth>
                    </ErrorBoundary>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('app')
    )
}

renderApp()