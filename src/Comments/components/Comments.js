import React, { useEffect } from 'react'

export default function() {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://cdn.commento.io/js/commento.js'
    script.async = true

    document.body.appendChild(script)
  }, [])

  return <div id="commento"></div>
}
