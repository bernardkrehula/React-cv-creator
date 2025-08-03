import { useEffect, useRef, useState } from 'react'
import './App.css'
import SingleBtn from './SingleBtn'
import SingleForm from './SingleForm';

function App() {
  
  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>CV CREATOR</h1>
        </div>
        <div className='information'>
          <h2>Personal information</h2>
          <SingleForm name='personal' />
          <h2>Education</h2>
          <SingleForm name='education'/>
          <SingleBtn variation='delete'>Delete</SingleBtn>
          <SingleBtn variation='add'>Add Education</SingleBtn>
         
          
          <form>
            <h2>Experience</h2>
          </form>
          <SingleBtn variation='add'>Add Experience</SingleBtn>
          <SingleBtn variation='preview'>Preview</SingleBtn>
          <SingleBtn variation='reset'>Reset</SingleBtn>
        </div>
      </div>
    </>
  )
}

export default App
