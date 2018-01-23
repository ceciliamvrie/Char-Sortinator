import React, { Component } from 'react'
import App from '../components/App'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { sortedValues: [] }
  }

  onValueSubmit(e, val) {
    e.preventDefault()
    const sortedVal = this.sortValueLexically(val)
    this.setState({ sortedValues: this.state.sortedValues.concat(sortedVal) })
  }

  sortValueLexically(str) {
    const splitStr = str.split(' ').sort()
    return splitStr.join(' ')
  }

  render() {
    return(
      <App values={this.state.sortedValues} onSubmit={this.onValueSubmit.bind(this)}/>
    )
  }
}

export default AppContainer
