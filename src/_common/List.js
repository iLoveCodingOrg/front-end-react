import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { IMG_URL } from '../_app/constants'
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
        console.log('this.props.list', this.props.list)
        return (
            <div>
                {
                    !this.props.list.length ?
                    <div>
                        Loading...
                    </div>
                    :
                    this.props.list.map((item, index)=>{
                      return <Card item={item} key={index} />
                    })
                }
            </div>
        )
    }
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    getList: PropTypes.func.isRequired,
    clearList: PropTypes.func.isRequired
}

export default List