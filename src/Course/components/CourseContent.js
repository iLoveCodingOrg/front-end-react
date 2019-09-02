import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import get from 'lodash/get'

import { Access, CheckMark } from '../../_common'
import { isLoggedIn } from '../../_user/selectors'

class CourseContent extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.renderProgressIndicator = this.renderProgressIndicator.bind(this)

    this.assignListNode = this.assignListNode.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.scrollToActiveLesson = this.scrollToActiveLesson.bind(this)
    this.renderScrollButtons = this.renderScrollButtons.bind(this)

    this.state = {
      listNode: null,
    }
  }

  assignListNode(target) {
    this.setState({ listNode: target }, () => {
      this.scrollToActiveLesson()
    })
  }

  scrollToActiveLesson() {
    const { activeLessonIndex } = this.props
    const { listNode } = this.state
    if (listNode && activeLessonIndex > 0) {
      const activeNode = listNode.children[activeLessonIndex]
      listNode.scrollTop = activeNode.offsetTop - listNode.offsetTop - 60
    }
  }

  handleScroll(direction) {
    const { listNode } = this.state

    if (direction === 'up') {
      listNode.scroll(0, listNode.scrollTop - 50)
    } else if (direction === 'down') {
      listNode.scroll(0, listNode.scrollTop + 50)
    }
  }

  renderItem(item, index) {
    const { courseSlug } = this.props
    const {
      title, slug, duration, access, isComplete,
    } = item
    const isFree = !(access)
    const urlTo = `/courses/${courseSlug}/lessons/${slug}`
    const activeClass = (this.props.activeLessonIndex === index) ? 'list-group-item-success' : ''
    const completeClass = (isComplete) ? 'bg-gray-lightest' : ''

    return (
      <Link
        key={index}
        to={urlTo}
        className={`flex justify-content-between list-group-item ${activeClass} ${completeClass}`}
      >
        <div>
          {(isComplete) ? <CheckMark /> : null}
          <span className="color-gray">
            Lessons #
            {index + 1}
            :&nbsp;
          </span>
          {title}
          &nbsp;
          <Access isFree={isFree} />
        </div>
        <div className="small text-secondary align-self-center text-right">
          {duration}
          {' '}
          mins
        </div>
      </Link>
    )
  }

  renderProgressIndicator() {
    const { lessonCompletedCount, lessonCount, isLoggedIn } = this.props

    if (!isLoggedIn) { return null }

    return (
      <div>
        Your progress:&nbsp;
        <span className="h5">
          <span className="badge badge-warning">
            {Math.round(lessonCompletedCount / lessonCount * 100)}
            % complete
          </span>
        </span>
      </div>
    )
  }

  renderScrollButtons() {
    const { maxScrollHeight } = this.props
    const { listNode } = this.state
    if (
      get(listNode, 'offsetHeight', false)
        && maxScrollHeight <= listNode.offsetHeight
    ) {
      return (
        <div className="btn-group flex">
          <button
            type="button"
            className="btn btn-outline-secondary border-gray flex-fill"
            onClickCapture={() => this.handleScroll('up')}
          >
            Scroll Up ⬆
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary border-gray flex-fill"
            onClick={() => this.handleScroll('down')}
          >
            Scroll Down ⬇
          </button>
        </div>
      )
    }
  }

  render() {
    const { lessons, maxScrollHeight } = this.props
    return (
      <>
        <div className="list-group-item bg-gray-ligher clearfix">
          <div className="h5 mb-0 ">Course content</div>
          {this.renderProgressIndicator()}
        </div>
        <div
          ref={this.assignListNode}
          style={{
            overflowY: 'scroll',
            maxHeight: `${maxScrollHeight}px`,
            border: '3px solid #dee2e6',
          }}
        >
          {lessons && lessons.map((item, index) => this.renderItem(item, index))}
        </div>
        {this.renderScrollButtons()}
      </>
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
  maxScrollHeight: PropTypes.number,
}

CourseContent.defaultProps = {
  maxScrollHeight: 400,
  lessonCompletedCount: 0,
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
  }
}

export default connect(mapStateToProps)(CourseContent)
