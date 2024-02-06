import React from "react"
import '../css/home/Home.css'
import "../css/auth/SignUpModal.css"
import "../css/auth/CreateUserModal.css"

const SignupLink = ({ role }) => {
    return (
        <div className={`signUpBox containerBox ${role === 'login' ? 'signUp' : ''}`}>
            <span className="containerBox">Don’t have an account? </span>
            <span className="signUpLink containerBox">Sign Up</span>
        </div>
    )
}

export default SignupLink