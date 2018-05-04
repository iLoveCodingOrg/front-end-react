import React from 'react'
import ReactDOM from 'react-dom'

import Wrap from './Wrap'
import {Home} from './Home'
import About from './About'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './_main/store'

import Style from './_main/style/bootstrap'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={()=> <Wrap childComponent={Home}/>} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app'))