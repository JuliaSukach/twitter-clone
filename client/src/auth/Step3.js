import React  from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import VerificationForm from "./VerificationForm"

const Step3 = ({ activeInputs, verification, handleChange, handleFocus, onBlur }) => {
    return (
        <VerificationForm
            isActive={activeInputs.verification}
            code={verification.userCode}
            handleChange={handleChange}
            onFocus={() => handleFocus('verification')}
            onBlur={onBlur}
            field='userCode'
        />
    )
}

export default Step3