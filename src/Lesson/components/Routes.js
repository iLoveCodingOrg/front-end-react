import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
    View as LessonView,
    Edit as LessonEdit,
    List as LessonList
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
                    component={isPrivate(LessonEdit)} />
                <Route
                    component={NotFound} />
            </Switch>
        )
    }
}

export default Routes