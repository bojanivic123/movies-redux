import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppMovies from './AppMovies'
import Header from './Header'

const AppLayout = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<AppMovies />} />
                <Route path='movies' element={<AppMovies />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppLayout