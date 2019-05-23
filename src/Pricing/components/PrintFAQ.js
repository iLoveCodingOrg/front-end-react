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
      <div className="d-flex flex-wrap">
        {data.map(({ question, Answer }, index) => (
          <div className="card mb-3 border-dark" key={index}>
            <button
              className="p-4 btn btn-light btn-block text-left"
              onClick={() => this.toggleQuestion(index)}
            >
                            ➕
              {' '}
              {question}
            </button>
            <div className="card-body" style={this.state.isVisible[index] ? null : hide}>
              <Answer />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PrintFAQs
