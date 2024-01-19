import React, { useState } from "react";
import '../css/home/Home.css'
import '../css/App.css'
import { signInWithGooglePopup, signUpWithEmail, signInExistingUser } from "../firebase/firebase"
import { BrowserRouter as Router, Link, Navigate, useNavigate } from "react-router-dom";
import CreateUserModal from "../auth/CreateUserModal";
import SignUpModal from "../auth/SignUpModal";
import Footer from "../footer/Footer";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebase";


function Home() {
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)
    const [isLoginUserOpen, setIsLoginUserOpen] = useState(false)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        if (response.user) {
            navigate('/user')
        }
    }

    const signUpUser = async (data) => {
        let { username, email, birthday } = data
        let password = 'LoveEdward123'
        const response = await signUpWithEmail(email, password, username)
        if (response.user) {
            let user = response.user
            try {
                await addDoc(collection(db, 'users'), {
                    email,
                    username,
                    displayName: username,
                    password,
                    birthday
                })
                setIsCreateUserOpen(false)
                navigate('/user')
            } catch (e) {
                console.error("Error adding the user: ", e);
                setError("An error occurred while sending the tweet. Please try again.");
            }

        }
    }

    const logInUser = async (data) => {
        let { username, email } = data
        let password = 'LoveEdward123'
        const response = await signInExistingUser(email, password)
        if (response.user) {
            navigate('/user')
        }
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
                                        <div className="title">
                                            <span>Happening now</span>
                                        </div>
                                        <div className="subtitle">
                                            <span>Join today.</span>
                                        </div>
                                        <div className="authForm container">
                                            <div className="googleAuth container button" onClick={logGoogleUser}>
                                                <div className="buttonContent container">
                                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="gmail-icon">
                                                        <g>
                                                            <path d="M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z" fill="#EA4335"></path>
                                                            <path d="M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z" fill="#FBBC05"></path>
                                                            <path d="M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z" fill="#34A853"></path>
                                                            <path d="M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z" fill="#4285F4"></path>
                                                        </g>
                                                    </svg>
                                                    <span>Sign Up with Google</span>
                                                </div>
                                            </div>
                                            <div className="divider container">
                                                <div className="dividerWrap container">
                                                    <div className="leftLine container">
                                                        <div className="line container"></div>
                                                    </div>
                                                    <div className="center container">
                                                        <div className="text">
                                                            <span>or</span>
                                                        </div>
                                                    </div>
                                                    <div className="rightLine container">
                                                        <div className="line container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="createAccount container button" href="/" onClick={() => setIsCreateUserOpen(true)}>
                                                <div className="buttonContent">
                                                    <span>Create account</span>
                                                </div>
                                            </div>
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
                                                <div className="loginLink container button" href="/" onClick={() => setIsLoginUserOpen(true)}>
                                                    <div className="buttonContent">
                                                        <span>Sign in</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="logo container">
                                    <div className="logoWrap container">
                                        <svg viewBox="0 0 24 24">
                                            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <Footer></Footer>
                            {isCreateUserOpen && <CreateUserModal setIsCreateUserOpen={setIsCreateUserOpen} signUpUser={signUpUser} />}
                            {isLoginUserOpen && <SignUpModal setIsLoginUserOpen={setIsLoginUserOpen} logInUser={logInUser} />}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home;