import React, { useMemo, useEffect, useState } from "react"
import { useTable } from "react-table"
import { word_data, columns } from "./Learn"
// import axios from "axios";
import "./table.css"
import { pcccData } from "../Helpers/pccc"
import Location from "../Helpers/Location"
export default function BasicTable() {
  const [data, setData] = useState()
  Location()
  //   useEffect(() => {
  //     (async () => {
  //       const result = await axios(
  //         "https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=71b07111-fe1c-4a7c-943b-4c6b3eb13d51"
  //       );
  //       setData(result.data.result.records);
  //     })();
  //   }, []);

  //   const word_data = data;
  //   const columns = useMemo(
  //     () => [
  //       {
  //         Header: "English",
  //         accessor: "English",
  //       },
  //       {
  //         Header: "Wakka Wakka",
  //         accessor: "Wakka Wakka",
  //       },
  //     ],
  //     []
  //   );
  //   const tableInstance = useTable({
  //     columns: columns,
  //     data: word_data,
  //   });

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     rows,
  //     prepareRow,
  //   } = tableInstance;

  return (
    <div></div>
    // <table {...getTableProps()}>
    //   <thead>
    //     {" "}
    //     {headerGroups.map(headerGroup => (
    //       <tr {...headerGroup.getHeaderGroupProps}>
    //         {" "}
    //         {headerGroup.headers.map(column => (
    //           <th {...column.getHeaderProps()}> {column} </th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>{" "}
    //   <tbody {...getTableBodyProps()}>
    //     {" "}
    //     {rows.map(row => {
    //       prepareRow(row);
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {" "}
    //           {row.cells.map(cell => {
    //             return (
    //               <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
    //             );
    //           })}
    //         </tr>
    //       );
    //     })}
    //   </tbody>{" "}
    // </table>
  )
}
