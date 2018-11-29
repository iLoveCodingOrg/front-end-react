import React from 'react'

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
                    </div>
                </div>
            </section>
        )
    }
}

export default Header