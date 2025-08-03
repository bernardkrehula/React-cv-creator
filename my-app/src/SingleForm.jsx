import { useRef, useState, useEffect } from 'react';
import { formData } from './FormData';

const SingleForm = ({name}) => {
    const [ formInfo, setFormInfo ] = useState({});
    const initialized = useRef(false);
    
    
    const setInfo = () => {
        console.log(formInfo)
        
    }
    setTimeout(() => {
        setInfo()
        
    },1000)

    useEffect(() => {
    if(!initialized.current) {
        setFormInfo(formData);
        initialized.current = true;
    }
    },[]);

   
    return(
        <form>
            {initialized.current ? formInfo[name].map((info, index) => {
                const { id, placeHolder, value} = info;
                
                return(
                    <input key={index} placeholder={placeHolder}></input>
                )
            })
            :
            ''
            }
        </form>
    )
}

export default SingleForm;