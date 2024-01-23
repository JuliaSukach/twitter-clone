import React, { useState } from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";

const UserNameInput = ({ isActive, onFocus, onBlur, handleChange, field, currValue }) => {
    const [emptyInput, setEmptyInput] = useState(false)
    const handleInputChange = (event) => {
        let value = event.target.value
        if (value.length <= 50) {
            setEmptyInput(currValue.length > 0 && value.length === 0 ? true : false)
            handleChange(field, value)
        }
    }
    return (
        <div className="nameBox container">
            <label className={`container ${isActive ? 'activeLabel' : ''} ${emptyInput ? 'emptyLabel' : ''} ${currValue.length ? 'filled' : ''}`} onFocus={onFocus} onBlur={onBlur}>
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
                    </div>
                </div>
            </label>
            <div className="assertive container">
                <div className="box container">
                    <div className={`container ${emptyInput ? '' : 'hidden'}`}>
                        <div className="assertiveContent containerBlock">
                            <span className="containerBlock">What’s your name?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNameInput