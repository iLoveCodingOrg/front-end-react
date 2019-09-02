import './styles.css'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

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
    <Link
      key={label}
      style={style}
      className={`${className}`}
      to={link}
    >
      {label}
    </Link>
  ))

  const renderUserLeft = () => {
    const links = [
      {
        label: 'Full Curriculum', // QUIZ / Start Here <- Ideas
        link: '/curriculum',
        className: 'btn btn-outline-primary',
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
        className: 'btn btn-outline-primary',
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
          <Link to="/pricing" className="btn btn-success ml--5">Upgrade</Link>
        )
      }
      return <span className="badge badge-success badge-pill t-uppercase ml--5">{level}</span>
    }

    return (
      <div className="flex flex-row align-items-center">
        <img className="mr--5" src={gravatarUrl} alt="User Gravatar" />
        <div>{firstName}</div>
        {renderLevel(accountLevel)}
        <button type="button" className="border-0 btn-link" onClick={logout}>(Log out)</button>
      </div>
    )
  }

  const renderGuestRight = () => {
    const links = [
      {
        label: 'Why JavaScript?',
        link: '/pages/why-javascript',
        className: 'nav-link btn py--25',
        style: {},
      },
      {
        label: 'How it works',
        link: '/pages/how-it-works',
        className: 'nav-link btn py--25',
        style: {},
      },
      {
        label: 'Real Results',
        link: '/reviews',
        className: 'nav-link btn py--25',
        style: {},
      },
      {
        label: 'Pricing',
        link: '/pricing',
        className: 'nav-link btn py--25',
        style: {},
      },
      {
        label: 'Login',
        link: '/login',
        className: 'nav-link btn py--25',
        style: {},
      },
      {
        label: 'Join Now',
        link: '/pricing',
        className: 'btn btn-primary',
        style: {},
      },
    ]

    return renderLinks(links)
  }

  const renderEditButton = () => {
    const { pathname } = location
    const pathParts = pathname.split('/')
    const { length } = pathParts
    const editLink = `/${pathParts[length - 2]}/${pathParts[length - 1]}/edit`
    return (
      <Link to={editLink} className="btn">Edit</Link>
    )
  }

  const renderAddButtons = () => (
    <div className="d-inline">
      <Link to="/pages/add" className="btn">+ Page</Link>
      <Link to="/lessons/add" className="btn">+ Lesson</Link>
      <Link to="/courses/add" className="btn">+ Course</Link>
      <Link to="/q/add" className="btn">+ Question</Link>
      <Link to="/blog/add" className="btn">+ Blog</Link>
    </div>
  )

  const renderAdminLinks = () => {
    const { roles } = user
    if (isEmpty(roles) || roles[0] !== 'admin') return null

    return (
      <div>
        {renderEditButton()}
        {renderAddButtons()}
      </div>
    )
  }

  return (
    <nav id="header" className="flex flex-column align-items-center navbar-expand p--5 navbar-light">
      <div className="navbar-brand p-0">
        <Link to="/" className="img-wrap img-wrap-hover">
          <img src={logo} alt="iLoveCoding.org Logo" />
        </Link>
      </div>
      <nav className="my--5 navbar-nav">
        { isLoggedIn ? renderUserLeft() : renderGuestLeft() }
      </nav>
      {renderAdminLinks()}
      <nav className="my--5 navbar-nav flex-wrap justify-content-center">
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
