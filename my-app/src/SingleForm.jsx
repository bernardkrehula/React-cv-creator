import React, { useState } from "react";

const SingleForm = ({name, formInfo, initialized, updateFormInfo, handleSubmit}) => {
    const [ inputValue, setInputValue ] = useState({});

    const handleOnChange = (e) => { 
        const {name: fieldName, value} = e.target; 
        const index = e.target.dataset.index
      /*   console.log('radi', name, index) */
        updateFormInfo(name, fieldName, value, index)   
        
    }
/*     handleSubmit(inputValue);
 */
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
                            <input key={id || key} data-index={groupIndex} name={nameInfo} placeholder={placeHolder} value={value} onChange={handleOnChange}/>
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