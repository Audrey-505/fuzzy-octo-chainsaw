import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../src/components/pages/Signup'
import Login from '../src/components/pages/Login'
import Convo from '../src/components/pages/Convo'
import Main from '../src/components/pages/mainPage'
import Join from '../src/components/pages/Join'

import App from './App'

function AppTwo() {
    return (
        <Router>
            <>
            <Routes>
                <Route
                exact
                path='/join'
                element={<Join />}
                />
                <Route
                exact
                path='/signup'
                element={<Signup />}
                />
                <Route
                exact
                path='/login'
                element={<Login />}
                />
                <Route
                exact
                path='/convo'
                element={<Convo />}
                />
                <Route
                exact
                 path='/'
                 element={<Main />}
                 />
            </Routes>
            </>
        </Router>
    )
}
export default AppTwo