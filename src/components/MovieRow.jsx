import React from 'react'

const MovieRow = ({ movie }) => {
    return (
        <div className='row' >
            <div className='col-sm'>{movie.id}</div>
            <div className='col-sm'>{movie.title}</div>
            <div className='col-sm'>{movie.director}</div>
        </div>
    )
}

export default MovieRow