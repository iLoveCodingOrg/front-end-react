import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { Add, View, Edit, List } from '../'
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
                    component={List} />
                <Route
                    exact
                    strict
                    path="/lessons/add"
                    component={Add} />
                <Route
                    exact
                    strict
                    path="/lessons/:slug"
                    component={View} />
                <Route
                    exact
                    strict
                    path="/lessons/:slug/edit"
                    component={isPrivate(Edit)} />
                <Route
                    component={NotFound} />
            </Switch>
        )
    }
}

export default Routes