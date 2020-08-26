import React, { useState, useContext } from 'react';
import { MovieContext } from './contexts/MovieContext';
import Movie from './Movie';
import Form from './Form';
import Pagination from './Pagination';

const Main = () => {
    const { titleInput, setTitleInput, movies, getMovies, page } = useContext(MovieContext);
    const [finishQuery, setFinishQuery] = useState('');

    const submit = e => {
        e.preventDefault();
        page.current = 1;
        setFinishQuery(titleInput);
        getMovies(titleInput, page.current);
        setTitleInput('');
    }

    return (
        <div>
            <Form submit={submit} />

            <Pagination finishQuery={finishQuery} />

            <div className="movie-wrapper">
                {movies.map(movie => (
                    <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} />
                ))}
            </div>

        </div>
    )
}

export default Main
