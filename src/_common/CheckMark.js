import React from 'react';

export default ({title = "Complete"})=>{
    return (
       <span
        className="oi oi-circle-check text-teal"
        title={title}
        aria-hidden="true"
        style={{ paddingRight: '5px'}} />
    )
}