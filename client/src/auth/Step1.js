import React  from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import UserNameInput from "./UserNameInput"
import EmailInput from "./EmailInput"
import BirthdayForm from "./BirthdayForm"

const Step1 = ({ handleBlur, handleFocus, handleChange, userData, activeInputs, isValid, setIsValid }) => {
    return (
        <>
            <UserNameInput
                field='username'
                currValue={userData.username}
                isActive={activeInputs.username}
                handleChange={handleChange}
                onFocus={() => handleFocus('username')}
                onBlur={handleBlur}>
            </UserNameInput>
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
            <BirthdayForm
                isMonthActive={activeInputs.month}
                isDayActive={activeInputs.day}
                isYearActive={activeInputs.year}
                month={userData.month}
                day={userData.day}
                year={userData.year}
                handleChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            ></BirthdayForm>
        </>
    )
}

export default Step1