import React from 'react'
import ReactDOM from 'react-dom'

import Wrap from './Wrap'
import {Home} from './Home'
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

import Style from './_app/styles/bootstrap'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={()=> <Wrap childComponent={Home}/>} />


                <Route
                    exact
                    path='/lessons/'
                    render={()=> <Wrap childComponent={LessonList}/>} />
                <Route
                    path='/lessons/:name'
                    render={()=> <Wrap childComponent={LessonView}/>} />
                <Route
                    path='/lessons/:name/edit'
                    render={()=> <Wrap childComponent={LessonEdit}/>} />


                <Route
                    exact
                    path='/courses/'
                    render={()=> <Wrap childComponent={CourseList}/>} />
                <Route
                    path='/courses/:name'
                    render={()=> <Wrap childComponent={CourseView}/>} />
                <Route
                    path='/courses/:name/edit'
                    render={()=> <Wrap childComponent={CourseEdit}/>} />


                <Route
                    exact
                    path='/pages/'
                    render={()=> <Wrap childComponent={PageList}/>} />
                <Route
                    path='/pages/:name'
                    render={()=> <Wrap childComponent={PageView}/>} />
                <Route
                    path='/pages/:name/edit'
                    render={()=> <Wrap childComponent={PageEdit}/>} />
                
                
                <Route
                    render={()=> <Wrap childComponent={NotFound}/>} />
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app'))