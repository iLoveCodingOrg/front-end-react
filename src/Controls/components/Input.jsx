import '../style.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Input({
  name, type, placeholder, value, onChange, className,
  required, label, pattern, maxLength, disabled, inlineMessage, ...props

}) {
  const classNames = className || 'mb-2'

  return (
    <label
      className={classNames}
      htmlFor={name}
    >
      <span>{label || name}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder || label || name}
        value={value}
        pattern={pattern}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...props}
      />
      {!!inlineMessage && <div className="small color-red t-left">{inlineMessage}</div>}
    </label>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  pattern: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  inlineMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

Input.defaultProps = {
  type: 'text',
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  className: undefined,
  required: false,
  label: undefined,
  pattern: undefined,
  maxLength: undefined,
  disabled: false,
  inlineMessage: false,
}

export function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  const onChange = (e, val) => {
    e ? setValue(e.target.value) : setValue(val)
  }

  return [value, onChange]
}
