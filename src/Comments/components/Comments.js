import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook'
import { FB_APP_ID } from '../../_app/constants';

class Comment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="text-center mt-4">
                <div className="alert">
                    🙌 Encourage me, share this:
                    &nbsp;
                    <a className="text-truncate" href="{window.location.href}">{window.location.href}</a>
                </div>
                <FacebookProvider appId={FB_APP_ID}>
                    <Comments href={window.location.href} />
                </FacebookProvider>
            </div>
        )
    }
}

export default Comment