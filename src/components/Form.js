import React, { useContext } from 'react';
import { MovieContext } from './contexts/MovieContext';

const Form = () => {
    const { titleInput, setTitleInput, finishQuery, setFinishQuery, page, getMovies } = useContext(MovieContext);

    const titleInputHandler = e => setTitleInput(e.target.value);

    const submit = e => {
        e.preventDefault();
        page.current = 1;
        setFinishQuery(titleInput);
        getMovies(titleInput, page.current);
        console.log(finishQuery);
        setTitleInput('');
    }

    return (
        <form onSubmit={submit} className='form-title'>
            <section className='search-container'>
                <i className="fas fa-search"></i>
                <input type="text" id='movie-title' placeholder='Search by title..' value={titleInput} onChange={titleInputHandler} autoComplete='off' />
            </section>
        </form>
    )
}

export default Form