import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import ResetPassword from './pages/ResetPassword/index'
import ChangePassword from './pages/ChangePassword/index'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='resetpassword'
          element={<ResetPassword />}
        />
        <Route
          path='reset-password'
          element={<ChangePassword />}
        />
      </Routes>
    </div>
  )
}

export default App
