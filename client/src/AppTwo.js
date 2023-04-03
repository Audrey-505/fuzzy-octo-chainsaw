import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../src/components/pages/Signup'
import Login from '../src/components/pages/Login'
import Convo from '../src/components/pages/Convo'
import Main from '../src/components/pages/mainPage'

import App from './App'

function AppTwo() {
    return (
        <Router>
            <>
            <Routes>
                <Route
                path='/signup'
                element={<Signup />}
                />
                <Route
                path='/login'
                element={<Login />}
                />
                <Route
                path='/convo'
                element={<App />}
                />
                <Route
                 path='/'
                 element={<Main />}
                 />
            </Routes>
            </>
        </Router>
    )
}
export default AppTwo