import React from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import SignupLink from "./SignupLink"

const Button = ({ step, isDataComplete, handleNext, role }) => {
    return (
        <div className="nextContainer container">
            <div className="container">
                <div className={`agreement containerBlock ${step === 2 && role !== 'login' ? '' : 'hidden'}`}>
                    <span className="containerBlock">By signing up, you agree to our </span>
                    <a className="containerBlock" href="https://twitter.com/en/tos#new" role="link" target="_blank">Terms</a>
                    <span className="containerBlock">, </span>
                    <a className="containerBlock" href="https://twitter.com/en/privacy" role="link" target="_blank">Privacy Policy</a>
                    <span className="containerBlock">, and </span>
                    <a className="containerBlock" href="https://help.twitter.com/en/rules-and-policies/x-cookies" role="link" target="_blank">Cookie Use</a>
                    <span className="containerBlock">. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. </span>
                    <a className="containerBlock" href="https://twitter.com/en/privacy" role="link" target="_blank">Learn more</a>
                </div>
                <div className="nextWrap container">
                    <div className={`nextBox container ${isDataComplete ? 'active' : ''} ${step === 2 && role !== 'login' ? 'complited' : ''}`} onClick={() => handleNext(step + 1)}>
                        <div className="nextContent containerBlock">
                            <span className="containerBlock">{step === 2 ? (role === 'login' ? 'Log in' : 'Sign up') : 'Next'}</span>
                        </div>
                    </div>
                </div>
                { role === 'login' && (
                    <SignupLink
                        role={role}
                    />
                )}
            </div>
        </div>
    )
}

export default Button