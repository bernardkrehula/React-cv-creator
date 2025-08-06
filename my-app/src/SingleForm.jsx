
const SingleForm = ({name, formInfo, initialized, updateFormInfo, deleteFormInfoField}) => {


    const handleOnChange = (e) => { 
        const {name: fieldName, value} = e.target;       
        updateFormInfo(name, fieldName, value);  
    }

    return(
        <form>
            {initialized.current ? formInfo[name].map((info, index) => {
                const { id, name, placeHolder, value} = info;
                
                return(
                    <input key={id} name={name} placeholder={placeHolder} onChange={handleOnChange}></input>
                )
            })
            :
            ''
            }
        </form>
    )
}

export default SingleForm;