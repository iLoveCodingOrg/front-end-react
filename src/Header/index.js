import './styles'
import React from 'react'
import logo from '../_app/images/ilovecoding-logo.svg'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.printLinks = this.printLinks.bind(this)
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
                <Link className="btn btn-outline-primary" to="/login">Student Login</Link>
            </nav>
        )
    }
}

export default Header