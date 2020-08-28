import React, { useContext, useState } from 'react'
import { MovieContext } from './contexts/MovieContext';
import Error from './Error';

const Pagination = () => {
    const { getMovies, page, finishQuery, pageJump, setPageJump, dataFound } = useContext(MovieContext);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const nextPage = () => {
        if (page.current === Math.ceil(dataFound / 10) || dataFound === 0) {
            console.log('Error');
            setIsOpen(true);
            setMessage('Page didn\'t exist!');
            setTimeout(() => setIsOpen(false), 3000);
        } else {
            page.current += 1;
            setPageJump(page.current);
            getMovies(finishQuery, page.current);
        }
    }

    const prevPage = () => {
        if (page.current === 1) {
            console.log('Error');
            setIsOpen(true);
            setMessage('This is the first page!');
            setTimeout(() => setIsOpen(false), 3000);
        } else {
            page.current -= 1;
            setPageJump(page.current);
            getMovies(finishQuery, page.current);
        }
    }

    const pageToJumpHandler = e => setPageJump(e.target.value);

    const jumpPage = e => {
        e.preventDefault();
        if (pageJump > Math.ceil(dataFound / 10)) {
            console.log('Error');
            setIsOpen(true);
            setMessage(`There are only ${Math.ceil(dataFound / 10)} pages!`)
            setTimeout(() => setIsOpen(false), 3000);
        } else {
            page.current = parseInt(pageJump);
            getMovies(finishQuery, pageJump);
        }
    }

    return (
        <div className="pagination">
            <Error />
            <div className='pagination-wrapper'>
                <p>Page: </p>
                <button className='btn prev-btn' onClick={prevPage}><i className="fas fa-angle-left"></i></button>
                <p className="current-page">{page.current}</p>
                <button className='btn next-btn' onClick={nextPage}><i className="fas fa-angle-right"></i></button>
            </div>

            <Error isOpen={isOpen} message={message} />

            <div className="jump-page">
                <p>Jump to page: </p>

                <form onSubmit={jumpPage}>
                    <input type="number" name="jump-page" id="jump-page" value={pageJump} onChange={pageToJumpHandler} />
                </form>
            </div>
        </div>
    )
}

export default Pagination;
