import React from 'react'

export default function ({ data, itemClasses }){
  return <div className="d-flex flex-wrap">
      {data.map(({ title, body, thumbSrc, credit1, credit2 }, index)=>{
          return (
            <div key={index} className={`p-3 bg-white border rounded ${itemClasses}`}>
                <img className="rounded-circle mr-3 float-left" src={thumbSrc} alt={title} width="100" height="100" />
                <p><strong>{title}</strong></p>
                <p><em>"{body}"</em></p>
                <footer className="blockquote-footer">
                    {credit1}
                    <br />{credit2}
              </footer>
            </div>
          )
      })}
  </div>
}
