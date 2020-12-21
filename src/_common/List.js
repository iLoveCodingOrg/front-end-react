import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Card from './Card'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

export default function List({
  getList,
  of,
  list,
  listHeader: ListHeaderComponent,
  isLoading,
  error,
}) {
  useEffect(() => { getList() }, [])

  const getTitle = () => {
    let title
    switch (of) {
      case 'lesson':
        title = 'All Lessons'
        break
      case 'course':
        title = 'Courses'
        break
      case 'page':
        title = 'Pages'
        break
      case 'question':
        title = 'Questions/Answers'
        break
      case 'blog':
        title = 'iLoveCoding Blog'
        break
      default:
        title = 'iLoveCoding'
    }
    return `${title} - iLoveCoding`
  }

  return (
    <div className="container container-slim">
      { isLoading && <Loading /> }
      { !isLoading && error && <ErrorBox /> }
      { !isLoading && !error && (
        <>
          <Helmet title={getTitle()} />
          <ListHeaderComponent />
          <div className="b bt-1 pt-2 mx-auto">
            { list.map(item => (
              <Card
                key={item.slug}
                item={item}
                of={of}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

List.propTypes = {
  clearList: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  listHeader: PropTypes.func.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
}
