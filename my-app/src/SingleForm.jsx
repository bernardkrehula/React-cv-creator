
const SingleForm = ({name, formInfo, index, initialized}) => {

    const information = name + index.current;
    
    const handleOnChange = (e) => {        
        console.log(formInfo[name && information])
    }
      
    return(
        <form>
            {initialized.current ? formInfo[name].map((info, index) => {
                const { id, placeHolder, value} = info;
                
                return(
                    <input key={index} placeholder={placeHolder} onChange={handleOnChange}></input>
                )
            })
            :
            ''
            }
        </form>
    )
}

export default SingleForm;