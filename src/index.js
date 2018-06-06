// import './_app/styles/bootstrap.scss'
import './_app/styles/'
import 'react-toastify/dist/ReactToastify.min.css'

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
import { Home } from './Home'
import { Dashboard } from './Dashboard'
import {
    View as LessonView,
    Edit as LessonEdit,
    List as LessonList
} from './Lesson'
import {
    Routes as CourseRoutes
} from './Course'
import {
    View as PageView,
    Edit as PageEdit,
    List as PageList,
    NotFound
} from './Page'
import { Login } from './Login'
import { Checkout } from './Checkout'
import { VerifyEmail } from './VerifyEmail'
import { ResetPassword, ForgotPassword } from './ForgotPassword'
import Analytics from './Analytics'
import { Curriculum } from './Curriculum'

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
                        <Route path="/" component={Analytics} />
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
                                            path="/curriculum"
                                            component={Curriculum} />

                                        <Route
                                            exact
                                            path="/dashboard"
                                            component={isPrivate(Dashboard)} />

                                        <Route
                                            exact
                                            strict
                                            path="/lessons"
                                            component={LessonList} />
                                        <Route
                                            exact
                                            strict
                                            path="/lessons/:slug"
                                            component={LessonView} />
                                        <Route
                                            exact
                                            strict
                                            path="/lessons/:slug/edit"
                                            component={LessonEdit} />

                                        <Route
                                            strict
                                            path="/courses"
                                            component={CourseRoutes} />
                        
                                        <Route
                                            exact
                                            strict
                                            path="/pages"
                                            component={PageList} />
                                        <Route
                                            exact
                                            strict
                                            path="/pages/:slug"
                                            component={PageView} />
                                        <Route
                                            exact
                                            strict
                                            path="/pages/:slug/edit"
                                            component={PageEdit} />

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

if(module.hot){
    module.hot.accept(renderApp)
}