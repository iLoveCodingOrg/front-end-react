import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

class Wrap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const ChildComponent = this.props.childComponent
        return (
            <div className="container-fluid">
                <Header/>
                    <ChildComponent />
                <Footer/>
            </div>
        )
    }
}

export default Wrap