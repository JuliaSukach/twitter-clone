import React, { useState } from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";
import Tooltip from "../utils/tooltip/Tooltip";
import UserNameInput from "./UserNameInput";
import EmailInput from "./EmailInput";
import BirthdayForm from "./BirthdayForm";

const CreateUserModal = ({ setIsCreateUserOpen, signUpUser }) => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        month: '',
        day: '',
        year: ''
    })
    const [isDataComplete, setIsDataComplete] = useState(false)
    const [activeInputs, setActiveInputs] = useState({
        username: false,
        email: false,
        month: false,
        day: false,
        year: false
    })

    const handleFocus = (field) => {
        setActiveInputs((prev) => ({ ...Object.fromEntries(Object.keys(prev).map((key) => [key, key === field])), [field]: true }))
    }

    const handleBlur = () => {
        setActiveInputs({
            username: false,
            email: false,
            month: false,
            day: false,
            year: false
        })
    }

    const handleChange = (field, value) => {
        setUserData(prevData => {
            const updatedData = {
                ...prevData,
                [field]: value
            }

            const allDataFilled = Object.values(updatedData).every((val) => val !== '')
            setIsDataComplete(allDataFilled)
            return updatedData
        })
    }

    const [step, setStep] = useState(1)
    const handleSubmit = (event) => {
        event.preventDefault()
        signUpUser(userData)
    }

    return (
        <div className="group container">
            <div className="bgContainer container"></div>
            <div className="modal container">
                <div className="modalContent container">
                    <div className='alignContent container'>
                        <div className='modalContent container'>
                            <div className='container'>
                                <div className="header container">
                                    <div className="container">
                                        <div className="headerWrap container">
                                            <div className="closeContainer container">
                                                <Tooltip text="Close">
                                                    <div className="closeWrap container" onClick={() => setIsCreateUserOpen(false)}>
                                                        <div className="close container">
                                                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                                                <g>
                                                                    <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                            <div className="titleContainer container">
                                                <div className="titleWrap container">
                                                    <h2><span>Step {step} of 5</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='accountInfo container'>
                                <div className="wrapper container">
                                    <div className="accountContent container">
                                        <div className="container">
                                            <div className="infoHeader container">
                                                <h1 className="containerBlock"><span className="containerBlock">Create your account</span></h1>
                                            </div>
                                        </div>
                                        <div className="container" onSubmit={event => handleSubmit(event)}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="nextContainer container">
                                    <div className="container">
                                        <div className="nextWrap container">
                                            <div className={`nextBox container ${isDataComplete ? 'active' : ''}`} onClick={() => setStep(step + 1)}>
                                                <div className="nextContent containerBlock">
                                                    <span className="containerBlock">Next</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal;