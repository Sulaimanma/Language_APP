import React from "react"
import { Table } from "react-bootstrap"
import "./wordtable.css"
export default function WordTable() {
  return (
    <div>
      <Table responsive striped bordered hover size="sm" className="wordTable">
        <thead>
          <tr>
            <th>Wakka Wakka</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
