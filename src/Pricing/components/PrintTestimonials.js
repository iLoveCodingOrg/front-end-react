import React from 'react'

export default function ({ data }){
  return <div className="d-flex flex-wrap">
      {data.map(({ title, body, thumbSrc, credit1, credit2 }, index)=>{
          return (
            <div key={index} className="blockquote p-3 bg-white border rounded">
                <img className="rounded-circle mr-3 float-left" src={thumbSrc} alt={title} width="100" height="100" />
                <p><strong>{title}</strong></p>
                <p>{body}</p>
                <footer className="blockquote-footer">
                    {credit1}
                    <br />{credit2}
              </footer>
            </div>
          )
      })}
  </div>
}
