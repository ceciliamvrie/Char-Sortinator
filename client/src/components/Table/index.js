import React from 'react'

const Table = ({ values }) => (
  <table>
    {
      values.map(val => <tr><th>{val}</th></tr>)
    }
  </table>
)

export default Table
