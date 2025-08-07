
const SingleForm = ({name, formInfo, initialized, updateFormInfo}) => {

    const handleOnChange = (e) => { 
        const {name: fieldName, value} = e.target;       
        updateFormInfo(name, fieldName, value);  
    }
    
    if(initialized.current) console.log(Object.values(formInfo[name]))

    return(
        <form>
            {initialized.current ? Object.values(formInfo[name]).map((info, index) => {
                const { id, name, placeHolder, value} = info;
                console.log(info)
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