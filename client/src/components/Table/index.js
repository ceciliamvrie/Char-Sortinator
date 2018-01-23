import React from 'react'

const Table = ({ values }) => (
  <table>
    <tbody>
      {
        values.map(val => <tr key={val}><th>{val}</th></tr>)
      }
    </tbody>
  </table>
)

export default Table
