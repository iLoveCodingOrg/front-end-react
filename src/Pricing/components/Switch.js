import './switch.css'
import React from 'react'
import PropTypes from 'prop-types'

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.renderOptions = this.renderOptions.bind(this)
  }

  renderOptions() {
    const { selected, onChange, options } = this.props

    const randomName = Math.floor(Math.random() * 100)

    return options.map((option, index) => (
      <div key={index} className="float-left">
        <input
          type="radio"
          name={randomName}
          id={`${randomName}-${option.name}`}
          value={option.name}
          checked={selected === option.name}
          onChange={onChange}
        />
        <label className="" htmlFor={`${randomName}-${option.name}`}>{option.label}</label>
        {
                    (selected === option.name)
                      ? (
                        <span
                          className="switch-handle"
                          style={{
                            ...option.css,
                          }}
                        />
                      )
                      : null
                }
      </div>
    ))
  }

  render() {
    return (
      <div className="flex flex-column align-items-center">
        <p className="">Select payment option:</p>
        <div className="switch">
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

Switch.defaultProps = {
  options: [{
    name: 'monthly',
    label: 'Monthly',
    css: {
      width: '72px',
      left: '2px',
    },
  },
  {
    name: 'yearly',
    label: 'Yearly (Save 32%)',
    css: {
      width: '139px',
      left: '80px',
    },
  }],
  selected: 'yearly',
}

export default Switch
