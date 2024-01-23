import React, { useState } from "react";
import { generateOptions } from '../utils/utils'
import '../css/home/Home.css'
import "../css/auth/CreateUserModal.css";

const BirthdayForm = ({ isMonthActive, isDayActive, isYearActive, month, day, year, onFocus, onBlur, handleChange }) => {
    const [months, setMonths] = useState(generateOptions(1, 12, 'month'))
    const [days, setDays] = useState(generateOptions(1, 31, 'day'))
    const [years, setYears] = useState(generateOptions(1900, 2024, 'year'))

    const handleDateChange = (field, event) => {
        handleChange(field, event.target.value)
    }

    return (
        <div className="birthdayForm container">
            <div className="title containerBlock">
                <span className="containerBlock">Date of birth</span>
            </div>
            <div className="subtitle containerBlock">
                <span className="containerBlock">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
            </div>
            <div className="container">
                <div className="dataPicker container">
                    <div className={`month container dataBox ${isMonthActive ? 'activeSelect' : ''}`} onFocus={() => onFocus('month')} onBlur={onBlur}>
                        <label className="containerBlock">
                            <span className="containerBlock">Month</span>
                        </label>
                        <select id="month" name="month" value={month} onChange={event => handleDateChange('month', event)}>
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
                    <div className={`day container dataBox ${isDayActive ? 'activeSelect' : ''}`} onFocus={() => onFocus('day')} onBlur={onBlur}>
                        <label className="containerBlock">
                            <span className="containerBlock">Day</span>
                        </label>
                        <select id="day" name="day" value={day} onChange={event => handleDateChange('day', event)}>
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
                    <div className={`year container dataBox ${isYearActive ? 'activeSelect' : ''}`} onFocus={() => onFocus('year')} onBlur={onBlur}>
                        <label className="containerBlock">
                            <span className="containerBlock">Year</span>
                        </label>
                        <select id="year" name="year" value={year} onChange={event => handleDateChange('year', event)}>
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
    )
}

export default BirthdayForm