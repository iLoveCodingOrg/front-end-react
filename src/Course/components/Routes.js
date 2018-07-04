import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
    Add, View, Edit, List, CourseLessonView
} from '../'
import { NotFound } from '../../Page'
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