import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Access, CheckMark } from '../../_common'
import { isLoggedIn } from '../../_user/selectors'

class CourseContent extends React.Component{
    constructor(props){
        super(props)
        this.renderItem = this.renderItem.bind(this)
        this.renderProgressIndicator = this.renderProgressIndicator.bind(this)
        
        this.listNode = null
        this.assignListNode = this.assignListNode.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    assignListNode(target){
        this.listNode = target
        console.dir(this.listNode)
    }
    handleScroll(direction){
        const node = this.listNode
        
        if(direction === 'up'){
            node.scroll(0, node.scrollTop-50)
        }else if(direction === 'down'){
            node.scroll(0, node.scrollTop+50)
        }
    }
    renderItem(item, index){
        const { courseSlug } = this.props
        const { title, slug, duration, access, isComplete } = item
        const isFree = (access)? false : true
        const urlTo = `/courses/${courseSlug}/lessons/${slug}`
        const activeClass = (this.props.activeLessonIndex === index)? 'list-group-item-success' : ''
        const completeClass = (isComplete)? 'bg-light': ''

        return (
            <Link key={index} to={urlTo}
                className={`d-flex justify-content-between list-group-item ${activeClass} ${completeClass}`}>
                <div className="float-left">
                    {(isComplete)? <CheckMark /> : null}
                    <span className="text-muted">
                        Lessons #{index +1}:&nbsp;
                    </span>
                    {title}&nbsp;
                    <Access isFree={isFree} />
                </div>
                <div className="float-right small text-secondary align-self-center text-right">{duration} mins</div>
            </Link>
        )
    }
    renderProgressIndicator(){
        const { lessonCompletedCount, lessonCount, isLoggedIn } = this.props
        
        if(!isLoggedIn){ return null }
        
        return(
            <div className="float-right">
                Your progress:&nbsp;
                <span className="h5">
                <span className="badge badge-warning">
                    {Math.round(lessonCompletedCount/lessonCount * 100)}% complete
                </span>
                </span>
            </div>
        )
    }
    render(){
        const { lessons } = this.props
        return (
            <div>
                <div className="list-group-item bg-gray-200 clearfix">
                    <div className="h5 mb-0 float-left">Course content</div>
                    {this.renderProgressIndicator()}
                </div>
                <div ref={this.assignListNode}
                    style={{
                    overflowY: 'scroll',
                    maxHeight: '330px',
                    border: '3px solid #dee2e6'
                }}>
                    {lessons && lessons.map((item, index)=>{
                        return this.renderItem(item, index)
                    })}
                </div>
                <div className="btn-group d-flex">
                    <button
                        className="btn btn-outline-secondary border-gray-400 flex-fill"
                        onClickCapture={()=>this.handleScroll('up')}>Scroll Up ⬆</button>
                    <button
                        className="btn btn-outline-secondary border-gray-400 flex-fill"
                        onClick={()=>this.handleScroll('down')}>Scroll Down ⬇</button>
                </div>
            </div>
        )
    }
}

CourseContent.propTypes = {
    activeLessonIndex: PropTypes.number.isRequired,
    courseSlug: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    lessons: PropTypes.array.isRequired,
    lessonCount: PropTypes.number.isRequired,
    lessonCompletedCount: PropTypes.number,

}

function mapStateToProps(state){
    return {
        isLoggedIn: isLoggedIn(state),
    }
}

export default connect(mapStateToProps)(CourseContent)