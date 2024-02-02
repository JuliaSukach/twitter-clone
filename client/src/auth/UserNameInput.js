import React, { useState, useRef, useEffect } from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"

const UserNameInput = ({ isActive, onFocus, onBlur, handleChange, field, currValue, step }) => {
    const [emptyInput, setEmptyInput] = useState(false)
    const handleInputChange = (event) => {
        let value = event.target.value
        if (value.length <= 50) {
            setEmptyInput(currValue.length > 0 && value.length === 0 ? true : false)
            handleChange(field, value)
        }
    }
    const selectRef = useRef(null)
    useEffect(() => {
        if (step === 1) {
            selectRef.current.focus()
        }
    }, [])
    return (
        <div className="nameBox container">
            <label className={`container ${isActive ? 'activeLabel' : ''} ${emptyInput ? 'emptyLabel' : ''} ${currValue.length ? 'filled' : ''}`} onFocus={onFocus} onBlur={onBlur} ref={selectRef}>
                <div className="inputWrap container">
                    <div className="userInput container">
                        <div className={`textWrap containerBlock ${isActive ? 'focused' : ''}`}>
                            <span className="containerBlock">Name</span>
                        </div>
                        <div className="polite container">
                            <div className="politeWrap container">
                                <span>{currValue.length}/50</span>
                            </div>
                        </div>
                    </div>
                    <div className="inputBox container">
                        <div className="wrap containerBlock">
                            <input type="text" value={currValue} onChange={(event) => handleInputChange(event)}/>
                        </div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="checked">
                            <g>
                                <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </label>
            <div className="assertive container">
                <div className="box container">
                    <div className={`container ${emptyInput ? '' : 'hidden'}`}>
                        <div className="assertiveContent containerBlock warning">
                            <span className="containerBlock">What’s your name?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNameInput