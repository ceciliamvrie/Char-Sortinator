import React from 'react'

const Form = (props) => (
  <form action="/action_page.php" onSubmit={(e) => props.onSubmit(e, props.value)}>
    <input type="text" value={props.value} onChange={props.changeValue}/>
    <input type="submit" value="Submit" />
  </form>
)

export default Form
