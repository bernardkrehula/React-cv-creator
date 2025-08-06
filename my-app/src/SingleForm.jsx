
const SingleForm = ({name, formInfo, initialized}) => {


        const handleOnChange = (e) => {        
        console.log(name)
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