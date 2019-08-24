import '../style.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Input({
  name, type, placeholder, value, onChange, className,
  required, label, pattern, maxLength, disabled,
}) {
  const classNames = className || 'mb-2'

  return (
    <label
      className={classNames}
      htmlFor={name}
    >
      <span>{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </label>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  pattern: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  placeholder: undefined,
  value: '',
  onChange: undefined,
  className: undefined,
  required: false,
  label: undefined,
  pattern: undefined,
  maxLength: undefined,
  disabled: false,
}

export function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  const onChange = (e, val) => {
    e ? setValue(e.target.value) : setValue(val)
  }

  return [value, onChange]
}
