import React from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";
import Input from "./Input"
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EmailInput = ({ isActive, onFocus, onBlur, handleChange, field, currValue, setIsValid, isValid }) => {
    const handleInputChange = (event) => {
        let value = event.target.value
        handleChange(field, value)
        setIsValid(value.length && value.length <= 50 ? EMAIL_REGEX.test(event.target.value) : true)
    }
    return (
        <Input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(event) => handleInputChange(event)}
            isActive={isActive}
            isValid={isValid}
            isFilled={currValue.length}
            text={'Email'}
            value={currValue}
            role={'email'}
            hint={'Please enter a valid email'}
            type={'email'}
        />
    )
}

export default EmailInput