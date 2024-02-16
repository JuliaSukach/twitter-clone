import React, { useState, useRef, useEffect } from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import Input from "./Input"

const UserNameInput = ({ isActive, onFocus, onBlur, handleChange, field, currValue }) => {
    const [emptyInput, setEmptyInput] = useState(false)
    const handleInputChange = (event) => {
        let value = event.target.value
        if (value.length <= 50) {
            setEmptyInput(currValue.length > 0 && value.length === 0 ? true : false)
            handleChange(field, value)
        }
    }
    return (
        <Input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(event) => handleInputChange(event)}
            isActive={isActive}
            isEmpty={emptyInput}
            isFilled={currValue.length}
            text={'Name'}
            value={currValue}
            role={'name'}
            hint={'What’s your name?'}
        />
    )
}

export default UserNameInput