import './switch.scss'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Switch } from '../'
import { isOfferValid } from '../../CountDown'

const data30 = {
    one: {
        price: '$419.30',
        terms: 'One-time Payment',
        link: '/checkout/ilc-fs-599'
    },
    four: {
        price: '$105',
        terms: 'Only 4 payments of $105/month',
        link: '/checkout/ilc-fs-150-4pay'
    }
}

const dataOriginal = {
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
        const is30Off = isOfferValid(this.props.location)
        let data
        if(is30Off){
            data = data30
        } else{
            data = dataOriginal
        }
        
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
                    <div style={{ maxWidth: '500px', minWidth: '320px' }}
                        className="card mb-4 box-shadow">
                        <div className="card-header bg-dark text-white ">
                            <h4 className="my-0 font-weight-normal text-center">Full-Stack Mastery</h4>
                        </div>
                        <div className="card-body align-self-center">
                            <h1 className="card-title pricing-card-title text-center">
                                {price}
                            </h1>
                            <div className="text-muted text-center">{terms}</div>
                            
                            <div className="text-center h4 my-3">
                                <div className="badge border bg-gray-200">
                                    Full one year access
                                </div>
                            </div>

                            <strong>Complete Training:</strong>
                            <ul>
                                <li>Complete step-by-step video training</li>
                                <li>Access to all in-depth training modules</li>
                            </ul>

                            <strong>Personalized Mentorship:</strong>
                            <ul>
                                <li>Unlimited access to me (Aziz) via email</li>
                                <li>Live weekly group calls with me (Aziz)</li>
                                <li>Live 1-on-1 private office hours with me (Aziz)</li>
                            </ul>

                            <strong>More...</strong>
                            <ul>
                                <li>Connect with peers via a private student community</li>
                                <li>60-day Full Money Back Guarantee</li>
                            </ul>
                            
                            <Link to={link} className="btn btn-block btn-lg text-center btn-primary">Get Instant Access</Link>
                            <small>The training program is designed to be completed within 5-months. Still I am giving you one full year of access. This way you will have plenty of time to complete the training, review the lessons, practice and achieve your goals - even if you go at a slow pace.</small>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Price)