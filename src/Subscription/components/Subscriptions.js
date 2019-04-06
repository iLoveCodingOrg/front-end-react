import React from 'react'
import { Link } from 'react-router-dom'

export default ({data})=>{
    return <table className="table table-responsive w-100 table-striped table-hover">
        { header() }
        <tbody>
            { data.map(({ startDate, subscriptionId, productName, isActive })=>(
                <tr key={subscriptionId}>
                    <td>{(new Date(startDate)).toDateString()}</td>
                    <td><Link to={`/subscriptions/${subscriptionId}`}>{subscriptionId}</Link></td>
                    <td><Link to={`/subscriptions/${subscriptionId}`}>{productName}</Link></td>
                    <td>{isActive? 'Active': 'Inactive'}</td>
                </tr>
            ))}
        </tbody>
    </table>
}

function header(){
    return (
        <thead>
            <tr>
                <th>Start Date</th>
                <th>Subscription Id</th>
                <th>Plan Name</th>
                <th>Status</th>
            </tr>
        </thead>
    )
}