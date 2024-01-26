import React, { useState, useRef } from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";
import Tooltip from "../utils/tooltip/Tooltip";
import UserNameInput from "./UserNameInput";
import EmailInput from "./EmailInput";
import BirthdayInput from "./BirthdayInput";
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

            let allDataFilled = Object.values(updatedData).every((val) => val !== '')
            allDataFilled = !isValid ? false : allDataFilled
            setIsDataComplete(allDataFilled)
            return updatedData
        })
    }

    const [step, setStep] = useState(1)
    const [isValid, setIsValid] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault()
        signUpUser(userData)
    }

    const handleNext = (value) => {
        setStep(value)
    }

    const usernameComponent = <UserNameInput
            field='username'
            currValue={userData.username}
            isActive={activeInputs.username}
            handleChange={handleChange}
            onFocus={() => handleFocus('username')}
            onBlur={handleBlur}>
        </UserNameInput>

    const emailComponent = <EmailInput
            field='email'
            currValue={userData.email}
            isActive={activeInputs.email}
            isValid={isValid}
            setIsValid={setIsValid}
            handleChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}>
        </EmailInput>

    const birthdaySelectComponent = <BirthdayForm
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

    const birthdayComponent = <BirthdayInput
            field='birthday'
            currValue={`${userData.month} ${userData.day}, ${userData.year}`}
            handleChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        ></BirthdayInput>

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
                                            { step === 1
                                                ? usernameComponent
                                                : <div className="editInput container" onClick={() => handleNext(step - 1)}>{usernameComponent}</div>
                                            }
                                            { step === 1
                                                ? emailComponent
                                                : <div className="editInput container" onClick={() => handleNext(step - 1)}>{emailComponent}</div>
                                            }
                                            { step === 1
                                                ? birthdaySelectComponent
                                                : <div className="editInput container" onClick={() => handleNext(step - 1)}>{birthdayComponent}</div>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="nextContainer container">
                                    <div className="container">
                                        <div className={`agreement containerBlock ${step === 1 ? 'hidden' : ''}`}>
                                            <span className="containerBlock">By signing up, you agree to our </span>
                                            <a className="containerBlock" href="https://twitter.com/en/tos#new">Terms</a>
                                            <span className="containerBlock">, </span>
                                            <a className="containerBlock" href="https://twitter.com/en/privacy">Privacy Policy</a>
                                            <span className="containerBlock">, and </span>
                                            <a className="containerBlock" href="https://help.twitter.com/en/rules-and-policies/x-cookies">Cookie Use</a>
                                            <span className="containerBlock">. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. </span>
                                            <a className="containerBlock" href="https://twitter.com/en/privacy">Learn more</a>
                                        </div>
                                        <div className="nextWrap container">
                                            <div className={`nextBox container ${isDataComplete ? 'active' : ''} ${step > 1 ? 'complited' : ''}`} onClick={() => handleNext(step + 1)}>
                                                <div className="nextContent containerBlock">
                                                    <span className="containerBlock">{step === 1 ? 'Next' : 'Sign up'}</span>
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