import { use } from "react";
import SingleBtn from "./SingleBtn";
import './SinglePreview.css'
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';

const SinglePreview = ({formInfo, handlePreview}) => {
    const formKeys = useRef([]);
    const infoNames = formKeys.current;
    const contentRef = useRef();
    const personalDetailsNames = ['adress', 'phoneNumber', 'email'];
    
    const iterateFormNames = Object.keys(formInfo).reduce((acc, key) => {
        acc.push(key)
        formKeys.current = acc;
        return acc;
    }, [])
    
    
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
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgCCAIIAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASlpKWgApKWkoAWiikoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikLBRkkAepqnLqdvFkBi59FoE2luXaKxZdXlbiNFQep5NVJLu4l+/Kx9gcVXKyXUR0TSxx/fdV+pxULX9qvWZfw5rnaKfKT7Rm+dUtB/y0J/4CaBqlof+WhH/AAE1gUUcqF7RnRrfWrdJl/HipldXGVYMPY5rlqAxU5UkH1FLlH7Q6uiuei1G5i/j3j0bmtCDVopMCUGM+vUUrMpTTNGikVgwBUgg9CKWkWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFRTTx26F5GwP51j3OpyzErHmNPbqaaVyXJI1pryCDh5Bn0HJrOn1hjxCmB/eb/CszrRVKJm5tkks8sxzI7N9ajoopmYUUUUAFFFFABRRRQAUUUUAFFFFAE0F1LbNmNuO6noa3bW7juo9y8MOq+lc5T4pXhkDocMKTVy4ysdRRWbHrERA8xGU98cirCahav0mA/wB7ipszZSTLVFNV0cZRgw9Qc06kMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKgurpLWLe3JP3V9akkdYo2djhVGTXOXNw1zMXbgdh6CmlciUrCTzyXEheQ5PYdhUdFFWYhRRRQIKKKKACiiigAooooASlopKAFooooAKKKKACiiigApKWkoAntrl7aUOh47r610MUqzRLIhypFcxWjpNxslMDHhuV+tKSNISs7G1RRRUGwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAtFFFABRRSMwVSx6AZNAGTq9xysCn3b+lZdPmkM0zyHqxzTK0Ssc8nd3CikpaCQopKKYC0UUlIBaKKKACikpaACikpaACiiigAooooAKKKKACikpaAClRzG6uvVTkUlJQM6pGDxq46MMinVT0yTzLJM9VytXKzOhO6CiiigYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVU1KTy7J/VvlFW6y9ZfEcSepJ/wA/nTW5MnZGPS0UVZzhRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAFFFFABRRRQAUUUUAFFFFABRRRQBraM/yyp6EGtWsXRj/AKRIP9n+tbVRLc3h8IUUUUiwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArF1k/v419Fz+tbVYer/8fi/7g/macdyJ7FCiiirMAooooAKKKKACiiigAooooAKKKKACkpaKACiiigAooooAKKKKACkpaKACiiigDQ0f/j5f/c/rW3WNow/fyH/Z/rWzUS3N4bBRRRSLCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACsPWP+Pxf9wfzNblYusj/SIz6rj9acdyJ7GdRRRVmAUUUUAFFFFABRRRQAUUUUAFFFFABRRSUALRRRQAUUUUAFFJS0AFFFJQAtFFFAGroo/1zfQVrVm6OMWzn1f+laVQ9zoh8IUUUUigooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArJ1peIW+o/lWtWfq6brQN/dYU1uTPYxKKKKs5wooooAKKKKACiiigAooooAKKKKACiikoAWiiigAooooAKKKKACiiigAooooA3dKGLIH1Ymr1VNOGLCL8T+tW6h7nTHYKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqvfJ5llKPbP5c1YpGAZSD0IxQDOVooIwSKK0OUKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkpaKAOisf+PGH/AHas1V09t1jF7DH61arNnStgooooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFRXEoht3kPYVLWPq9wS6wKeBy31ppXJk7IzKKKKs5wooooAKKKKACiiigAooooAKKKKACkpaKACiiigAooooASloooAKKKKACiiigDU0i4A3QMevK/1rXrlkdo5FdTgqciumikEsSOOjDNTJG1N3Vh9FFFSaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACVz2oDF/L9R/KuirA1QYvm9wD+lVHczqbFKlooqjEKKKKACiiigAooooAKKKKACiiigApKWigAooooAKKKKACiiigAooooGFFFFAgrc0p91kB/dYj+tYdbGjf6mT/e/pSlsXT3NOiiioNwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArD1cYvFPqg/ma3KyNZX54m9QRTjuRPYy6KKKswCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK2dGH7iQ+rf0rGrd0pdtkD/eYn/P5UpbF09y9RRRUG4UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVnaumbZW/utWjUF5F51pInfGR9aa3FJXRzdFJS1ZzBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdJZp5dpEvfbmufgjM06Rjua6bGBUyNaa6i0UUVJqFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHOX0Bt7plx8p5X6VXroru0W6i2nhh91vSsSWzuISd0bY9RyKtMwlGzIKKDRTICiiigAooooAKKKKACiiigApKWigAooooAKKKKAEpaKKACkpaKACigAk4AJJrQttKkkIab5F9O5ouNJsk0i3yzTsOBwta9NRFjQIowo4Ap1Q3c6IqysFFFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGXrCDyY3AGd2KyK3NWXNln0YGsOrjsYVNwooopkBRRRQAUUUUAFFFFABSUtFABRRRQAUUUUAFFFFABRRUlunm3MaHoWGaBmzp1msMSyMMyMM5PYVeoorM6ErKwUUUUDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASloooAqaiu6wl9sH9a5+uku13Wkw/2DXN1cTGpuFFFFMzCiiigAooooAKKKKACiiigAoopKAFooooAKKSloAKtacM38f4n9KqVd0sZvl9gTQ9io7o36KKKzOgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAGyDdG6+oIrlq6uuYuIjBO8Z7Hj6VUTKoR0UUVZkFFFFIAooooAKKKKACiiigAooooAKKKKAEopaKACtLR0zPI/YLj86zQCTgck10Njb/AGa3CkfOeWpS2LgrstUUUVBuFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFJS0AFU76yF1HkcSL0Pr7VcpKBNXOWZSjFWGCOCKStXV7cYWdRz0b+lZVaJ3MJKzsFFFFBIUUUUAFFFFABRRRQAUUlLQAUUUUAFFJU1tF51zHH2J5+lAzR0yywBcSDk/cH9a1aQAAADoKWobudCVkFFFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVrm9htSA+Sx5AAqwSACScAVzd1Obi4eTsTx9KaVyJysi1damJ4WiWLCnuTWfSUtWkYtt7hRRRQIKKKKACiiigAooooAKKKKACiiigAqa1n+zTiXbux2zioKWgexsprMJ+9G4+mDVu3vIbkkRk5HUEVzdTWk/2e5V/4ejfSk4lqbvqdLRSA5GRS1BsFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFNdgilmOABkmgCjqtx5Vv5an5pOPwrEqa6nNzcNIenQD0FQ1olY55O7CiiigkKKKKACiiigAooooAKKKKACiikoAWiiigAooooAKKKKANzS7jzrfYx+aPj8O1X65q0uDbXCv/D0Ye1dIpDKCDkEZBqGjeDuhaKKKRYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSUALRUck0UQy8ir9TVSTVrdPubnPsMCnYTaW5erI1S8DE28Z4H3yP5VHNqs0qlUURg9xyaoU0jOU76IKKKKoyEpaKKACiiigAooooAKKKKACiiigBKWiigAooooASilooAKSlooAK1dLvAMW8h/wBwn+VZVHvQ1cpOzOrorDh1aaMBXUSAd+hq7Hq1u/39yH3GRUWZsppl+io45o5RlJFb6GpKRQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVHLPHCMyOF+tAElIWCgliAB3NZU+sdRAn/Am/wAKzpbiWc5kct7dqpRIdRLY2J9VgiyEzI3t0/Os2fUbibjdsX0XiqtFNJGbm2BJJySSaKKKogKKKKQBRRRQAUUUUwCiiikAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAAkHIODVuDUbiHALb19GqpRQNNrY3YNUglwH/AHbe/T86ughgCCCPUVytSQ3E0BzG5Ht2qXE0VTudPRWVBrAOBOmP9pf8K0Ypo5lzG4Ye1JqxopJ7ElFFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFIzBQSxAA7mqM+qwx5EeZG9ulFhNpbl+q099Bb8M+W/uryaxp7+efIL7V/urxVWqUTN1OxoT6rNJkRARr69TVFmZ23MxJPcmkpKqxm23uLRRRQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooAKKKKAEpaSigAopaSgBaSlpKAFooooASloooASloooAKVXZG3IxU+oNJSUAaMGrSx4EoEg9ehrSgvoLjAVwG/utwa5ylpNItTaOrornoNQng4Dbl9G5rSg1WGXAf923v0/OpaZoppl+ikVgwyCCPUUtIsKKKKACiiigAooooAKKKKACiiigAoopkkqRLukYKPc0APorNm1eJciJS59TwKoTahczZG/aPReKfKyHNI25bmGAfvJAD6d6z59Y6iBP+BN/hWUSScmiq5SHUbJJbiWc5kct7dqjopKZAtFFJQIWikpaACikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAkhuJoDmNyvt2rRg1gcCdP+BL/hWVRRYpSaOmiuYZx+7kVvbvUtcoCQcg4NWodRuYeN+8ejc1PKaKp3OhorNh1eJ+JVKH1HIq/HIkq7kYMPUGlYtNPYfRRRSGFFFFABTXdY0LOwVR1Jps0yQRGRzgCufuruS6fLHCDovpTSuTKVi7c6sTlbcYH941mu7yMWdix9SabRVpWMXJvcKKKKCQooopgJS0UUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEpaKKACiiigBKKWigApKWigAooooAKKKKACkpaKACiiigApKWigBKWiigBKWiigAooooAKKKKAEp8cjxNuRyp9QabRQM1LbVjkLcD/gYrVR1kUMhBU9CK5arFpeSWr8coeq0nEuM+50dFMilSaMOhypoqDYxNTuTNOY1PyJx9TVKjrRWhzN3dwooooEFFFFABRRRQAlFLRQAUlLRQAUlLRQAlLRRQAlLRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJS0UUAFJS0UAFJS0UAFFFFACUtFFABRRRQAUlLRQAUUUUAJS0UUAJS0UUAFJS0UAFFFFABRRRQBf0u5MU/lMfkfp7GiqAJBBHUUUmrmkZ2VgooopmYUUUUAFFFFABRRRTAKKSlpAFFFJQAtFFJQAtFFFABRRRQAUUUUwCiiikAUUUUAFFJS0wCiiikAUUUUAFFFFABRRRQAUlFLQAUUUUAFFJRQAtFFJQAtFFJQAtFFFACUtFJQAUtFFABRRSUALRSUtABRSUtABRSUtABSUtFABSUUtABRRRQAUUlFAC0UlLQAUUUUAFFFFABRRRQAUUlFAC0lLSUALRRSUALRSUtABRSUtABRRRQAlLRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUlAC0UUUAFFJS0AFFJRQAtFFJQAtFFFABRSUtABRSUtABRRSUALRRSUALRSUtABRSUtABRRSUALRRSUALRRRQAUUlFAC0UUUAFFFFABRRRQAUUUUwEpaKKQBSUtFABSUtFABRRRQAUUUUAFFFFMAooopAFFFFABRRRTAKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAJRS0UAFJS0UAFJS0UAFFFFABRRRQAUUUUAFJS0UAJS0UUAJS0UUAJS0UUAFFFFABRRRQAUUUUAJRS0UAJS0UUAFFFFABRRRTAKKKKQBSUUUALSUUUwCloopAJS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAwooooEFFFFABRRRQMKKKKACiiigQUUUUAFFFFAwooooEFFFFABRRRQAUUUUAFFFFABRRRQMKKKKBBRRRQB//2Q==" alt="" />
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