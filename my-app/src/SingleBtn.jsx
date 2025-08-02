import './SingleBtn.css'

const SingleBtn = ({onClick, variation,children}) => {

    return(
        <button className={`btn ${variation}`} onClick={onClick}>{children}</button>
    )
}

export default SingleBtn;