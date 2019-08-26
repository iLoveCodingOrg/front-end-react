import React from 'react'

class PrintFAQs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: [],
    }

    this.toggleQuestion = this.toggleQuestion.bind(this)
  }

  toggleQuestion(index) {
    const newVar = this.state.isVisible.slice()
    newVar[index] = !newVar[index]
    this.setState({
      isVisible: newVar,
    })
  }

  render() {
    const hide = {
      height: 0,
      padding: 0,
      overflow: 'hidden',
    }
    const { data } = this.props
    return (
      <div className="flex flex-wrap">
        {data.map(({ question, Answer }, index) => (
          <div className="bg-white mb-1 border-dark" key={index}>
            <button
              className="p-2 btn btn-light btn-block text-left"
              onClick={() => this.toggleQuestion(index)}
            >
              ➕
              {' '}
              {question}
            </button>
            <div style={this.state.isVisible[index] ? null : hide}>
              <Answer />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PrintFAQs
