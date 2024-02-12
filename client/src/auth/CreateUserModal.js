import React, { useState, useEffect, useRef } from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"
import Tooltip from "../utils/tooltip/Tooltip"
import UserNameInput from "./UserNameInput"
import EmailInput from "./EmailInput"
import BirthdayInput from "./BirthdayInput"
import BirthdayForm from "./BirthdayForm"
import VerificationForm from "./VerificationForm"
import PasswordForm  from "./PasswordForm"
import Button from "./Button"
import Button1 from "../auth/Button1"

const TITLES = {
    3: 'We sent you a code',
    4: "You'll need a password",
    5: 'Pick a profile picture'
}


const CreateUserModal = ({ buttonClick, signUpUser }) => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        month: '',
        day: '',
        year: ''
    })
    const [isDataComplete, setIsDataComplete] = useState(false)
    const [activeInputs, setActiveInputs] = useState({
        username: true,
        email: false,
        month: false,
        day: false,
        year: false,
        verification: true,
        password: false
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

    const handleVerification = async () => {
        try {
            const response = await fetch('http://localhost:3002/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to: userData.email }),
            })

            if (response.ok) {
                const result = await response.json()
                if (result.code) {
                    handleVerificationCode('genCode', result.code)
                }
                console.log(result)// 'Email sent successfully'
            } else {
                console.error('Error sending email:', response.statusText)
            }
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }

    const [step, setStep] = useState(1)
    const [isValid, setIsValid] = useState(true)
    const [verification, setVerification] = useState({
        genCode: '',
        userCode: ''
    })

    const handleNext = (value) => {
        if (value === 3) {
            setIsDataComplete(false)
            handleVerification()
            setActiveInputs((prev) => ({ ...Object.fromEntries(Object.keys(prev).map((key) => [key, key === 'verification'])), 'verification': true }))
        } else if (value === 4) {
            if (verification.genCode !== verification.userCode) {
                value--
            }
        } else if (value === 5) {
            let data = {...userData, ...{ password: password.value }}
            signUpUser(data)
        } else if (value === 6) {

        }
        setStep(value)
    }

    const handleVerificationCode = (field, value) => {
        setVerification(prevData => {
            const updatedData = {
                ...prevData,
                [field]: value
            }
            let allDataFilled = updatedData.userCode !== ''
            setIsDataComplete(allDataFilled)
            return updatedData
        })
    }

    const handlePassword = (field, value) => {
        setPassword(prevData => {
            const updatedData = {
                ...prevData,
                [field]: value,
                isValid: value.length && value.length < 8 ? false : true
            }

            let allDataFilled = updatedData.isValid
            setIsDataComplete(allDataFilled)
            return updatedData
        })
    }

    const [password, setPassword] = useState({
        value: "",
        showPassword: false,
        isValid: true
    })

    const usernameComponent = <UserNameInput
            step={step}
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
                                                    <div className="closeWrap container" onClick={() => buttonClick(null)}>
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
                                                { step === 5
                                                    ?
                                                    <div className="titleWrap container">
                                                            <svg viewBox="0 0 24 24" aria-label="X" role="img" className=''>
                                                                <g>
                                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    : <div className="container">
                                                        <h2><span>Step {step} of 5</span></h2>
                                                    </div>
                                                }
                                            </div>
                                            { step === 5 && <div className="space container"></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='accountInfo container'>
                                <div className="wrapper container">
                                    <div className="accountContent container">
                                        <div className="container">
                                            <div className="infoHeader container">
                                                <h1 className="containerBlock"><span className="containerBlock">{TITLES[step] ?? 'Create your account'}</span></h1>
                                                {(step === 3 || step === 4) && (
                                                    <div className="infoSubheader container">
                                                        <div className="container">
                                                            <div className="subheader containerBlock">
                                                                <span className="containerBlock">{step === 3 ? `Enter it below to verify ${userData.email}.` : 'Make sure it’s 8 characters or more.'}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="container">
                                            { step === 1 ? (
                                                usernameComponent
                                            ) : (
                                                step === 2 ? (
                                                    <div className="editInput container" onClick={() => handleNext(step - 1)}>
                                                        {usernameComponent}
                                                    </div>
                                                ) : null
                                            )}
                                            { step === 1 ? (
                                                emailComponent
                                            ) : (
                                                step === 2 ? (
                                                    <div className="editInput container" onClick={() => handleNext(step - 1)}>{emailComponent}</div>
                                                ) : null
                                            )}
                                            { step === 1 ? (
                                                birthdaySelectComponent
                                            ) : (
                                                step === 2 ? (
                                                    <div className="editInput container" onClick={() => handleNext(step - 1)}>{birthdayComponent}</div>
                                                ) : null
                                            )}
                                            { step === 3 && (
                                                <VerificationForm
                                                    isActive={activeInputs.verification}
                                                    code={verification.userCode}
                                                    handleChange={handleVerificationCode}
                                                    onFocus={() => handleFocus('verification')}
                                                    onBlur={handleBlur}
                                                    field='userCode'
                                                />
                                            )}
                                            { step === 4 && (
                                                <PasswordForm
                                                    isActive={activeInputs.password}
                                                    onFocus={() => handleFocus('password')}
                                                    onBlur={handleBlur}
                                                    field='value'
                                                    password={password}
                                                    handleChange={handlePassword}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    step={step}
                                    isDataComplete={isDataComplete}
                                    handleNext={handleNext}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal