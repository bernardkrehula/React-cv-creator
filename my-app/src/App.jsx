import { useEffect, useRef, useState } from 'react'
import './App.css'
import SingleBtn from './SingleBtn'
import SingleForm from './SingleForm';
import { formData } from './FormData';

function App() {
  const [ formInfo, setFormInfo ] = useState({});
  const initialized = useRef(false);
  const index = useRef(0);

  useEffect(() => {
  if(!initialized.current) {
      setFormInfo(formData);
      initialized.current = true;
  }
  },[]);
  
  const addInfo = (name) => {
    const info = name + (index.current + 1)
    setFormInfo(prev => ({...prev, [info]: formData[name]}));
  }

    
  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>CV CREATOR</h1>
        </div>
        <div className='information'>
          <h2>Personal information</h2>
          <SingleForm name='personal' formInfo={formInfo} initialized={initialized}/>
          <h2>Education</h2>
          <SingleForm name='education' formInfo={formInfo} initialized={initialized}/>
          <SingleBtn variation='delete' >Delete</SingleBtn>
          <SingleBtn variation='add' type='submit'  onClick={() => addInfo('education')}>Add Education</SingleBtn>
          <h2>Experience</h2>
          <SingleForm name='experience' formInfo={formInfo} initialized={initialized}/>
          <SingleBtn variation='add' onClick={() => addInfo('experience')}>Add Experience</SingleBtn>
          <SingleBtn variation='preview'>Preview</SingleBtn>
          <SingleBtn variation='reset'>Reset</SingleBtn>
        </div>
      </div>
    </>
  )
}

export default App
