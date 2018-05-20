import './styles'
import React from 'react'
import { connect } from 'react-redux'

import logo from '../_app/images/ilovecoding-logo.svg'
import { Link } from 'react-router-dom'

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
        const { firstName, emailHash } = this.props.user
        const gravatarUrl = this.getGravatarUrl(emailHash)

        return(
            <div>
                <img src={gravatarUrl} />
                {firstName}
            </div>
        )
    }

    renderGuest(){
        return(
            <Link className="btn btn-outline-primary" to="/login">Student Login</Link>
        )
    }

    render(){
        return (
            <nav className="d-flex flex-column flex-md-row align-items-center navbar-expand-lg py-2 px-3">
                <div className="navbar-brand">
                    <Link to="/">
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
                    this.props.user.emailHash? this.renderUser() : this.renderGuest()
                }
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

function mapDispatchToProps(){
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Header)