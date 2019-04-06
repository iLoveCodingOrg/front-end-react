import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Breadcrumbs from '../../Breadcrumbs'
import { getSubscriptionById } from '../actions'
import Transactions from './Transactions'
import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import PaymentMethodInfo from './PaymentMethodInfo'

class SubscriptionView extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSubscription(this.props.match.params.id)
    }

    componentDidUpdate(previousProp){
        const { id } = this.props.match.params
        if(previousProp.match.params.id !== id){
            this.props.getSubscription(id)
        }
    }

    render() {
        const title = `Subscription ID: ${this.props.match.params.id}`
        const { isLoading, error, view } = this.props
        const { plan, transactions, active } = view
        return (
            <div className="d-flex flex-column">
                <Helmet><title>{title} - iLoveCoding</title></Helmet>
                <section className="
                    align-self-center
                    container
                    mt-3
                    mb-5"
                >
                    <Breadcrumbs nodes={[
                        {
                            label: 'Back to Dashboard',
                            link: '/dashboard',
                        },
                        {
                            label: 'Subscriptions',
                            link: '/subscriptions',
                        },
                        {
                            label: title,
                        }
                    ]}/>
                    <div className="row">
                        <div className="col-12 ">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <hr className="mb-1"/>
                    <div className="row">
                        <div className="col-12">
                        {
                            (isLoading)? <Loading />
                            :
                            (error) ? <ErrorBox />
                            :
                            (
                                <div>
                                    <div className="my-3 h4">
                                        Your subscription is&nbsp;
                                    {
                                        (active)? <span className="badge badge-pill badge-success mr-3">Active</span>:
                                        <span className="badge badge-pill badge-danger mr-3">Inactive</span>
                                    }
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <h3>Plan details</h3>
                                            <p>
                                                <strong>Plan Name</strong><br/>
                                                {plan.name}
                                            </p>
                                            <p>
                                                <strong>Plan Description</strong><br/>
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <h3>Payment Method on file</h3>
                                            <PaymentMethodInfo
                                                creditCard={transactions[0].creditCard}
                                                paypal={transactions[0].paypal}
                                                showUpdateBtn={true}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <h3>Transactions</h3>
                                            <Transactions data={transactions}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

SubscriptionView.propTypes = {
    getSubscription: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    view: PropTypes.object.isRequired
}

function mapStateToProps({ subscriptions }){
    return {
        error: subscriptions.view.error,
        isLoading: subscriptions.view.isLoading,
        view: subscriptions.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getSubscription: (id)=>{
            dispatch(getSubscriptionById(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionView)