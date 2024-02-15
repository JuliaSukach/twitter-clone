import React, { useState } from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import Input from "./Input"

const VerificationForm = ({ code, handleChange, isActive, onFocus, onBlur, field }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        let value = event.target.value
        setInputValue(value)
        handleChange(field, value)
    }
    return (
        <Input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(event) => handleInputChange(event)}
            isActive={isActive}
            isFilled={code.length}
            text={'Verification'}
            value={inputValue}
            role={'code'}
            hint={"Didn't receive email?"}
        />
    )
}

export default VerificationForm