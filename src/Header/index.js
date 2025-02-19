import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import './styles.css'

import { contentTypeRoutes } from '../_app/constants'
import logo from '../_app/images/ilovecoding-logo.svg'
import { actions, selectors } from '../_user'

function Header({
  isLoggedIn, user, logout, accountLevel, location,
}) {
  const getGravatarUrl = (emailHash) => {
    const defaultImageType = 'retro'
    const size = 30

    return `https://www.gravatar.com/avatar/${emailHash}.jpg?s=${size}&d=${defaultImageType}`
  }

  const renderLinks = links => links.map(({
    label, link, className, style,
  }) => (
    <NavLink
      activeClassName="selected"
      key={label}
      style={style}
      className={`${className}`}
      to={link}
    >
      {label}
    </NavLink>
  ))

  const renderUserLeft = () => {
    const links = [
      {
        label: 'Full Curriculum', // QUIZ / Start Here <- Ideas
        link: '/curriculum',
        className: 'btn btn-light',
        style: {},
      },
      // {
      //     label: 'Core Training',
      //     link: '/courses/core',
      //     className: 'nav-link btn btn-sm py--25',
      //     style: {}
      // },
      // {
      //     label: 'Practice Projects',
      //     link: '/courses/projects',
      //     className: 'nav-link btn btn-sm py--25',
      //     style: {}
      // },
      // {
      //     label: 'Questions/Answers',
      //     link: '/questions',
      //     className: 'nav-link btn btn-sm py--25',
      //     style: {}
      // }
    ]

    return renderLinks(links)
  }

  const renderGuestLeft = () => {
    const links = [
      {
        label: 'Full Curriculum', // QUIZ / Start Here <- Ideas
        link: '/curriculum',
        className: 'btn btn-light',
        style: {},
      },
      // {
      //     label: 'Core Training',
      //     link: '/courses/core',
      //     className: 'nav-link btn btn-sm py--25',
      //     style: {}
      // },
      // {
      //     label: 'Practice Projects',
      //     link: '/courses/projects',
      //     className: 'nav-link btn btn-sm py--25',
      //     style: {}
      // },
      // {
      //     label: 'Questions/Answers',
      //     link: '/questions',
      //     className: 'nav-link btn btn-sm py--25',
      //     style: {}
      // }
    ]

    return renderLinks(links)
  }

  const renderUserRight = () => {
    const { firstName, emailHash } = user
    const gravatarUrl = getGravatarUrl(emailHash)

    function renderLevel(level) {
      if (level === 'free') {
        return (
          <NavLink
            to="/pricing"
            activeClassName="selected"
            className="btn btn-success ml--5"
          >
            Upgrade
          </NavLink>
        )
      }
      return <span className="badge bg-success ml--5">{level}</span>
    }

    return (
      <div className="flex flex-row align-items-center">
        <img
          loading="lazy"
          className="mr--5 circle"
          src={gravatarUrl}
          alt="User Gravatar"
        />
        <div>{firstName}</div>
        {renderLevel(accountLevel)}
        <button type="button" className="b-0 btn-link" onClick={logout}>(Log out)</button>
      </div>
    )
  }

  const renderGuestRight = () => {
    const links = [
      // {
      //   label: 'Why JavaScript?',
      //   link: '/pages/why-javascript',
      //   className: 'nav-link btn btn-400 py--25',
      //   style: {},
      // },
      // {
      //   label: 'How it works',
      //   link: '/pages/how-it-works',
      //   className: 'nav-link btn btn-400 py--25',
      //   style: {},
      // },
      // {
      //   label: 'Real Results',
      //   link: '/reviews',
      //   className: 'nav-link btn btn-400 py--25',
      //   style: {},
      // },
      // {
      //   label: 'Free Stuff',
      //   link: '/free',
      //   className: 'nav-link btn btn-400 py--25',
      //   style: {},
      // },
      {
        label: 'Login',
        link: '/login',
        className: 'nav-link btn btn-400 py--25',
        style: {},
      },
      // {
      //   label: 'Enroll Now',
      //   link: '/#payment',
      //   className: 'btn btn-primary ml--5',
      //   style: {},
      // },
    ]

    return renderLinks(links)
  }

  const renderEditButton = () => {
    const { pathname } = location
    const pathParts = pathname.split('/')
    const [extra, contentTypePath, contentSlug] = pathParts
    if (contentTypeRoutes.includes(contentTypePath) && contentSlug) {
      const editLink = `/${contentTypePath}/${contentSlug}/edit`
      return (
        <NavLink to={editLink} className="btn">Edit</NavLink>
      )
    }
    return null
  }

  const renderAddButtons = () => (
    <div className="d-inline">
      <NavLink activeClassName="selected" to="/pages/add" className="btn">+ Page</NavLink>
      <NavLink activeClassName="selected" to="/lessons/add" className="btn">+ Lesson</NavLink>
      <NavLink activeClassName="selected" to="/courses/add" className="btn">+ Course</NavLink>
      <NavLink activeClassName="selected" to="/q/add" className="btn">+ Question</NavLink>
      <NavLink activeClassName="selected" to="/blog/add" className="btn">+ Blog</NavLink>
    </div>
  )

  const renderAdminLinks = () => {
    if (user.role !== 'admin') return null

    return (
      <div>
        {renderEditButton()}
        {renderAddButtons()}
      </div>
    )
  }

  return (
    <nav
      id="header"
      className="
        flex
        flex-column
        md-flex-row
        md-space-between
        align-items-center
        navbar-expand
        p--5
        navbar-light
        mb-4
      "
    >
      <div className="flex flex-column md-flex-row align-items-center">
        <div className="navbar-brand p-0">
          <NavLink to="/" className="img-wrap img-wrap-hover">
            <img
              loading="lazy"
              src={logo}
              alt="iLoveCoding.org Logo"
            />
          </NavLink>
        </div>
        <nav className="mx-1 my--5 navbar-nav">
          { isLoggedIn ? renderUserLeft() : renderGuestLeft() }
        </nav>
        {renderAdminLinks()}
      </div>
      <nav className="my--5 navbar-nav flex flex-wrap justify-content-center align-items-center md-justify-content-start">
        { isLoggedIn ? renderUserRight() : renderGuestRight() }
      </nav>
    </nav>
  )
}

function mapStateToProps(state) {
  return {
    isLoggedIn: selectors.isLoggedIn(state),
    accountLevel: selectors.getLevel(state),
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actions.logout())
      .then(({ isSuccess }) => {
        if (isSuccess) {
          window.location.reload()
        }
      }),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header))
