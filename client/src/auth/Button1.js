import React from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"

const Button1 = ({ text, handleClick, styleName }) => {
    return (
        <div className={`${styleName} container formButton`} onClick={() => handleClick()}>
            <div className="buttonContent">
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Button1