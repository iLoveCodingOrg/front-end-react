import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

class Wrap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { childComponent:ChildComponent, ...rest } = this.props
        return (
            <div>
                <Header/>
                    <ChildComponent {...rest}/>
                <Footer/>
            </div>
        )
    }
}

export default Wrap