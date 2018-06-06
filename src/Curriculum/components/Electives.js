import React from 'react'

export default ()=>{
    return (
        <section className="bg-light card p-5 mt-5">
            <h2>
                <small className="d-block text-muted">
                    Electives:
                </small>
                Additional Training
            </h2>
            <p className="lead text-muted">
                These are additional supplimentary training. Choose the topic that spark your interest in any order.
            </p>
            <p className="mb-0"><strong>Note:</strong> Besure to read the prerequisite section under each training before starting the training.</p>
            <hr/>
            <strong>Core Training</strong>
            <ul>
                <li><a href="">Learn to use any Web API - Part 1</a></li>
                <li><a href="">Learn to use any Web API - Part 2</a></li>
                <li><a href="">Getting Good with Git</a></li>
                <li><a href="">Learn Object Oriented Programming with Javascript</a></li>
                <li><a href="">Learn Angular JS in 14 days</a></li>
            </ul>
        </section>
    )
}