import React from "react"
import { Table } from "react-bootstrap"
import "./wordtable.css"
export default function WordTable(props) {
  return (
    <div>
      <Table responsive striped bordered hover size="sm" className="wordTable">
        <thead>
          <tr>
            <th>{props.language}</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {props.vocabulary.map((row, id) => {
            return (
              <tr>
                {row.map((col, index) => {
                  return <td key={index}>{col}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
