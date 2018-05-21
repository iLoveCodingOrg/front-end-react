import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
    View as CourseView,
    Edit as CourseEdit,
    List as CourseList,
    CourseLessonView
} from '../'

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
                    component={CourseList} />
                <Route
                    exact
                    strict
                    path="/courses/:courseSlug/lessons/:lessonSlug"
                    component={CourseLessonView} />
                <Route
                    exact
                    strict
                    path="/courses/:slug"
                    component={CourseView} />
                <Route
                    exact
                    strict
                    path="/courses/:slug/edit"
                    component={CourseEdit} />
            </Switch>
        )
    }
}

export default Routes