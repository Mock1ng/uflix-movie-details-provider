import React, { createContext, useState, useRef } from 'react'

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [titleInput, setTitleInput] = useState('');
    const [movies, setMovies] = useState([]);
    const page = useRef(1);

    const getMovies = async (title, page) => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=${page}`);
        const data = await res.json();
        setMovies(data.Search);
        console.log(data);
    }

    return (
        <MovieContext.Provider value={{ titleInput, setTitleInput, movies, setMovies, getMovies, page }}>
            {children}
        </MovieContext.Provider>
    )
}
