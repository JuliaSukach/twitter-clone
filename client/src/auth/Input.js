import React,  { useRef, useEffect } from "react"
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css"

const Input = ({ onFocus, onBlur, onChange, onClick, isActive, isFilled, isEmpty = null, isValid = null, disabled, value, text, role = null, hint = '', type = 'text' }) => {
    const selectRef = useRef(null)
    useEffect(() => {
        if (['name', 'code', 'password'].includes(role) && isActive) {
            selectRef.current.focus()
        }
    }, [])
    return (
        <div className='nameBox container'>
            <label className={`container ${isActive ? 'activeLabel' : ''} ${isFilled ? 'filled' : ''} ${isEmpty ? 'emptyLabel' : ''} ${isValid === false ? 'invalidInput' : ''} ${disabled ? 'disabled': ''}`}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={selectRef}
            >
                <div className="inputWrap container">
                    <div className="userInput container">
                        <div className={`textWrap containerBlock ${isActive ? 'focused' : ''}`}>
                            <span className="containerBlock">{text}</span>
                        </div>
                        <div className={`polite container ${role === 'name' ? '' : 'hidden'}`}>
                            <div className="politeWrap container">
                                <span>{isFilled}/50</span>
                            </div>
                        </div>
                    </div>
                    <div className="inputBox container">
                        <div className="wrap containerBlock">
                            <input type={type} value={value} onChange={onChange} disabled={disabled}/>
                        </div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className={`checked ${!role ? 'hidden' : ''}`}>
                            <g>
                                <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
                            </g>
                        </svg>
                        <div className={`container iconBox ${role !== 'password' ? 'hidden' : ''}`}>
                            <div className="iconWrap">
                                <div className="icon containerBlock" onClick={onClick}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" class="show">
                                        <g>
                                            <path d={type === 'text'
                                                ? 'M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'
                                                : 'M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z'}
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
            <div className={`assertive container ${!role ? 'hidden' : ''}`}>
                <div className="box container">
                    <div className={`container ${isEmpty || isValid === false ? '' : 'hidden'}`}>
                        <div className="assertiveContent containerBlock warning">
                            <span className="containerBlock">{hint}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input