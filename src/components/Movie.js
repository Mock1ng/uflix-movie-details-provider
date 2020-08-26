import React from 'react'

const Movie = ({ poster, title, year }) => {
    return (
        <div className='movie'>
            <img src={poster} alt={title + '\'s Poster'} />
            <div className="movie-attributes">
                <h4>{title}</h4>
                <p>{year}</p>
            </div>
        </div>
    )
}

export default Movie
