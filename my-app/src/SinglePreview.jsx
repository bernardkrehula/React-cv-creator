import SingleBtn from "./SingleBtn";
import './SinglePreview.css'
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

const SinglePreview = ({formInfo, photo, handlePreview}) => {
    const formKeys = useRef([]);
    const infoNames = formKeys.current;
    const contentRef = useRef();
    const personalDetailsNames = ['adress', 'phoneNumber', 'email'];
    
    const iterateFormNames = Object.keys(formInfo).reduce((acc, key) => {
        acc.push(key)
        formKeys.current = acc;
        return acc;
    }, [])
    
      setTimeout(() => {
            if(photo) console.log(photo)
        },1000)
    const reactToPrintFn = useReactToPrint({ contentRef });

    return(
        <>  
            <div className="main-preview">
                <div className="printBtns">
                    <SingleBtn variation='printBtn' onClick={reactToPrintFn}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="icon icon-tabler icons-tabler-outline icon-tabler-printer"><path stroke="none" d="M0 0h24v24H0z" /><path d="M17 17h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4" /><path d="M7 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" /></svg>Print</SingleBtn>
                    <SingleBtn variation='exitBtn' onClick={handlePreview}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" /><path d="m9 14-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>Back</SingleBtn>
                </div>
                <div className="main-info" ref={contentRef}>
                    <div className="green-space"/>
                    <div className="info-space">
                        <ul className="job-info">
                        {infoNames.map(info => {
                            if(Array.isArray(formInfo[info])){
                                return formInfo[info].map((innerInfo, index) =>  {
                                    return(
                                        <li key={index}>
                                            <h3>{info.toUpperCase()}</h3>
                                            {
                                                Object.values(innerInfo).map((content, index) => {
                                                const { name, placeHolder, value } = content;
                                                    return(
                                                        <div key={index} name={name}>
                                                            <h4>{placeHolder}:</h4>
                                                            <h5>{value}</h5>
                                                        </div>
                                                    )
                                            })   
                                            }
                                        </li>
                                    ) 
                                })
                            }
                            else{
                                return(
                                    <li key={info}>
                                    <h3>{info.toUpperCase()}</h3>
                                        {
                                            Object.values(formInfo[info]).map((innerInfo, index) => {
                                            const {name, placeHolder, value} = innerInfo;
                                            return(
                                                <div key={index} name={name}>
                                                    <h4>{placeHolder}:</h4>
                                                    <h5>{value}</h5>
                                                </div>  
                                            )
                                            })
                                        }
                                    </li>
                                )
                            }
                        })}
                        </ul>
                        <div className='presonal-details'>
                            <img src={photo} alt="" />
                            <div className="presonal-details-content">
                                <h1>Personal Details</h1>
                                <hr />
                                {Object.values(formInfo['personal']).map(innerInfo => {
                                    const {name, placeHolder, value} = innerInfo;
                                    return personalDetailsNames.map((details, index) => {
                                        if(name === details){
                                            return(
                                            <h2 key={index}>{placeHolder}: {value}</h2>
                                            )
                                        } 
                                    })
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePreview;