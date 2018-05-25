import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import { actions } from '../'

class Checkout extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
        const { slug } = this.props.match.params
        
        if(nextProps.match.params.slug !== slug){
            this.props.getProduct(nextProps.match.params.slug)
        }
    }

    componentWillMount(){
      this.props.getProduct(this.props.match.params.slug)
    }

    render(){
        return(
            <div>
                checkout page
                {get(this.props.product, 'name')}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        error: state.checkout.error,
        isLoading: state.checkout.isLoading,
        product: state.checkout.product
    }
}

function mapDispatchToProps(dispatch){
    return {
        getProduct: (slug)=>{
            dispatch(actions.getProductBySlug(slug))
        },
        buy: ()=>{
            dispatch(actions.buy())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Checkout)
