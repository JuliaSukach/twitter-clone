import React, { useState } from "react";
import "../css/auth/CreateUserModal.css";
import { RiCloseLine } from "react-icons/ri";
import { generateOptions } from '../utils/utils'

const CreateUserModal = ({ setIsCreateUserOpen, signUpUser }) => {
    const [step, setStep] = useState(1)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
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
        <div className="group">
            <div className="modal">
                <div className="darkBG">
                    <div className='centered'>
                        <div className='modal'>
                            <div className='modalHeader'>
                                <button className='closeBtn' onClick={() => setIsCreateUserOpen(false)}>
                                    <RiCloseLine />
                                </button>
                                <h5 className='step'>Step {step} of 5</h5>
                            </div>
                            <div className='modalContent'>
                                <div className="wrapper">
                                    <div className="header">
                                        <h1>Create your account</h1>
                                    </div>
                                    <form className="userInfo" onSubmit={event => handleSubmit(event)}>
                                        <div className="name">
                                            <label>
                                                <div className="inputWrap">
                                                    <span>Name</span>
                                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="login">
                                            <label>
                                                <div className="inputWrap">
                                                    <span>Email</span>
                                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="birthdayForm">
                                            <div className="title">
                                                <span>Date of birth</span>
                                            </div>
                                            <div className="subtitle">
                                                <span>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                                            </div>
                                            <div className="datePicker">
                                                <div className="month">
                                                    <label>
                                                        <span>Month</span>
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
                                                <div className="day">
                                                    <label>
                                                        <span>Day</span>
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
                                                <div className="year">
                                                    <label>
                                                        <span>Year</span>
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
                                        <div className='modalActions'>
                                            <div className='actionsContainer' onClick={handleBtnClick/*signUpUser*/}>
                                                <button className='submit'>
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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