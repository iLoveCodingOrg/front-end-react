import './switch.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Switch } from '../'

const data = {
    one: {
        price: '$599',
        terms: 'One-time Payment',
        link: '/checkout/ilc-fs-599'
    },
    four: {
        price: '$150',
        terms: 'Only 4 payments of $150/month',
        link: '/checkout/ilc-fs-150-4pay'
    }
}
class Price extends React.Component {
    constructor(props){
        super(props)

        this.handleSwitch = this.handleSwitch.bind(this)

        this.state = {
            selected: 'one'
        }
    }
    handleSwitch(event){
        this.setState({
            selected: event.target.value
        })
    }
    render(){
        const { price, link, terms } = data[this.state.selected]
        return (
            <section className="d-flex justify-content-center">
                <div className="
                    d-flex flex-column align-items-center
                    col-12
                    col-md-10
                    col-lg-8">
                    <Switch
                        style={{ maxWidth: '400px', minWidth: '320px' }}
                        onChange={this.handleSwitch}
                        selected={this.state.selected}
                    />
                    <div style={{ maxWidth: '400px', minWidth: '320px' }}
                        className="card mb-4 box-shadow">
                        <div className="card-header bg-dark text-white ">
                            <h4 className="my-0 font-weight-normal text-center">Full-Stack Mastery</h4>
                        </div>
                        <div className="card-body align-self-center">
                            <h1 className="card-title pricing-card-title text-center">
                                {price}
                            </h1>
                            <div className="text-muted text-center">{terms}</div>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>- Complete Step-by-Step Training</li>
                                <li>- All 4 in-depth learning modules</li>
                                <li>- Access to Industry Expert (Aziz)</li>
                                <li>- Student Community</li>
                                <li>- <del>6-month</del> 1 Year Access</li>
                                <li>- 60-day money back guarantee</li>
                            </ul>
                            <Link to={link} className="btn btn-block btn-lg text-center btn-primary">Get Instant Access</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Price