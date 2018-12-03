import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

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
                <DiscussionEmbed shortname='iLoveCoding' config={{
                    url: this.props.url,
                    identifier: this.props.id,
                    title: this.props.title,
                }} />
            </div>
        )
    }
}

export default Comment