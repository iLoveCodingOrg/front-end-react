import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { Link } from 'react-router-dom'

class Wrap extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Wrap
