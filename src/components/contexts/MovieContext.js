import React, { createContext, useState, useRef } from 'react'

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [titleInput, setTitleInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [finishQuery, setFinishQuery] = useState('');
    const page = useRef(1);
    const [dataFound, setDataFound] = useState(0);
    const [pageJump, setPageJump] = useState(1)

    const getMovies = async (title, page) => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=${page}`);
        const data = await res.json();
        setMovies(data.Search);
        setDataFound(data.totalResults)
        console.log(data);
    }

    return (
        <MovieContext.Provider value={{ titleInput, setTitleInput, movies, setMovies, getMovies, page, finishQuery, setFinishQuery, dataFound, pageJump, setPageJump }}>
            {children}
        </MovieContext.Provider>
    )
}
