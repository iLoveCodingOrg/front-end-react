import React from 'react'
import { Link } from 'react-router-dom'

// Nodes shape
// [{
//     label, link
// }]
export default ({ nodes }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      { nodes.map(({ label, link }, index) => {
        const isLastNode = (index === nodes.length - 1)

        if (isLastNode) {
          return <li key={index} className="breadcrumb-item active" aria-current="page">{label}</li>
        }
        return (
          <li key={index} className="breadcrumb-item">
            <Link to={link}>{label}</Link>
          </li>
        )
      })}
    </ol>
  </nav>
)
