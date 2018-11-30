import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { Card } from './'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

class List extends React.Component{
    constructor(props){
        super(props)

        this.getTitle = this.getTitle.bind(this)
    }

    componentWillMount(){
        this.props.getList()
    }

    componentWillUnmount(){
        // this.props.clearList()
    }

    getTitle(){
        switch(this.props.of){
            case 'lessons':
                return 'All Lessons'
            case 'courses':
                return 'All Courses'
            case 'pages':
                return 'All Pages'
        }
    }

    render(){
        const ListHeaderComponent = this.props.listHeader
        return (
            <div className="container">
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>{this.getTitle()} - iLoveCoding</title></Helmet>
                        <ListHeaderComponent />
                        {
                            this.props.list.map((item, index)=>{
                            return <Card
                                key={index}
                                item={item}
                                of={this.props.of}
                            />
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

List.propTypes = {
    clearList: PropTypes.func.isRequired,
    getList: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    listHeader: PropTypes.func.isRequired,
    of: PropTypes.oneOf(['questions', 'lessons', 'courses', 'pages']).isRequired
}

export default List