import React from 'react'
import logo from '../_main/images/ilovecoding-logo.svg'
import styles from './styles'

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
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-brand mr-md-auto">
                    <a href="/">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </a>
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