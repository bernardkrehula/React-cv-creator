import { useEffect, useRef, useState } from 'react'
import './App.css'
import SingleBtn from './SingleBtn'
import SingleForm from './SingleForm';
import { formData } from './FormData';

function App() {
  const [ formInfo, setFormInfo ] = useState({});
  const initialized = useRef(false);
  const indexEducation = useRef(0);
  const indexExperience = useRef(0);

  useEffect(() => {
  if(!initialized.current) {
      setFormInfo(formData);
      initialized.current = true;
  }
  },[]);
  
  const addInfo = (name) => {
    if(name === 'education') {
      indexEducation.current += 1;
      const info = name + indexEducation.current;
      setFormInfo(prev => ({ ...prev, [info]: formData[name]}));
    } else if(name === 'experience') {
      indexExperience.current += 1;
      const info = name + indexExperience.current;
      setFormInfo(prev => ({ ...prev, [info]: formData[name]}));
    }
  }

  const updateFormInfo = (formKey, fieldName, value) => {
/*    setFormInfo(prev => ({...prev, [formKey]: prev[formKey].map(info => info.name === fieldName ? {...info, value} : info)})); 
 */  };
  const deleteFormInfoField = (name) => {
    setFormInfo(prev => {
      const updated = {...prev};

      delete updated[name];

      return updated;
    })
  }
  const handlePreview = () => {
    /* Object.entries(formInfo).forEach(([formProperites, values]) => {
    console.log(`${formProperites.toUpperCase()}`);
    values.forEach(value => {
      console.log(`${value.name}: ${value.value}`);
    });
  }); */
  }
  setTimeout(() => {
    console.log(formInfo) 
  },1000)
  const handleSubmit = () => {
    console.log('radi')
  }
  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>CV CREATOR</h1>
        </div>
        <div className='information'>
          <h2>Personal information</h2>
          <SingleForm name='personal' formInfo={formInfo} initialized={initialized} updateFormInfo={updateFormInfo}/>
          <h2>Education</h2>
          {Object.keys(formInfo)
            .filter((key) => key.startsWith('education'))
            .map((key) => (
            <div key={key}>
              <SingleForm key={key} name={key} formInfo={formInfo} initialized={initialized} updateFormInfo={updateFormInfo}/>
              <SingleBtn variation='delete' onClick={() => deleteFormInfoField(key)}>Delete</SingleBtn>
            </div>
            ))}
          <SingleBtn variation='add' type='submit' onClick={() => addInfo('education')}>Add Education</SingleBtn>
          <h2>Experience</h2>
          {Object.keys(formInfo)
            .filter((key) => key.startsWith('experience'))
            .map((key) => (
            <div key={key}>
              <SingleForm key={key} name={key} formInfo={formInfo} initialized={initialized} updateFormInfo={updateFormInfo}/>
              <SingleBtn variation='delete' onClick={() => deleteFormInfoField(key)} type='submit'>Delete</SingleBtn>
            </div>
            ))}
          <SingleBtn variation='add' onClick={() => addInfo('experience')}>Add Experience</SingleBtn>
          <SingleBtn variation='preview' onClick={() => {
            handlePreview()
            handleSubmit()
            }
          }>Preview</SingleBtn>
          <SingleBtn variation='reset'>Reset</SingleBtn>
        </div>
      </div>
    </>
  )
}

export default App
