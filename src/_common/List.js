import React from 'react'
import PropTypes from 'prop-types'

import { Card } from './'

class List extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getList()
    }

    componentWillUnmount(){
        this.props.clearList()
    }

    render(){
        return (
            <div>
                {
                    !this.props.list.length ?
                    <div>
                        Loading...
                    </div>
                    :
                    this.props.list.map((item, index)=>{
                      return <Card
                        key={index}
                        item={item}
                        of={this.props.of}
                        />
                    })
                }
            </div>
        )
    }
}

List.propTypes = {
    clearList: PropTypes.func.isRequired,
    getList: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    of: PropTypes.oneOf(['lessons', 'courses', 'pages']).isRequired
}

export default List