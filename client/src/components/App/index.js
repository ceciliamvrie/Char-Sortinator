import React from 'react'
import FormContainer from '../../containers/FormContainer'
import Table from '../Table'
import './App.css'

const App = ({ values, onSubmit }) => (
  <div className="App">
    <FormContainer onSubmit={onSubmit}/>
    <Table values={values} />
  </div>
)

export default App
