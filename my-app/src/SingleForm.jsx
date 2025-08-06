
const SingleForm = ({name, formInfo, initialized}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('radi')
    }
      
    return(
        <form onSubmit={handleSubmit}>
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