import React, { Component } from 'react'
import axios from 'axios'
import App from '../components/App'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { sortedValues: [] }
  }

  onValueSubmit(e, val) {
    e.preventDefault()
    this.postValue(val)
    this.setState({ sortedValues: this.state.sortedValues.concat(this.sortValueLexically(val)) })
  }

  postValue(val) {
    const unsorted = { string: val }
    axios.post('http://localhost:3001/api/sort', unsorted)
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
