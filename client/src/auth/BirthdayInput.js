import React, { useState } from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";
import Input from "./Input"

const BirthdayInput = ({ onFocus, onBlur, handleChange, field, currValue }) => {

    const handleInputChange = (event) => {
        let value = event.target.value
        handleChange(field, value)
    }
    return (
        <Input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(event) => handleInputChange(event)}
            isFilled={currValue.length}
            text={'Date of birth'}
            value={currValue}
            role={'birthday'}
        />
    )
}

export default BirthdayInput