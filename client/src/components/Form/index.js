import React from 'react'
import './styles.css'

const Form = (props) => (
  <form className="form" onSubmit={(e) => props.onSubmit(e, props.value)}>
    <input type="text" value={props.value} onChange={props.changeValue}/>
    <input type="submit" value="Submit" />
  </form>
)

export default Form
