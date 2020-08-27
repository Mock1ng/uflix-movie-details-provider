import React, { useContext } from 'react';
import { MovieContext } from './contexts/MovieContext';
import Movie from './Movie';
import Form from './Form';
import Pagination from './Pagination';

const Main = () => {
    const { movies, finishQuery } = useContext(MovieContext);


    return (
        <div>
            <Form />

            <p>You search for: {finishQuery}</p>

            <Pagination />

            <div className="movie-wrapper">
                {movies.map(movie => (
                    <Movie key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} />
                ))}
            </div>

        </div>
    )
}

export default Main
