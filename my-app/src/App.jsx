import { useEffect, useRef, useState } from 'react'
import './App.css'
import SingleBtn from './SingleBtn'
import SingleForm from './SingleForm';
import { formData } from './FormData';
import SinglePreview from './SinglePreview';

function App() {
  const [ formInfo, setFormInfo ] = useState({});
  const [ inputValue, resetInputValue ] = useState('');
  const [ preview, setPreview ] = useState(false);
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
    setPreview(prev => !prev);
  }
  const handleBackPreview = () => {

  }
  setTimeout(() => {
     console.log(formInfo)  
  },1000) 

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
          {Array.isArray(formInfo.education) && formInfo.education.map((_, index) => (
            <div key={index} className="education-item">
              <SingleForm
                name="education"
                formInfo={formInfo}
                initialized={initialized}
                updateFormInfo={updateFormInfo}
                index={index}  
              />
              <SingleBtn variation="delete" onClick={() => deleteFormInfoField('education', index)}>
                Delete
              </SingleBtn>
            </div>
          ))}
          <SingleBtn variation='add' type='submit' onClick={() => addInfo('education')}>Add Education</SingleBtn>
          <h2>Experience</h2>
          {Array.isArray(formInfo.experience) && formInfo.experience.map((_, index) => (
            <div key={index} className="experience-item">
              <SingleForm
                name="experience"
                formInfo={formInfo}
                initialized={initialized}
                updateFormInfo={updateFormInfo}
                index={index}
              />
              <SingleBtn variation="delete" onClick={() => deleteFormInfoField('experience', index)}>
                Delete
              </SingleBtn>
            </div>
          ))}
          <SingleBtn variation='add' onClick={() => addInfo('experience')}>Add Experience</SingleBtn>
          <SingleBtn variation='preview' onClick={() => {handlePreview()}
          }>Preview</SingleBtn>
          <SingleBtn variation='reset'>Reset</SingleBtn>
        </div>
        {preview ? <SinglePreview formInfo={formInfo}/> : ''}
      </div>
    </>
  )
}

export default App
