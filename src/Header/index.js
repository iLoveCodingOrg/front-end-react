import './styles'
import React from 'react'
import { connect } from 'react-redux'

import logo from '../_app/images/ilovecoding-logo.svg'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../_user/selectors'
import { actions } from '../_user'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.printLinks = this.printLinks.bind(this)
        this.printLinks2 = this.printLinks2.bind(this)
        this.renderUser = this.renderUser.bind(this)
        this.renderGuest = this.renderGuest.bind(this)
    }

    printLinks2(){
        const links = [{
            label: 'Lessons',
            link: '/lessons'
        }, {
            label: 'Courses',
            link: '/courses'
        }]

        return links.map(({ label, link }, index)=> (
            <Link key={index} className="p-2 text-secondary" to={link}>{label}</Link>
        ))
    }

    printLinks(){
        const links = [{
            label: 'Start Here',
            link: '#'
        }, {
            label: 'Success Stories',
            link: '#'
        }]

        return links.map(({ label, link }, index)=> (
            <Link key={index} className="p-2 text-secondary" to={link}>{label}</Link>
        ))
    }

    getGravatarUrl(emailHash){
        const defaultImageType = 'retro'
        const size = 30

        return `https://www.gravatar.com/avatar/${emailHash}.jpg?s=${size}&d=${defaultImageType}`
    }

    renderUser(){
        const { user, logout } = this.props
        const { firstName, emailHash } = user
        const gravatarUrl = this.getGravatarUrl(emailHash)

        return(
            <div className="d-flex flex-row align-items-center">
                <img className="rounded-circle mr-2" src={gravatarUrl} />
                <div>{firstName}</div>
                <button className="border-0 btn-link" onClick={logout}>(Log out)</button>
            </div>
        )
    }

    renderGuest(){
        return(
            <Link className="btn btn-sm btn-outline-primary" to="/login">Student Login</Link>
        )
    }

    render(){
        return (
            <nav className="d-flex flex-column flex-md-row align-items-center navbar-expand-lg py-2 px-3">
                <div className="navbar-brand">
                    <Link to="/" className="img-wrap img-wrap-hover">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </Link>
                </div>
                <nav className="my-2 my-md-0 ml-md-0 mr-md-auto">
                    {this.printLinks2()}
                </nav>
                <nav className="my-2 my-md-0 mr-md-3">
                    {this.printLinks()}
                </nav>
                {
                    this.props.isLoggedIn? this.renderUser() : this.renderGuest()
                }
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: isLoggedIn(state),
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

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Header)