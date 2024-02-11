import React from "react"
import "./css/App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./home/Home"
import User from "./user/User"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<User />} />
                <Route path="/" element={<Home />}/>
                <Route path="/i/flow/signup" element={<Home/>}/>
                <Route path="/i/flow/login" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
