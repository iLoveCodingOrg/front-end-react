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
                <div className="alert-danger py-3 text-center">
                    <strong>IMPORTANT: </strong> We are DOUBLING our starting price this week.&nbsp;
                    <Link to='/pricing' className="btn-link">Join Today</Link> and lock in the current low price for life.
                </div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Wrap
