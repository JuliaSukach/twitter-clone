import React, { useState } from "react";
import '../css/home/Home.css'
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
        const response = await signUpWithEmail(email, password)
        if (response.user) {
            let user = response.user
            try {
                await addDoc(collection(db, 'users'), {
                    email,
                    username,
                    displayName: user?.displayName || "Default Display Name",
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
        <div className="app">
            <div className="main">
                <div className="logo">
                    <svg viewBox="0 0 24 24">
                        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                    </svg>
                </div>
                <div className="auth">
                    <div className="layout">
                        <div className="title">
                            <span>Happening now</span>
                        </div>
                        <div className="subtitle">
                            <span>Join today.</span>
                        </div>
                        <div className="authForm">
                            <div className="googleAuth" onClick={logGoogleUser}>
                                {/* Add Google authentication components here */}
                                Sign Up with Google
                            </div>
                            <div className="divider">
                                <div className="left-line"></div>
                                <div className="center-text">
                                    <span>or</span>
                                </div>
                                <div className="right-line"></div>
                            </div>
                            <div className="createAcc" href="/" onClick={() => setIsCreateUserOpen(true)}>Create Account</div>
                            <div className="login">
                                <div>
                                    <span>Already have an account?</span>
                                </div>
                                <div className="loginLink" href="/" onClick={() => setIsLoginUserOpen(true)}>Sign in</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            {isCreateUserOpen && <CreateUserModal setIsCreateUserOpen={setIsCreateUserOpen} signUpUser={signUpUser} />}
            {isLoginUserOpen && <SignUpModal setIsLoginUserOpen={setIsLoginUserOpen} logInUser={logInUser} />}
        </div>
    );
}

export default Home;