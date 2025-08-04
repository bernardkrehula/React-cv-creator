import { useRef, useState, useEffect } from 'react';
import { formData } from './FormData';

const SingleForm = ({name, formName}) => {
    const [ formInfo, setFormInfo ] = useState({});
    const initialized = useRef(false);

    useEffect(() => {
    if(!initialized.current) {
        setFormInfo(formData);
        initialized.current = true;
    }
    },[]);

    useEffect(() => {
        setFormInfo(prev => {
        const updated = { ...prev };
        delete updated[formName];
        return updated;
    });
    }, [formName])
      
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