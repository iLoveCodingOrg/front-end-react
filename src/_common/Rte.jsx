import React, { useState } from 'react'
import RichTextEditor, { createValueFromString } from 'react-rte'

export default function Rte({ value, updateValue }) {
  const [rteValue, setRteValue] = useState(createValueFromString(value, 'html'))

  return (
    <RichTextEditor
      value={rteValue}
      onChange={(v) => {
        setRteValue(v)
        updateValue(v.toString('html'))
      }}
    />
  )
}
