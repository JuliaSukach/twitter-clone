import React  from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import PasswordForm from "./PasswordForm"

const Step4 = ({ activeInputs, handleFocus, onBlur, password, handleChange }) => {
    return (
        <PasswordForm
            isActive={activeInputs.password}
            onFocus={() => handleFocus('password')}
            onBlur={onBlur}
            field='value'
            password={password}
            handleChange={handleChange}
        />
    )
}

export default Step4