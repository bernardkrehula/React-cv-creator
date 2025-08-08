import React, { useState } from "react";

const SingleForm = ({name, formInfo, initialized, updateFormInfo}) => {
    const [ inputValue, setInputValue ] = useState({});

    const handleOnChange = (e) => { 
        const {name: fieldName, value} = e.target;
        console.log('radi', e.target, fieldName, value)   
        updateFormInfo(name, fieldName, value);  
    }
    
    return(
        <form>
            {initialized.current ? (
                name === 'personal' ? (
                    Object.values(formInfo[name]).map((info, index) => {
                    const { name: nameInfo, placeHolder, value } = info;
                    return (
                        <input key={index} name={nameInfo} placeholder={placeHolder} value={value} onChange={handleOnChange}/>
                    );
                    })
                ) : (
                    formInfo[name].map((infoGroup, groupIndex) => {
                    return (
                        <React.Fragment key={groupIndex}>
                        {Object.entries(infoGroup).map(([key, info]) => {
                            const { id, name: nameInfo, placeHolder, value } = info;
                            return (
                            <input key={id || key} name={nameInfo} placeholder={placeHolder} value={value} onChange={handleOnChange}/>
                            );
                        })}
                       </React.Fragment>
                    );
                    })
                )
                ) : null}
        </form>
    )
}

export default SingleForm;