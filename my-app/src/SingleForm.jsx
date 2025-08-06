
const SingleForm = ({name, formInfo, initialized}) => {


    const handleOnChange = (e) => { 
        const {name, value} = e.target;       
        console.log(name)
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