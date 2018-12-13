import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Add from './Add'
import View from './View'
import Edit from './Edit'
import List from './List'
import ListCore from './ListCore'
import ListProject from './ListProject';
import CourseLessonView from './CourseLessonView'
import { AsyncNotFound as NotFound } from '../../Page'
import isPrivate from '../../isPrivate'

class Routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Switch>
                <Route
                    exact
                    strict
                    path="/courses"
                    component={List} />
                <Route
                    exact
                    strict
                    path="/courses/core"
                    component={ListCore} />
                <Route
                    exact
                    strict
                    path="/courses/projects"
                    component={ListProject} />
                <Route
                    exact
                    strict
                    path="/courses/add"
                    component={isPrivate(Add)} />
                <Route
                    exact
                    strict
                    path="/courses/:courseSlug/lessons/:lessonSlug"
                    component={CourseLessonView} />
                <Route
                    exact
                    strict
                    path="/courses/:slug"
                    component={View} />
                <Route
                    exact
                    strict
                    path="/courses/:slug/edit"
                    component={isPrivate(Edit)} />
                <Route
                    component={NotFound} />
            </Switch>
        )
    }
}

export default Routes