import React, { useState } from "react";
import "../css/auth/CreateUserModal.css";
import "../css/auth/SignUpModal.css";
import { RiCloseLine } from "react-icons/ri";

const SignUpModal = ({ setIsLoginUserOpen, logInUser }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let userData = {
            username,
            email,
        }
        logInUser(userData)
    }
    return (
        <div className="group">
            <div className="modal">
                <div className="darkBG">
                    <div className='centered'>
                        <div className='modal'>
                            <div className='modalHeader'>
                                <button className='closeBtn' onClick={() => setIsLoginUserOpen(false)}>
                                    <RiCloseLine />
                                </button>
                                <i></i>
                            </div>
                            <div className='modalContent'>
                                <div className="wrapper">
                                    <div className="header">
                                        <h1>Create your account</h1>
                                    </div>
                                    <form className="userInfo" onSubmit={event => handleSubmit(event)}>
                                        <div className="name">
                                            <label>
                                                <div className="inputWrap">
                                                    <span>Name</span>
                                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="login">
                                            <label>
                                                <div className="inputWrap">
                                                    <span>Email</span>
                                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="birthdayForm">
                                            <div className="title">
                                                <span>Date of birth</span>
                                            </div>
                                            <div className="subtitle">
                                                <span>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                                            </div>
                                        </div>
                                        <div className='modalActions'>
                                            <div className='actionsContainer'>
                                                <button className='submit'>
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal