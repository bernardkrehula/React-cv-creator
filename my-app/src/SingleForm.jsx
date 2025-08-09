import React, { useState } from "react";

const SingleForm = ({name, formInfo, initialized, updateFormInfo}) => {

    const handleOnChange = (e) => { 
        const {name: fieldName, value} = e.target; 
        const index = e.target.dataset.index;
        updateFormInfo(name, fieldName, value, index);
    }

    return(
        <form>
            {initialized.current ? (
                name === 'personal' ? (
                    Object.values(formInfo[name]).map((info, index) => {
                    const { name: nameInfo, placeHolder } = info;
                    return (
                        <input key={index} name={nameInfo} placeholder={placeHolder} onChange={handleOnChange}/>
                    );
                    })
                ) : (
                    formInfo[name].map((infoGroup, groupIndex) => {
                    return (
                        <React.Fragment key={groupIndex}>
                        {Object.entries(infoGroup).map(([key, info]) => {
                            const { id, name: nameInfo, placeHolder } = info;

                            return (
                            <input key={id || key} data-index={groupIndex} name={nameInfo} placeholder={placeHolder} onChange={handleOnChange}/>
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