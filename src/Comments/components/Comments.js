import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

class Comment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { of, id, title, url } = this.props
        // Fortunately we have two disqus installation.
        // These are tthe two corresponding shortnames for them
        const shortname = (of === 'blog')? 'blogilovecodingorg' : 'ilovecoding'
        return (
            <div className="text-center mt-4">
                <div className="alert">
                    🙌 Encourage me, share this:
                    &nbsp;
                    <a className="text-truncate" href="{window.location.href}">{window.location.href}</a>
                </div>
                <DiscussionEmbed shortname={shortname} config={{
                    identifier: id,
                    title,
                    url
                }} />
            </div>
        )
    }
}

Comment.defaultProps = {
    of: '' // random character. Default of can be blank
}
export default Comment