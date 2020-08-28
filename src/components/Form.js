import React, { useContext, useRef, useState } from 'react';
import { MovieContext } from './contexts/MovieContext';
import Error from './Error';

const Form = () => {
    const { titleInput, setTitleInput, setFinishQuery, page, getMovies, setPageJump } = useContext(MovieContext);
    const inputRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const titleInputHandler = e => setTitleInput(e.target.value);

    const removeQuery = () => {
        setTitleInput('');
        inputRef.current.focus();
    }

    const submit = e => {
        e.preventDefault();
        if (titleInput.length > 0) {
            page.current = 1;
            setPageJump(1);
            setFinishQuery(titleInput);
            getMovies(titleInput, page.current);
        } else {
            setIsOpen(true);
            setTimeout(() => setIsOpen(false), 3000)
        }
    }

    return (
        <>
            <form onSubmit={submit} className='form-title'>
                <section className='search-container'>
                    <i className="fas fa-search"></i>
                    <input ref={inputRef} type="text" id='movie-title' placeholder='Try search "Avengers"...' value={titleInput} onChange={titleInputHandler} autoComplete='off' />
                    <i onClick={removeQuery} className="fas fa-times remove-query"></i>
                </section>
            </form>

            <Error isOpen={isOpen} message='Title input must be filled!' />
        </>
    )
}

export default Form
