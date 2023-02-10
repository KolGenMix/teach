import React from "react"
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import NavBar from "../layout/NavBar/navbar"
import Main from "../../pages/public-page/main-page/main-page"
import Login from "../../pages/public-page/auth/login-page/login-page"
import Reg from "../../pages/public-page/auth/reg-page/reg-page"



const Content = () => {
    return (
        <main className="container">

            <Router>
                <NavBar />

                <Routes>
                    <Route path="/" component={<Main />} />
                    <Route path="/login" component={<Login />} />
                    <Route path="/reg" component={<Reg />} />
                </Routes>

            </Router>
        </main>
    )
}

export default Content