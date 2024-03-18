import React, { useState, useEffect } from "react"
import '../css/home/Home.css'
import '../css/App.css'
import { signUpWithEmail, signInExistingUser } from "../firebase/firebase"
import { BrowserRouter as Router, Link, Navigate, useNavigate } from "react-router-dom"
import CreateUserModal from "../auth/CreateUserModal"
import SignUpModal from "../auth/SignUpModal"
import GoogleLogin from "../auth/GoogleLogin"
import Footer from "../footer/Footer"
import { collection, addDoc } from "firebase/firestore"
import db from "../firebase/firebase"
import Divider from "../auth/Divider"
import Button1 from "../auth/Button1"


function Home() {
    const [mode, setMode] = useState(null)

    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const signUpUser = async (data) => {
        let { username, email, password, month, day, year } = data
        const response = await signUpWithEmail(email, password, username)
        if (response.user) {
            let user = response.user
            try {
                await addDoc(collection(db, 'users'), {
                    email,
                    username,
                    displayName: username,
                    password,
                    birthday: {
                        month,
                        day,
                        year
                    }
                })
                //navigate('/home')
            } catch (e) {
                console.error("Error adding the user: ", e)
                setError("An error occurred while sending the tweet. Please try again.")
            }
        }
    }

    const logInUser = async (data) => {
        let { password, email } = data
        const response = await signInExistingUser(email, password)
        if (response.user) {
            navigate('/home')
        }
    }

    const buttonClick = (mode) => {
        navigate(mode ? `/i/flow/${mode}` : '/')
        setMode(mode)
    }
    return (
        <div className="container flex events">
            <div className="container flex events">
                <div className="container adjust size stack containerWrap">
                    <main className="mainContainer container">
                        <div className="mainWrap container">
                            <div className="content container">
                                <div className="auth container">
                                    <div className="layout container">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="miniLogo small">
                                            <g>
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                            </g>
                                        </svg>
                                        <div className="title">
                                            <span>Happening now</span>
                                        </div>
                                        <div className="subtitle">
                                            <span>Join today.</span>
                                        </div>
                                        <div className="authForm container">
                                            <GoogleLogin/>
                                            <Divider/>
                                            <Button1
                                                text={'Create account'}
                                                handleClick={() => buttonClick('signup')}
                                                field={'signup'}
                                                styleName={'blue'}
                                            />
                                            <div className="agreement container">
                                                By signing up, you agree to the
                                                <a href="https://twitter.com/tos" className="container text" role="link" target="_blank">
                                                    <span className="text"> Terms of Service</span>
                                                </a> and
                                                <a href="https://twitter.com/en/privacy" className="container text" role="link" target="_blank">
                                                    <span className="text"> Privacy Policy,</span>
                                                </a> including
                                                <a href="https://help.twitter.com/en/rules-and-policies/x-cookiesy" className="container text" role="link" target="_blank">
                                                    <span className="text"> Cookie Use</span>
                                                </a>
                                            </div>
                                            <div className="loginForm container">
                                                <div className="text">
                                                    <span>Already have an account?</span>
                                                </div>
                                                <Button1
                                                    text={'Sign in'}
                                                    handleClick={() => buttonClick('login')}
                                                    field={'signup'}
                                                    styleName={'grey signup'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="logo container maxLogo">
                                    <div className="logoWrap container">
                                        <svg viewBox="0 0 24 24">
                                            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <Footer></Footer>
                            {mode === 'signup' && <CreateUserModal buttonClick={buttonClick} signUpUser={signUpUser} />}
                            {mode === 'login' && <SignUpModal buttonClick={buttonClick} logInUser={logInUser}/>}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Home