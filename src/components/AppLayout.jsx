import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppMovies from './AppMovies'
import Header from './Header'

const AppLayout = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/movies' element={<AppMovies />} />
                <Route path="*" element={<Navigate to="/movies" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppLayout