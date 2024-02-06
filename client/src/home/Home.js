import React, { useState } from "react";
import '../css/home/Home.css'
import '../css/App.css'
import { signUpWithEmail, signInExistingUser } from "../firebase/firebase"
import { BrowserRouter as Router, Link, Navigate, useNavigate } from "react-router-dom";
import CreateUserModal from "../auth/CreateUserModal";
import SignUpModal from "../auth/SignUpModal"
import GoogleLogin from "../auth/GoogleLogin";
import Footer from "../footer/Footer";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import Divider from "../auth/Divider";


function Home() {
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)
    const [isLoginUserOpen, setIsLoginUserOpen] = useState(false)
    const [error, setError] = useState(null);
    const navigate = useNavigate()
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
                                            <GoogleLogin/>
                                            <Divider/>
                                            <div className="createAccount container formButton" href="/" onClick={() => setIsCreateUserOpen(true)}>
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
                                                <div className="loginLink container formButton" href="/" onClick={() => setIsLoginUserOpen(true)}>
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