import './SingleForm.css'
import { useRef, useState, useEffect } from 'react';

const SingleForm = ({name}) => {
    const [ formInfo, setFormInfo ] = useState({});
    const initialized = useRef(false);
    
    const personal= [
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
    const setInfo = () => {
        console.log(formInfo['personal'])
    }
    setTimeout(() => {
        setInfo()
    },1000)

    useEffect(() => {
    if(!initialized.current) {
        setFormInfo({personal, education, experience});
        initialized.current = true;
    }
    },[]);

   
    return(
        <form>
           {/*  {formInfo.length != 0 ? formInfo[name].map((info, index) => {
                const { id, placeHolder, value} = info;
        
                return(
                    <input key={index} placeholder={placeHolder}></input>
                )
            })
            :
            ''
            } */}
        </form>
    )
}

export default SingleForm;