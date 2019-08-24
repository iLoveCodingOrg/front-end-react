import '../style.css'
import React from 'react'

export default function Textarea({
  name, label, type, placeholder, value, onChange, className, required, pattern, maxLength,
}) {
  const classNames = className || 'mb-2'

  return (
    <label
      className={classNames}
      htmlFor={name}
    >
      <span>{label}</span>
      <textarea
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
      />
    </label>
  )
}
