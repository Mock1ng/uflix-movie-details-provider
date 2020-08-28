import React, { useContext } from 'react';
import { MovieContext } from './contexts/MovieContext';
import Movie from './Movie';
import Form from './Form';
import Pagination from './Pagination';

const Main = () => {
    const { movies, dataFound } = useContext(MovieContext);


    return (
        <div>
            <Form />

            {dataFound > 0 ? (<p className='data-found'>Found {dataFound} item(s)</p>) : ''}

            {dataFound > 0 ? <Pagination /> : ''}

            <div className="movie-wrapper">
                {movies ?
                    movies.map(movie => (
                        <Movie key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} />
                    ))
                    : (<p>Seems.. like.. something went wrong :(</p>)
                }
            </div>

        </div>
    )
}

export default Main
