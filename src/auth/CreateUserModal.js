import React, { useState } from "react";
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";
import { RiCloseLine } from "react-icons/ri";
import { generateOptions } from '../utils/utils'

const CreateUserModal = ({ setIsCreateUserOpen, signUpUser }) => {
    const [step, setStep] = useState(1)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [isNameLabelActive, setIsNameLabelActive] = useState(false)
    const handleInputChange = (inputName, event) => {
        setUsername(event.target.value)
    }
    const handleInputClick = (inputName) => {
        setIsNameLabelActive(true)
    }
    const handleBtnClick = (event) => {
        // setStep(step + 1)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let userData = {
            username,
            email,
            birthday: `${selectedMonth}${selectedDay}, ${selectedYear}`
        }
        signUpUser(userData)
    }

    const [months, setMonths] = useState(generateOptions(1, 12, 'month'))
    const [days, setDays] = useState(generateOptions(1, 31, 'day'))
    const [years, setYears] = useState(generateOptions(1900, 2024, 'year'))

    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    const handleDateChange = (field, event) => {
        if (field === 'month') {
            setSelectedMonth(event.target.value)
        } else if (field === 'day') {
            setSelectedDay(event.target.value)
        } else {
            setSelectedYear(event.target.value)
        }
    }

    return (
        <div className="group container">
            <div className="bgContainer container"></div>
            <div className="modal container">
                <div className="modalContent container">
                    <div className='alignContent container'>
                        <div className='modalContent container'>
                            <div className='container'>
                                <div className="header container">
                                    <div className="container">
                                        <div className="headerWrap container">
                                            <div className="closeContainer container">
                                                <div className="closeWrap container" onClick={() => setIsCreateUserOpen(false)}>
                                                    <div className="close container">
                                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                                            <g>
                                                                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="titleContainer container">
                                                <div className="titleWrap container">
                                                    <h2><span>Step {step} of 5</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='accountInfo container'>
                                <div className="wrapper container">
                                    <div className="accountContent container">
                                        <div className="container">
                                            <div className="infoHeader container">
                                                <h1 className="containerBlock"><span className="containerBlock">Create your account</span></h1>
                                            </div>
                                        </div>
                                        <div className="container" onSubmit={event => handleSubmit(event)}>
                                            <div className="nameBox container">
                                                <label className={`container ${isNameLabelActive ? 'activeNameLabel' : ''}`}>
                                                    <div className="inputWrap container">
                                                        <div className="userInput container">
                                                            <div className="textWrap containeBlock">
                                                                <span className="containerBlock">Name</span>
                                                            </div>
                                                            <div className="polite container">
                                                                <div className="politeWrap container">
                                                                    <span>0/50</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inputBox container">
                                                            <div className="wrap containerBlock">
                                                                <input type="text" value={username} onClick={() => handleInputClick('username')} onChange={(event) => handleInputChange(event, 'username')}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                                <div className="hidden container">
                                                    <div className="box container"></div>
                                                </div>
                                            </div>
                                            <div className="loginBox container">
                                                <label className="container">
                                                    <div className="inputWrap container">
                                                        <div className="userInput container">
                                                            <div className="textWrap containeBlock">
                                                                <span className="containerBlock">Email</span>
                                                            </div>
                                                        </div>
                                                        <div className="inputBox container">
                                                            <div className="wrap containerBlock">
                                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                                <div className="hidden container">
                                                    <div className="box container"></div>
                                                </div>
                                            </div>
                                            <div className="birthdayForm container">
                                                <div className="title containerBlock">
                                                    <span className="containerBlock">Date of birth</span>
                                                </div>
                                                <div className="subtitle containerBlock">
                                                    <span className="containerBlock">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                                                </div>
                                                <div className="container">
                                                    <div className="dataPicker container">
                                                        <div className="month container dataBox">
                                                            <label className="containerBlock">
                                                                <span className="containerBlock">Month</span>
                                                            </label>
                                                            <select id="month" name="month" value={selectedMonth} onChange={event => handleDateChange('month', event)}>
                                                                <option value="" disabled></option>
                                                                {months.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <svg viewBox="0 0 24 24">
                                                                <g>
                                                                    <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="day container dataBox">
                                                            <label className="containerBlock">
                                                                <span className="containerBlock">Day</span>
                                                            </label>
                                                            <select id="day" name="day" value={selectedDay} onChange={event => handleDateChange('day', event)}>
                                                                <option value="" disabled></option>
                                                                {days.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <svg viewBox="0 0 24 24">
                                                                <g>
                                                                    <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="year container dataBox">
                                                            <label className="containerBlock">
                                                                <span className="containerBlock">Year</span>
                                                            </label>
                                                            <select id="year" name="year" value={selectedYear} onChange={event => handleDateChange('year', event)}>
                                                                <option value="" disabled></option>
                                                                {years.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <svg viewBox="0 0 24 24">
                                                                <g>
                                                                    <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='modalActions'>
                                                <div className='actionsContainer' onClick={handleBtnClick}>
                                                    <button className='submit'>
                                                        Next
                                                    </button>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="nextContainer container">
                                    <div className="container">
                                        <div className="nextWrap container">
                                            <div className="nextBox container">
                                                <div className="nextContent containerBlock">
                                                    <span className="containerBlock">Next</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal;