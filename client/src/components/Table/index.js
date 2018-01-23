import React from 'react'
import './styles.css'

const Table = ({ values }) => (
  <table className="table">
    <tbody>
      {
        values.map(val => <tr key={val}><th>{val}</th></tr>)
      }
    </tbody>
  </table>
)

export default Table
