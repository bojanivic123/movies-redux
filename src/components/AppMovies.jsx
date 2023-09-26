import React, { useEffect, useState } from 'react'
import movieService from '../services/movieService'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../store/movies/slice';
import MovieRow from './MovieRow';
import { selectAllMovies } from '../store/movies/selectors';

const AppMovies = () => {

    const dispatch = useDispatch();

    const movies = useSelector(selectAllMovies)

    useEffect(() => {
        movieService.getAll().then((movies) => dispatch(setMovies(movies)))
    }, [])

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li>
                        <MovieRow movie={movie} key={movie.id} />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default AppMovies