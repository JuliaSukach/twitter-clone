import React, { useState } from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EmailInput = ({ isActive, onFocus, onBlur, handleChange, field, currValue }) => {
    const [isValid, setIsValid] = useState(true)

    const handleInputChange = (event) => {
        let value = event.target.value
        handleChange(field, value)
        setIsValid(value.length && value.length <= 50 ? EMAIL_REGEX.test(event.target.value) : true)
    }
    return (
        <div className="loginBox container">
            <label className={`container ${isActive ? 'activeLabel' : ''} ${!isValid ? 'invalidInput' : ''} ${currValue.length ? 'filled' : ''}`} onFocus={onFocus} onBlur={onBlur}>
                <div className="inputWrap container">
                    <div className="userInput container">
                        <div className={`textWrap containerBlock ${isActive ? 'focused' : ''}`}>
                            <span className="containerBlock">Email</span>
                        </div>
                    </div>
                    <div className="inputBox container">
                        <div className="wrap containerBlock">
                        <input type="email" value={currValue} onChange={(event) => handleInputChange(event)}/>
                        </div>
                    </div>
                </div>
            </label>
            <div className="assertive container">
                <div className="box container">
                    <div className={`container ${!isValid ? '' : 'hidden'}`}>
                        <div className="assertiveContent containerBlock">
                            <span className="containerBlock">Please enter a valid email.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailInput