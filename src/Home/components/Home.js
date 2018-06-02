import React from 'react'
import AboutAziz from './AboutAziz'
import HomeForm from './HomeForm'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <section className="
                    align-self-center
                    text-center
                    col-sm-12
                    col-md-8
                    col-lg-6
                    mt-3
                    mb-5"
                    style={{ maxWidth: '540px' }}
                >
                    <h1 className="headline">
                        Become a confident Front-End or
                        Full-Stack Developer
                    </h1>
                    <div className="col-xs-12 text-center">
                        <p className="lead text-muted">
                            Enroll in my Free 5 lesson email course where I show you the exact strategies I used to go from a struggling newbie to a professional web developer.
                        </p>
                        <HomeForm />
                    </div>
                </section>
                {/* <div className="bg-gray-100 mt-5">
                    <div className="container p-5">
                        <AboutAziz />
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Home