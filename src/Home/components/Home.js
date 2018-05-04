import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../Header'
import Footer from '../../Footer'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Header/>
                    Home
                    <pre>
                        {JSON.stringify(this.props.show, 0, 2)}
                    </pre>
                    <button onClick={this.props.onClick}> Click to Toggle</button>
                <Footer/>
            </div>
        )
    }
}

Home.propTypes = {
    onClick: PropTypes.func,
    // show: PropTypes.bool.isRequired
}

export default Home;