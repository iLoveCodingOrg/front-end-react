import React from 'react'
import { PrintReviews, data } from '../../Reviews'

class Testimonials extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="d-flex justify-content-center">
                <div className="">
                <PrintReviews
                    containerClasses="flex-column"
                    itemClasses="mb-3"
                    data={[data[3], data[8]]} />
                </div>
            </section>
        )
    }
}


export default Testimonials