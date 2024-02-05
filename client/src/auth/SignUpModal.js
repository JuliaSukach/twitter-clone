import React, { useState } from "react"
import "../css/auth/SignUpModal.css"
import "../css/auth/CreateUserModal.css"
import Tooltip from "../utils/tooltip/Tooltip"
import GoogleLogin from "./GoogleLogin"
import Divider from "./Divider"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SignUpModal = ({ setIsLoginUserOpen, logInUser }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let userData = {
            username,
            email,
        }
        logInUser(userData)
    }
    const [step, setStep] = useState(1)
    const [userData, setUserData] = useState({
        value: '',
        isActiveField: false
    })

    const handleData = (event) => {
        let value = event.target.value
        setUserData({
            ...userData,
            value
        })
    }

    return (
        <div className="group container">
            <div className="bgContainer container"></div>
            <div className="modal container">
                <div className="modalContent container">
                    <div className='alignContent container alignCenter'>
                        <div className='modalContent container'>
                            <div className='container'>
                                <div className="header container">
                                    <div className="container">
                                        <div className="headerWrap container">
                                            <div className="closeContainer container">
                                                <Tooltip text="Close">
                                                    <div className="closeWrap container" onClick={() => setIsLoginUserOpen(false)}>
                                                        <div className="close container">
                                                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                                                <g>
                                                                    <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                            <div className="titleContainer container">
                                                <div className="titleWrap container">
                                                    <svg viewBox="0 0 24 24" aria-label="X" role="img" className=''>
                                                        <g>
                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="space container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='accountInfo container'>
                                <div className="wrapper container">
                                    <div className="container">
                                        <div className="accountContent container">
                                            <div className="container">
                                                <div className="infoHeader container">
                                                    <h1 className="containerBlock"><span className="containerBlock">Sign in to X</span></h1>
                                                </div>
                                            </div>
                                            <GoogleLogin mode='modal'/>
                                            <Divider/>
                                            <div className="nameBox container">
                                                <label className={`container ${userData.isActiveField ? 'activeLabel' : ''} ${userData.value.length ? 'filled' : ''}`}
                                                    onFocus={() => setUserData({...userData, 'isActiveField': true })}
                                                    onBlur={() => setUserData({...userData, 'isActiveField': false })}
                                                >
                                                    <div className="inputWrap container">
                                                        <div className="userInput container">
                                                            <div className={`textWrap containerBlock ${userData.isActiveField ? 'focused' : ''}`}>
                                                                <span className="containerBlock">Email address or username</span>
                                                            </div>
                                                        </div>
                                                        <div className="inputBox container">
                                                            <div className="wrap containerBlock">
                                                                <input type="text" value={userData.value} onChange={(event) => handleData(event)}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="nextButton container formButton" href="/" onClick={() => setIsLoginUserOpen(true)}>
                                                <div className="buttonContent">
                                                    <span>Next</span>
                                                </div>
                                            </div>
                                            <div className="forgotPassButton container formButton" href="/" onClick={() => setIsLoginUserOpen(true)}>
                                                <div className="buttonContent">
                                                    <span>Forgot password?</span>
                                                </div>
                                            </div>
                                            <div className="signUpBox containerBox">
                                                <span className="containerBox">Don’t have an account? </span>
                                                <span className="signUpLink containerBox">Sign Up</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="nextContainer container">
                                    <div className="container">
                                        <div className={`agreement containerBlock ${step === 2 ? '' : 'hidden'}`}>
                                            <span className="containerBlock">By signing up, you agree to our </span>
                                            <a className="containerBlock" href="https://twitter.com/en/tos#new">Terms</a>
                                            <span className="containerBlock">, </span>
                                            <a className="containerBlock" href="https://twitter.com/en/privacy">Privacy Policy</a>
                                            <span className="containerBlock">, and </span>
                                            <a className="containerBlock" href="https://help.twitter.com/en/rules-and-policies/x-cookies">Cookie Use</a>
                                            <span className="containerBlock">. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. </span>
                                            <a className="containerBlock" href="https://twitter.com/en/privacy">Learn more</a>
                                        </div>
                                        <div className="nextWrap container">
                                            <div className={`nextBox container ${isDataComplete ? 'active' : ''} ${step === 2 ? 'complited' : ''}`} onClick={() => handleNext(step + 1)}>
                                                <div className="nextContent containerBlock">
                                                    <span className="containerBlock">{step === 2 ? 'Sign up' : 'Next'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal