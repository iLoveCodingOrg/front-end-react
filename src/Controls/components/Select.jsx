import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Select({
  name, placeholder, selectedOptionIndex, onChange, options, className,
}) {
  const classNames = className || 'mb--5'

  return (
    <label
      className={`select ${classNames}`}
      htmlFor={name}
    >
      <span>{placeholder}</span>
      <select
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={selectedOptionIndex}
      >
        {options.map(({ id, isDisabled, value }, index) => (
          <option
            key={id}
            value={index}
            disabled={isDisabled}
          >
            {value}
          </option>
        ))}
      </select>
    </label>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectedOptionIndex: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    isDisabled: PropTypes.any,
  })),
}

export function useSelect(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  const onChange = (e) => {
    e.preventDefault()
    setValue(parseInt(e.target.value, 10))
  }

  return [value, onChange]
}
