import React, { } from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import Input from "./Input"

const PasswordForm = ({ isActive, onFocus, onBlur, field,  password, handleChange}) => {
    const handleInputChange = (event) => {
        let value = event.target.value
        handleChange(field, value)
    }
    return (
        <Input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(event) => handleInputChange(event)}
            onClick={() => handleChange('showPassword', !password.showPassword)}
            isActive={isActive}
            isValid={!password.isValid}
            isFilled={password.value.length}
            type={password.showPassword ? "text" : "password"}
            text={'Password'}
            value={password.value}
            role={'password'}
            hint={"Your password needs to be at least 8 characters. Please enter a longer one."}
        />
    )
}

export default PasswordForm