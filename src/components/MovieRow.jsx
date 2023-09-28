import React from 'react'

const MovieRow = ({ movie }) => {
    return (
        <div className='row my-3 p-3 border bg-light' >
            <div className='col-sm'>{movie.id}</div>
            <div className='col-sm'>{movie.title}</div>
            <div className='col-sm'>{movie.director}</div>
        </div>
    )
}

export default MovieRow