import React  from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"

const Divider = ({ mode }) => {
    return (
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
    )
}

export default Divider