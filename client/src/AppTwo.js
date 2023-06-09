import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Convo from './components/pages/Convo'
import DefinedConvo from './components/DefinedConvo'

import App from './App'

function AppTwo() {
    return (
        <Router>
            <>
            <Routes>
                <Route
                path='/'
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
                path='/convoTwo'
                element={<DefinedConvo />}
                />
            </Routes>
            </>
        </Router>
    )
}
export default AppTwo