import React from 'react';
import { NavLink } from 'react-router-dom';

const Movie = ({ poster, title, year, id }) => {
    return (
        <NavLink to={'/detail/movieId=' + id} className='movie'>
            <div className="poster-container">
                <img src={poster} alt={title + '\'s Poster'} />
            </div>
            <div className="card-attributes">
                <h4 className='attr-title'>{title}</h4>
                <p className='attr-year'>{year}</p>
            </div>
        </NavLink>
    )
}

export default Movie
