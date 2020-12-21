import './cardStyle.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { IMG_URL, contentTypeToRoute } from '../_app/constants'
import Access from './Access'
import Level from './Level'
import Duration from './Duration'
import LessonCount from './LessonCount'

function Card({ item, of }) {
  const {
    thumbnail,
    title,
    subTitle,
    access,
    level,
    courseTotalDuration,
    duration,
    slug,
    lessonCount,
  } = item

  const route = contentTypeToRoute[of]
  const isFree = !(access)
  const urlTo = `/${route}/${slug}`
  const durationVal = courseTotalDuration || duration

  return (
    <div className="grid grid-list-item mb-1">
      {
        thumbnail && (
        <div>
          <Link to={urlTo}>
            <img
              loading="lazy"
              className="rounded w-100"
              src={`${IMG_URL}${thumbnail}`}
              alt="Thumbnail"
            />
          </Link>
        </div>
        )
      }
      <div>
        <h3><Link to={urlTo}>{title}</Link></h3>
        <div className="mb--5">
          <Access of={of} isFree={isFree} />
          { !!level && <Level level={level} /> }
          { !!durationVal && <Duration duration={durationVal} /> }
          { (of === 'courses') && <LessonCount lessonCount={lessonCount} /> }
        </div>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
}

export default Card
