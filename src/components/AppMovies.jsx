import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { performFetchMovies } from '../store/movies/slice';
import MovieRow from './MovieRow';
import { selectAllMovies } from '../store/movies/selectors';

const AppMovies = () => {

    const dispatch = useDispatch();

    const movies = useSelector(selectAllMovies)

    useEffect(() => {
        console.log("dispatching....")
        dispatch(performFetchMovies())
    }, [])

    return (
        <div>
            {movies.length ? (
                <ul>
                    {movies.map((movie) => (
                        <li className='my-3 px-3' key={movie.id}>
                            <MovieRow movie={movie} />
                        </li>
                    ))}

                </ul>

            ) : <p>No movies!</p>}
        </div>
    )
}

export default AppMovies