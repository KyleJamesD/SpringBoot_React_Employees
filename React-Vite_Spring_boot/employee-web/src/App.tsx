import { useState } from 'react'

import './App.css'

function App() {

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
      </div>

    </>
  )
}

export default App
