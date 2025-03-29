'use client'
import { useState } from 'react'
import './App.css'
import { useReactTable } from '@tanstack/react-table';
import * as React from "react";



function App() {

  const [employees,setEmployees] = useState([]);

  const columns = React.useMemo(()=>[
    {Header:"EmployeeID",accessor:"employeeId"},
    {Header:"Name",accessor:"name"},
    {Header:"Manager",accessor:"manager"},
    {Header:"Salary",accessor:"salary"}
  ],[]);


  const data = React.useMemo(()=> employees,[]);
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useReactTable({columns,data:employees});

  return (
    <>
      <div className='main-container'>
        <h3>Full stack Application using Spring Boot, Vite, React, TS & PostgreSQL</h3>
        <div className='add-panel'>
          <div className='addpaneldiv'>
            <label htmlFor='name'>Name</label><br></br>
            <input className='addpanelinput' type='text' name="name" id="name"></input>
          </div>
          <div className='addpaneldiv'>
            <label htmlFor='manager'>Manager</label><br></br>
            <input className='addpanelinput' type='text' name="manager" id="manager"></input>
          </div>
          <div className='addpaneldiv'>
            <label htmlFor='salary'>Salary</label><br></br>
            <input className='addpanelinput' type='text' name="salary" id="salary"></input>
          </div>
          <button className='addbtn'>Add</button>
          <button className='cancelbtn'>Cancel</button>
        </div>
        <input className='searchinput' type='search' name='inputsearch' id='inputsearch' placeholder='Search Employee by Name'></input>
        <table className='table' {...getTableProps()}>
          <thead>
          {headerGroups.map((hg)=>(
            <tr {...hg.getHeaderGroupProps()} key={hg.id}>
            {hg.headers.map((column)=>(
              <th {...column.getHeaderProps()} key={column.id} > {column.render("Header")} </th>
            ))}

            </tr>
          ))}


          </thead>


          <tbody {...getTableBodyProps()}>
          {rows.map((row)=>{
            prepareRow(row);
            return (<tr {...row.getRowProps()} key={row.id}>
            {row.cells.map((cell)=>(
              <td {...cell.getCellProps()} key={cell.id}> {cell.render("Cell")}</td>
            ))}
          </tr>)

          })}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
