import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PremiumSupport({ isPremium }) {
    return (
        <div className="mt-5">
            <h4>Premium Support</h4>
            <ul className="list-unstyled">
            {
                isPremium?
                (<li>
                    <Link to="/groupcalls">Weekly Group Call with Aziz</Link>
                    &nbsp;<span className="badge badge-success">Premium</span>
                </li>)
                :
                (<li>
                    <Link to="pricing">Upgrade to iLoveCoding Premium</Link> to unlock Weekly Live Group Calls with Aziz <span className="badge badge-success">Premium</span>
                </li>)
            }
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        isPremium: state.user.activePlans.some((item) => {
            return item.isGroupCall
        })
    }
}

export default connect(mapStateToProps)(PremiumSupport)