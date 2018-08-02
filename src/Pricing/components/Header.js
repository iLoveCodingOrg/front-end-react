import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="d-flex justify-content-center">
                <div className="container">
                    <div className="text-center">
                        <h1 className="headline line-height-1">
                            Straight Forward Pricing
                            <br/>
                            <span className="
                                small
                                em
                                font-weight-light
                                text-muted">
                                for a career changing training!
                            </span>
                        </h1>
                        <p className="alert alert-warning lead">
                            Let’s be honest - Coding bootcamps are charging an arm and a leg - We give you <span className="strike">same</span> <Link to="/questions/how-better" className="u">better training</Link> for 2% of the cost.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header