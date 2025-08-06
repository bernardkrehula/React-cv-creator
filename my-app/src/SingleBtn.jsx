import './SingleBtn.css'

const SingleBtn = ({onClick, variation, type, children}) => {

    return(
        <button className={`btn ${variation}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default SingleBtn;