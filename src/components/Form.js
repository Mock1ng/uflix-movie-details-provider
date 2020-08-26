import React, { useContext } from 'react';
import { MovieContext } from './contexts/MovieContext';

const Form = ({ submit }) => {
    const { titleInput, setTitleInput } = useContext(MovieContext);

    const titleInputHandler = e => setTitleInput(e.target.value);

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
