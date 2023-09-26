import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppMovies from './AppMovies'

const AppLayout = () => {
    return (
        <BrowserRouter>
            <nav class='navbar navbar-light bg-light'>
                <span class='navbar-brand'>Movies</span>
            </nav>
            <Routes>
                <Route path="/" element={<AppMovies />} />
                <Route path='movies' element={<AppMovies />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppLayout