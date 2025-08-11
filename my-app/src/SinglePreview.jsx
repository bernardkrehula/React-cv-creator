import SingleBtn from "./SingleBtn";
import './SinglePreview.css'

const SinglePreview = ({formInfo}) => {
    return(
        <>
            <div className="main-preview">
                <SingleBtn>Print</SingleBtn>
                <SingleBtn></SingleBtn>
                <div className="main-info">
                    <div>

                    </div>
                    <div lclassName='presonal-details'>
                        <h1>Personal Details</h1>
                        <h2>Adress</h2>
                        <h2>Phone Number</h2>
                        <h2>Email</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePreview;