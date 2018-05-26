import React from 'react'

export default function (props) {
    return (
        <div>
            <div className="d-flex justify-content-between flex-column-reverse flex-md-row align-items-center">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="navbar-brand py-5 text-center">
                        <div className="img-wrap">
                            <img src="/ilovecoding-logo.773fa887.svg" alt="iLoveCoding.org Logo" />
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div class="h6 text-muted text-uppercase m-0">
                            You are about to buy:
                        </div>
                        <h1>
                            {props.productName}
                        </h1>
                    </div>
                </div>
                <div className="alert-info alert my-2">
                    Need help? support@ilovecoding.org
                </div>
            </div>
            <p className="lead">
                Congratulations! Once you complete this secure registration form, you'll have instant access to my, "List-Grow Implementation Program" where you'll watch over my shoulder as we create your very own list-growing business that's based on your biggest passion!
            
            </p>
        </div>
    )
}