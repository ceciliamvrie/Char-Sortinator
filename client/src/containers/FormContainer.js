import React, { Component } from 'react'
import Form from '../components/Form'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  onValueChange(e) {
    this.setState({ input: e.target.value })
  }

  render() {
    return(
      <Form value={this.state.input} changeValue={this.onValueChange.bind(this)} onSubmit={this.props.onSubmit}/>
    )
  }
}

export default FormContainer
