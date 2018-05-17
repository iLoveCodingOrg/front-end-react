import React from 'react'
import { render } from 'react-dom'

import Wrap from './Wrap'
import { Home } from './Home'
import {
    View as LessonView,
    Edit as LessonEdit,
    List as LessonList
} from './Lesson'
import {
    View as CourseView,
    Edit as CourseEdit,
    List as CourseList
} from './Course'
import {
    View as PageView,
    Edit as PageEdit,
    List as PageList,
    NotFound
} from './Page'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './_app/store'

import './_app/styles/bootstrap'

function renderApp(){
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        strict
                        path="/"
                        rrender={(props)=> <Wrap {...props} childComponent={Home}/>} />
    
    
                    <Route
                        exact
                        strict
                        path="/lessons/"
                        rrender={(props)=> <Wrap {...props} childComponent={LessonList}/>} />
                    <Route
                        exact
                        strict
                        path="/lessons/:slug"
                        rrender={(props)=> <Wrap {...props} childComponent={LessonView}/>} />
                    <Route
                        exact
                        strict
                        path="/lessons/:slug/edit"
                        render={(props)=> <Wrap {...props} childComponent={LessonEdit}/>} />
    
    
                    <Route
                        exact
                        strict
                        path="/courses"
                        render={(props)=> <Wrap {...props} childComponent={CourseList}/>} />
                    <Route
                        exact
                        strict
                        path="/courses/:slug"
                        render={(props)=> <Wrap {...props} childComponent={CourseView}/>} />
                    <Route
                        exact
                        strict
                        path="/courses/:slug/edit"
                        render={(props)=> <Wrap {...props} childComponent={CourseEdit}/>} />
    
    
                    <Route
                        exact
                        strict
                        path="/pages/"
                        rrender={(props)=> <Wrap {...props} childComponent={PageList}/>} />
                    <Route
                        exact
                        strict
                        path="/pages/:slug"
                        rrender={(props)=> <Wrap {...props} childComponent={PageView}/>} />
                    <Route
                        exact
                        strict
                        path="/pages/:slug/edit"
                        rrender={(props)=> <Wrap {...props} childComponent={PageEdit}/>} />
                    
                    
                    <Route
                        rrender={(props)=> <Wrap {...props} childComponent={NotFound}/>} />
                </Switch>
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('app')
    )
}

renderApp()

module.hot.accept(renderApp)