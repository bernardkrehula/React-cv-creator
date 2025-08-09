import { useEffect, useRef, useState } from 'react'
import './App.css'
import SingleBtn from './SingleBtn'
import SingleForm from './SingleForm';
import { formData } from './FormData';

function App() {
  const [ formInfo, setFormInfo ] = useState({});
  const [ inputValue, resetInputValue ] = useState('');
  const initialized = useRef(false);

  useEffect(() => {
  if(!initialized.current) {
      setFormInfo(formData);
      initialized.current = true;
  }
  },[]);
  
  const addInfo = (name) => {
    setFormInfo((prev) => ({
    ...prev,
    [name]: [
      ...prev[name],
      Object.fromEntries(
        Object.entries(formData[name][0]).map(([key, value]) => [
          key,
          { ...value, value: '' } 
        ])
      )
    ]
  }));
  }

  const updateFormInfo = (formObjectName, fieldName, newValue, index) => {
    if(Array.isArray(formInfo[formObjectName])){
      setFormInfo(prev => ({
          ...prev, [formObjectName]: prev[formObjectName].map((info, i) => {
            if(i === Number(index)) {
              return {
                ...info, [fieldName]: {
                ...info[fieldName],
                value: newValue
              }
              }
            }
            else{
              return info;
            } 
          })
        })) 
      }
      else{
        setFormInfo(prev => ({
                ...prev, [formObjectName]: {
                  ...prev[formObjectName],
                    [fieldName]: {
                      ...prev[formObjectName][fieldName],
                      value: newValue
                    }
                  }
                }
              )) 
      }
    }

  const deleteFormInfoField = (name, index) => {
    setFormInfo(prev => ({
      ...prev,
      [name]: prev[name].filter((formObject, i) => i !== index)
    })) 
   console.log(formInfo[name], index)
  }
  const handlePreview = () => {
    Object.values(formInfo).forEach(info => {
      if(Array.isArray(info)){
        info.map(infoValues => {
          Object.values(infoValues).map(info => {
            const { placeHolder, value } = info;
            console.log(`${placeHolder}: ${value}`)
          })
        })
      }
      else{
        Object.values(info).map(infoValue => {
          const { placeHolder, value } = infoValue;
          console.log(`${placeHolder}: ${value}`);
        })
        }
      }
    )
  
  }
  const resetDefaultInputValue = () => {
    resetInputValue()
  }
 /*  setTimeout(() => {
     console.log(formInfo)  
  },1000) */

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
            .map((key, index) => (
            <div key={key}>
              <SingleForm key={key} name={key} formInfo={formInfo} initialized={initialized} updateFormInfo={updateFormInfo}/>
              <SingleBtn variation='delete' onClick={() => deleteFormInfoField(key, index)}>Delete</SingleBtn>
            </div>
            ))}
          <SingleBtn variation='add' type='submit' onClick={() => addInfo('education')}>Add Education</SingleBtn>
          <h2>Experience</h2>
          {Object.keys(formInfo)
            .filter((key) => key.startsWith('experience'))
            .map((key, index) => (
            <div key={key}>
              <SingleForm key={key} name={key} formInfo={formInfo} initialized={initialized} updateFormInfo={updateFormInfo}/>
              <SingleBtn variation='delete' onClick={() => deleteFormInfoField(key, index)} type='submit'>Delete</SingleBtn>
            </div>
            ))}
          <SingleBtn variation='add' onClick={() => addInfo('experience')}>Add Experience</SingleBtn>
          <SingleBtn variation='preview' onClick={() => {handlePreview()}
          }>Preview</SingleBtn>
          <SingleBtn variation='reset'>Reset</SingleBtn>
        </div>
      </div>
    </>
  )
}

export default App
