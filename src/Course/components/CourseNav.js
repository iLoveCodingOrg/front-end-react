import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Access } from '../../_common'

class CourseNav extends React.Component{
    constructor(props){
        super(props)
    }

    renderItem(item, index){
        const { title, slug, duration, access } = item
        const isFree = (access)? false : true
        const urlTo = `/lessons/${slug}`

        return (<Link to={urlTo} 
            className="clearfix list-group-item list-group-item-">
            <div className="float-left">
                <span className="text-muted">
                    Lessons #{index}:&nbsp;
                </span>
                {title}&nbsp;
                <Access isFree={isFree} />
            </div>
            <div className="float-right">{duration} mins</div>
        </Link>)
    }

    render(){
        return (
            <div className="list-group mt-5">
                <div className="list-group-item list-group-item-dark">
                    <span class="h5">Course content</span>
                </div>
                {this.props.lessons.map((item, index)=>{
                    return (
                        this.renderItem(item, index+1)
                    )
                })}
            </div>
        )
    }
}

CourseNav.propTypes = {
    lessons: PropTypes.array.isRequired
}

export default CourseNav