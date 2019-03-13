import './styles'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import logo from '../_app/images/ilovecoding-logo.svg'
import { Link } from 'react-router-dom'
import { actions, selectors } from '../_user'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.renderLinks = this.renderLinks.bind(this)
        
        this.renderUserLeft = this.renderUserLeft.bind(this)
        this.renderGuestLeft = this.renderGuestLeft.bind(this)
        
        this.renderUserRight = this.renderUserRight.bind(this)
        this.renderGuestRight = this.renderGuestRight.bind(this)
        
        this.renderAdminLinks = this.renderAdminLinks.bind(this)
        this.renderAddButtons = this.renderAddButtons.bind(this)
        this.renderEditButton = this.renderEditButton.bind(this)
    }

    getGravatarUrl(emailHash){
        const defaultImageType = 'retro'
        const size = 30

        return `https://www.gravatar.com/avatar/${emailHash}.jpg?s=${size}&d=${defaultImageType}`
    }

    renderLinks(links){
        return links.map(({ label, link, className, style }, index)=> (
            <Link
                key={index}
                style={style}
                className={`${className}`}
                to={link}
            >
                {label}
            </Link>
        ))
    }

    renderUserLeft(){
        const links = [
            {
                label: 'Full Curriculum', // QUIZ / Start Here <- Ideas
                link: '/curriculum',
                className: 'btn btn-outline-primary',
                style: {}
            },
            // {
            //     label: 'Core Training',
            //     link: '/courses/core',
            //     className: 'nav-link btn btn-sm py-1',
            //     style: {}
            // },
            // {
            //     label: 'Practice Projects',
            //     link: '/courses/projects',
            //     className: 'nav-link btn btn-sm py-1',
            //     style: {}
            // },
            // {
            //     label: 'Questions/Answers',
            //     link: '/questions',
            //     className: 'nav-link btn btn-sm py-1',
            //     style: {}
            // }
        ]

        return this.renderLinks(links)
    }

    renderGuestLeft(){
        const links = [
            {
                label: 'Full Curriculum', // QUIZ / Start Here <- Ideas
                link: '/curriculum',
                className: 'btn btn-outline-primary',
                style: {}
            },
            // {
            //     label: 'Core Training',
            //     link: '/courses/core',
            //     className: 'nav-link btn btn-sm py-1',
            //     style: {}
            // },
            // {
            //     label: 'Practice Projects',
            //     link: '/courses/projects',
            //     className: 'nav-link btn btn-sm py-1',
            //     style: {}
            // },
            // {
            //     label: 'Questions/Answers',
            //     link: '/questions',
            //     className: 'nav-link btn btn-sm py-1',
            //     style: {}
            // }
        ]

        return this.renderLinks(links)
    }

    renderUserRight(){
        const { user, logout, accountLevel } = this.props
        const { firstName, emailHash } = user
        const gravatarUrl = this.getGravatarUrl(emailHash)

        return(
            <div className="d-flex flex-row align-items-center">
                <img className="rounded-circle mr-2" src={gravatarUrl} />
                <div>{firstName}</div>
                {renderLevel(accountLevel)}
                <button className="border-0 btn-link" onClick={logout}>(Log out)</button>
            </div>
        )

        function renderLevel(level){
            if(level === 'free'){
                return (
                    <Link to="/pricing" className="btn btn-success ml-2">Upgrade</Link>
                )
            }else{
                return <span className="badge badge-success badge-pill text-uppercase ml-2">{level}</span>
            }
        }
    }

    renderGuestRight(){
        const links = [
            {
                label: 'Why JavaScript?',
                link: '/pages/why-javascript',
                className: 'nav-link btn py-1',
                style: {}
            },
            {
                label: 'How it works',
                link: '/pages/how-it-works',
                className: 'nav-link btn py-1',
                style: {}
            },
            {
                label: 'Real Results',
                link: '/reviews',
                className: 'nav-link btn py-1',
                style: {}
            },
            {
                label: 'Pricing',
                link: '/pricing',
                className: 'nav-link btn py-1',
                style: {}
            },
            {
                label: 'Login',
                link: '/login',
                className: 'nav-link btn py-1',
                style: {}
            },
            {
                label: 'Join Now',
                link: '/pricing',
                className: 'btn btn-primary',
                style: {}
            },
        ]

        return this.renderLinks(links)
    }

    renderEditButton(){
        const { pathname } = this.props.location
        const pathParts = pathname.split('/')
        const length = pathParts.length
        const editLink = `/${pathParts[length-2]}/${pathParts[length-1]}/edit`
        return (
            <Link to={editLink} className="btn">Edit</Link>
        )
    }

    renderAddButtons(){
        return (
            <div className="d-inline">
                <Link to="/pages/add" className="btn">+ Page</Link>
                <Link to="/lessons/add" className="btn">+ Lesson</Link>
                <Link to="/courses/add" className="btn">+ Course</Link>
                <Link to="/q/add" className="btn">+ Question</Link>
                <Link to="/blog/add" className="btn">+ Blog</Link>
            </div>
        )
    }

    renderAdminLinks(){
        const { roles } = this.props.user
        if(isEmpty(roles) || roles[0] !== 'admin') return
        
        return (
            <div>
                {this.renderEditButton()}
                {this.renderAddButtons()}
            </div>
        )
    }

    render(){
        return (
            <nav id="header" className="d-flex flex-column flex-md-row align-items-center navbar-expand p-2 navbar-light">
                <div className="navbar-brand p-0">
                    <Link to="/" className="img-wrap img-wrap-hover">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </Link>
                </div>
                <nav className="my-2 my-md-0 ml-md-3 mr-md-auto navbar-nav">
                    {
                        this.props.isLoggedIn? this.renderUserLeft() : this.renderGuestLeft()
                    }
                </nav>
                {this.renderAdminLinks()}
                <nav className="my-2 my-md-0 navbar-nav flex-wrap justify-content-center">
                    {
                        this.props.isLoggedIn? this.renderUserRight() : this.renderGuestRight()
                    }
                </nav>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: selectors.isLoggedIn(state),
        accountLevel: selectors.getLevel(state),
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: ()=>{
            return dispatch(actions.logout())
            .then(({ isSuccess })=>{
                if(isSuccess){
                    window.location.reload()
                }
            })
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)(Header))