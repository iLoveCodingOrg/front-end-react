import React from 'react'
import { Helmet } from 'react-helmet'

export default class GroupCall extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const script = document.createElement('script')

        script.src = 'https://app.easywebinar.com/widget/js/ewp_widget.js?v=1.1.95'
        script.async = true

        document.body.appendChild(script)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>Weekly Group Calls</title>
                </Helmet>
                <div className="align-self-center col-md-10 col-lg-8 mt-3">
                    <h1 className="headline">Weekly Group Calls</h1>
                    
                    <p className="lead">Register to the next upcoming weekly group call</p>
                

                    <div className="alert alert-info pb-0">
                        <h5 className="alert-heading">
                            Please come to the call prepared
                        </h5>
                        <ol>
                            <li>Write all your questions down.</li>
                            <li>If you need to discuss some code challenges, have your computer and project ready.</li>
                        </ol>
                    </div>


                    <div class="widget_wrapper">
                        <div
                            class="ewp_form_container ewp_widget_container"
                            webinar_id="7TeZqZ7i2W+C+GVXkbe9OA=="></div>
                    </div>
                </div>
            </div>
        )
    }
}