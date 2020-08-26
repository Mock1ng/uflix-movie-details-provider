import React, { useContext } from 'react'
import { MovieContext } from './contexts/MovieContext';

const Pagination = ({ finishQuery }) => {
    const { getMovies, page } = useContext(MovieContext)

    const nextPage = () => {
        page.current += 1;
        getMovies(finishQuery, page.current);
    }

    const prevPage = () => {
        page.current -= 1;
        getMovies(finishQuery, page.current);
    }

    return (
        <div>
            <p>Page: {page.current}</p>
            <button onClick={prevPage}>Prev Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}

export default Pagination;
