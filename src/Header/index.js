import React from 'react'
import logo from '../_app/images/ilovecoding-logo.svg'
import styles from './styles'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.printLinks = this.printLinks.bind(this)
    }

    printLinks(){
        let links = [{
            label: 'Start Here',
            link: '#',
        }, {
            label: 'Success Stories',
            link: '#',
        }]

        return links.map(({label, link}, index)=> (
            <a key={index} className="p-2 text-secondary" href={link}>{label}</a>
        ))
    }
    render(){
        return (
            <nav className="d-flex flex-column flex-md-row align-items-center navbar-expand-lg py-2 px-3">
                <div className="navbar-brand mr-md-auto">
                    <Link to="/">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </Link>
                </div>

                <nav className="my-2 my-md-0 mr-md-3">
                    {this.printLinks()}
                </nav>
                <a className="btn btn-outline-primary" href="#">Student Login</a>
            </nav>
        )
    }
}

export default Header