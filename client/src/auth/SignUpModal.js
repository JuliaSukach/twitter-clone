import React, { useState } from "react"
import "../css/auth/SignUpModal.css"
import "../css/auth/CreateUserModal.css"
import Tooltip from "../utils/tooltip/Tooltip"
import GoogleLogin from "./GoogleLogin"
import Divider from "./Divider"
import PasswordForm  from "./PasswordForm"
import Button from "./Button"
import SignupLink from "./SignupLink"
import Button1 from "./Button1"
import Input from "./Input"

const SignUpModal = ({ buttonClick, logInUser }) => {
    const [step, setStep] = useState(1)
    const [userData, setUserData] = useState({
        value: '',
        isLoginActive: false,
    })

    const handleData = (event, field) => {
        let value = event.target.value
        setUserData({
            ...userData,
            [field]: value
        })
    }

    const [password, setPassword] = useState({
        value: "",
        showPassword: false,
        isValid: true,
        isPassActive: false,
    })

    const handleNext = (value) => {
        setStep(value)
    }

    const handleSubmit = () => {
        let data = {
            email: userData.value,
            password: password.value
        }
        logInUser(data)
    }

    return (
        <div className="group container">
            <div className="bgContainer container"></div>
            <div className="modal container">
                <div className="modalContent container">
                    <div className={`alignContent container ${step === 1 ? 'alignCenter' : ''} loginForm`}>
                        <div className='modalContent container'>
                            <div className='container'>
                                <div className="header container">
                                    <div className="container">
                                        <div className="headerWrap container">
                                            <div className="closeContainer container center">
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
                                                <div className="titleWrap container">
                                                    <svg viewBox="0 0 24 24" aria-label="X" role="img" className=''>
                                                        <g>
                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="space container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='accountInfo container'>
                                <div className="wrapper container">
                                    <div className="container">
                                        <div className="accountContent container">
                                            <div className="container">
                                                <div className="infoHeader container">
                                                    <h1 className="containerBlock"><span className="containerBlock">{step === 1 ? 'Sign in to X' : 'Enter your password'}</span></h1>
                                                </div>
                                            </div>
                                            {step === 1 && (
                                                <>
                                                    <GoogleLogin mode='modal' />
                                                    <Divider />
                                                </>
                                            )}
                                            <Input
                                                onFocus={() => setUserData({...userData, 'isLoginActive': true })}
                                                onBlur={() => setUserData({...userData, 'isLoginActive': false })}
                                                onChange={(event) => handleData(event, 'value')}
                                                isActive={userData.isLoginActive}
                                                isFilled={userData.value.length}
                                                disabled={step === 2}
                                                value={userData.value}
                                                text={'Email address or username'}
                                            />
                                            {step === 2 && (
                                                <>
                                                    <PasswordForm
                                                        isActive={password.isPassActive}
                                                        onFocus={() => setPassword({...password, 'isPassActive': true })}
                                                        onBlur={() => setPassword({...password, 'isPassActive': false })}
                                                        field='value'
                                                        password={password}
                                                        handleChange={(field, value) => setPassword({...password, [field]: value })}
                                                    />
                                                </>
                                            )}
                                            {step === 1 && (
                                                <>
                                                    <Button1
                                                        text={'Next'}
                                                        handleClick={() => handleNext(step + 1)}
                                                        styleName={'black'}
                                                    />
                                                    <Button1
                                                        text={'Forgot password?'}
                                                        handleClick={() => buttonClick(null)}
                                                        styleName={'grey'}
                                                    />
                                                    <SignupLink/>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {step === 2 && (
                                    <Button
                                        role={'login'}
                                        step={step}
                                        isDataComplete={password.value ? true : false}
                                        handleNext={handleSubmit}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal