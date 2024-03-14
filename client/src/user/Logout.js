import React from "react"
import '../css/home/Home.css'
import '../css/user/Logout.css'
import { logOutUser } from '../firebase/firebase'
import { BrowserRouter as Router, Link, Navigate, useNavigate } from "react-router-dom"

function Logout() {
    const navigate = useNavigate()
    const logout = async() => {
        await logOutUser()
        navigate('/')
    }

    const cancel = () => {
        navigate('/user')
    }
    return (
        <div className="container">
            <div role="group" tabindex="0" className="container logout">
                <div className="container background"></div>
                <div className="container content">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="logo">
                        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                    </svg>
                    <h1 dir="ltr" aria-level="1" className="containerBlock infoWrap header">
                        <span className="box text">Log out of X?</span>
                    </h1>
                    <div dir="ltr" className="containerBlock infoWrap textContainer">
                        <span className="box text">You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</span>
                        <span className="box text"> </span>
                    </div>
                    <div className="container buttonWrapper">
                        <div role="button" tabindex="0" className="container button out" onClick={logout}>
                            <div dir="ltr" className="containerBlock optionWrap">
                                <span className="box text option">
                                    <span className="box text">Log out</span>
                                </span>
                            </div>
                        </div>
                        <div role="button" tabindex="0" className="container button cancel" onClick={cancel}>
                            <div dir="ltr" className="containerBlock optionWrap">
                                <span className="box text option">
                                    <span className="box text">Cancel</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout