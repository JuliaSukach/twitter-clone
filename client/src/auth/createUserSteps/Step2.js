import React  from "react"
import '../../css/home/Home.css'
import "../../css/auth/CreateUserModal.css"
import UserNameInput from "../UserNameInput"
import EmailInput from "../EmailInput"
import BirthdayInput from "../BirthdayInput"

const Step2 = ({ handleBlur, handleFocus, handleChange, userData, activeInputs, isValid, setIsValid, handleNext }) => {
    return (
        <>
            <div className="editInput container" onClick={handleNext}>
                <UserNameInput
                    field='username'
                    currValue={userData.username}
                    isActive={activeInputs.username}
                    handleChange={handleChange}
                    onFocus={() => handleFocus('username')}
                    onBlur={handleBlur}>
                </UserNameInput>
            </div>
            <div className="editInput container" onClick={handleNext}>
                <EmailInput
                    field='email'
                    currValue={userData.email}
                    isActive={activeInputs.email}
                    isValid={isValid}
                    setIsValid={setIsValid}
                    handleChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}>
                </EmailInput>
            </div>
            <div className="editInput container" onClick={handleNext}>
                <BirthdayInput
                    field='birthday'
                    currValue={`${userData.month} ${userData.day}, ${userData.year}`}
                    handleChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                ></BirthdayInput>
            </div>
        </>
    )
}

export default Step2