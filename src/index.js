// import './_app/styles/bootstrap.scss'
import './_app/styles/'

import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './_app/store'
import Wrap from './Wrap'

import ScrollToTop from './ScrollToTop'
import { Home } from './Home'
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

function renderApp(){
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route
                            exact
                            strict
                            path="/login"
                            component={Login} />
                        <Wrap>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Home} />
                
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
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('app')
    )
}

renderApp()

module.hot.accept(renderApp)