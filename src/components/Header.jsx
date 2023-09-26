import React, { useState } from 'react'
import movieService from '../services/movieService';
import { useDispatch } from 'react-redux';
import { setMovies } from '../store/movies/slice';

const Header = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        movieService.searchMovies(searchTerm).then((data) => dispatch(setMovies(data)))
    }

    return (
        <nav class='navbar navbar-light bg-light'>
            <a class="navbar-brand" href="#">Movies</a>

            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={handleSearch}>Search</button>
            </form>
        </nav>
    )
}

export default Header