import React, { useEffect, useState }  from 'react'
import Feed from '../feed/Feed'
import Sidebar from '../sidebar/Sidebar'
import Widgets from '../widgets/Widgets'
import Loading from '../utils/loading/Loading'
import { isUserLoggedIn } from '../firebase/firebase'
import { BrowserRouter as Router, Link, Navigate, useNavigate } from "react-router-dom"

function User() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        function checkUser() {
            isUserLoggedIn((user, error) => {
                if (error) {
                    console.error('Error checking user authentication:', error)
                } else {
                    if (!user) {
                        navigate('/')
                    } else {
                        setLoading(false)
                    }
                }
            })
        }
        checkUser()
    }, [])
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className='app'>
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            )}
        </>
    )
}

export default User