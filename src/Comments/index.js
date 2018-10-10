import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook'

class Comment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="text-center mt-4">
                <div className="alert">
                    🙌 Encourage me, share this:
                    &nbsp;<a href="{window.location.href}">{window.location.href}</a>
                </div>
                <FacebookProvider appId="1707643756216146">
                    <Comments href={window.location.href} />
                </FacebookProvider>
            </div>
        )
    }
}

export default Comment