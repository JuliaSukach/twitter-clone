import React, { useEffect, useRef } from 'react'
import '../../css/utils/popup/Popup.css'
import '../../css/home/Home.css'

function Popup({ onClose }) {
    const popupRef = useRef(null)

    // Function to handle click outside the popup
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose() // Call onClose prop to close the popup
        }
    }

    useEffect(() => {
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside)
        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className='container popup' style={{ left: `23px`, bottom: '85px' }} ref={popupRef}>
            <div className='container content flex'>
                <div tabindex='0' className='container'></div>
                <div role='group' tabindex='0' className='container outlineNone'>
                    <div>
                        <div className='container'>
                            <div className='container background'>
                                <svg viewBox='0 0 24 24' aria-hidden='true' className='pointer' style={{ left: 'calc(19.9965px)' }}>
                                    <g><path d='M22 17H2L12 6l10 11z'></path></g>
                                </svg>
                                <div className='container wrap'>
                                    <div className='container wrapContent'>
                                        <a href='/i/flow/login' role='menuitem' className='container row outlineNone'>
                                            <div className='container flex'>
                                                <div dir='ltr' className='action containerBlock'>
                                                    <span className='containerBlock actionText'>Add an existing account</span>
                                                </div>
                                            </div>
                                            <div className='container additionSpace'></div>
                                        </a>
                                        <a href='/logout' role='menuitem' className='container row outlineNone'>
                                            <div className='container flex'>
                                                <div dir='ltr' className='action containerBlock'>
                                                    <span className='containerBlock actionText'>Log out @yulia_sukach</span>
                                                </div>
                                            </div>
                                            <div className='container'></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabindex='0' className='container'></div>
            </div>
        </div>
    )
}

export default Popup