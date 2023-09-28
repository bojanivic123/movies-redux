import React from 'react'
import { useDispatch } from 'react-redux';
import { performSearchMovies } from '../store/movies/slice';

const Header = () => {

    const dispatch = useDispatch();

    const handleSearch = (searchTerm) => {
        dispatch(performSearchMovies(searchTerm))
    }

    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <a className="navbar-brand" href="/">Movies</a>

                <form className="form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleSearch(e.target.value)} />
                </form>
            </div>
        </nav>

    )
}

export default Header