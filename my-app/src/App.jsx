import { useEffect, useState } from 'react'
import './App.css'
import SingleBtn from './SingleBtn'

function App() {
  const [ formInfo, setFormInfo ] = useState([]);
  const personalInfo = [
    {
      id: 1,
      placeHolder: 'First Name',
      value: ''
    }
  ]
  const education = [
    {
      id: 1,
      placeHolder: '',
      value: ''
    }
  ]
  const experience = [
    {
      id: 1,
      placeHolder: '',
      value: ''
    }
  ]

    

  useEffect(() => {
    if(formInfo.length === 0) setFormInfo(prev => [...prev, personalInfo, education, experience]);
  },[]);
  
  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>CV CREATOR</h1>
        </div>
        <div className='information'>
          <form>
            <h2>Personal information</h2>
          </form>
          <form>
            <h2>Education</h2>
          </form>
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
