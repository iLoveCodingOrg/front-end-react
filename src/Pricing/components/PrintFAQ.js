import React from 'react'

export default function ({ data }){
  return <div className="d-flex flex-wrap">
      {data.map(({ question, Answer}, index)=>{
          return (
            <div key={index}>
                <p className="h4"><strong>{question}</strong></p>
                <p><Answer /></p>
                {index !== data.length - 1? <hr/> : null }
            </div>
          )
      })}
  </div>
}
