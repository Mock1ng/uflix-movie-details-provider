import React, { useContext, useRef } from 'react';
import { MovieContext } from './contexts/MovieContext';

const Form = () => {
    const { titleInput, setTitleInput, setFinishQuery, page, getMovies, setPageJump } = useContext(MovieContext);
    const inputRef = useRef();

    const titleInputHandler = e => setTitleInput(e.target.value);

    const removeQuery = () => {
        setTitleInput('');
        inputRef.current.focus();
    }

    const submit = e => {
        e.preventDefault();
        page.current = 1;
        setPageJump(1);
        setFinishQuery(titleInput);
        getMovies(titleInput, page.current);
    }

    return (
        <form onSubmit={submit} className='form-title'>
            <section className='search-container'>
                <i className="fas fa-search"></i>
                <input ref={inputRef} type="text" id='movie-title' placeholder='Search movie by title..' value={titleInput} onChange={titleInputHandler} autoComplete='off' />
                <i onClick={removeQuery} className="fas fa-times remove-query"></i>
            </section>
        </form>
    )
}

export default Form
