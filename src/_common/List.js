import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { Card } from '.'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.getTitle = this.getTitle.bind(this)
  }

  componentDidMount() {
    this.props.getList()
  }

  getTitle() {
    switch (this.props.of) {
      case 'lesson':
        return 'All Lessons'
      case 'course':
        return 'Courses'
      case 'page':
        return 'Pages'
      case 'question':
        return 'Questions/Answers'
      case 'blog':
        return 'iLoveCoding Blog'
    }
  }

  render() {
    const ListHeaderComponent = this.props.listHeader
    return (
      <div className="container">
        {
                    (this.props.isLoading) ? <Loading />
                      : (this.props.error) ? <ErrorBox />
                        : (
                          <div>
                            <Helmet>
                              <title>
                                {this.getTitle()}
                                {' '}
- iLoveCoding
                              </title>
                            </Helmet>
                            <ListHeaderComponent />
                            <div className="col-12 col-lg-9 border-top pt-4 mx-auto">
                              {
                            this.props.list.map((item, index) => (
                              <Card
                                key={index}
                                item={item}
                                of={this.props.of}
                              />
                            ))
                        }
                            </div>
                          </div>
                        )
                }
      </div>
    )
  }
}

List.propTypes = {
  clearList: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  listHeader: PropTypes.func.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
}

export default List
