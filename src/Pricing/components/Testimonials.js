import React from 'react'
import { PrintReviews, data } from '../../Reviews'

class Testimonials extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="d-flex justify-content-center">
                <div className="
                    col-md-10
                    col-lg-8">
                <PrintReviews
                    containerClasses="flex-column"
                    itemClasses="blockquote"
                    data={[data[0], data[1]]} />
                </div>
            </section>
        )
    }
}

export default Testimonials