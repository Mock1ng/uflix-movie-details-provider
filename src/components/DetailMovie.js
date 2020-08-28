import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const DetailMovie = ({ match }) => {
    const [movie, setMovie] = useState({});
    const [ratings, setRatings] = useState([]);
    const param = match.params.movieId;

    useEffect(() => {
        getMovieById(param);
    }, [param]);

    const getMovieById = async id => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${id}&plot=full`);
        const data = await res.json();
        setMovie(data);
        setRatings(data.Ratings)
        console.log(data);
    }

    return (
        <div>
            <NavLink className='back-btn' to='/'>Back</NavLink>

            <div className="movie-detail-wrapper">
                <div className="img-wrapper">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="movie-details">
                    <div className="head-movie">
                        <div className="head-title">
                            <h4>{movie.Title} <span>({movie.Type}, {movie.Year})</span></h4>
                            <div className="imdb-ratings">
                                <p>IMDb: <span>{movie.imdbRating}</span> <i className="fas fa-star"></i></p>
                                <p className='vote'>Votes: <span>{movie.imdbVotes}</span> <i className="fas fa-thumbs-up"></i></p>
                            </div>
                        </div>

                        <div className="head-details">
                            <p><span>{movie.Rated}</span> <span>{movie.Runtime}utes</span> <span>{movie.Genre}</span> <span>{movie.Country}, {movie.Released}</span></p>
                        </div>
                    </div>

                    <div className="movie-attrs">
                        <div className='first-attrs'>
                            <p className="attr">Director(s): <span>{movie.Director}</span></p>
                            <p className="attr">Writer(s): <span>{movie.Writer}</span></p>
                            <p className="attr">Casts: <span>{movie.Actors}</span></p>
                            <p className="attr">Language(s): <span>{movie.Language}</span></p>
                            <div className="plot">
                                <h6>Synopsis:</h6>
                                <p>{movie.Plot}</p>
                            </div>
                        </div>
                        <div className='second-attrs'>
                            <p className="attr">Production: <span>{movie.Production}</span></p>
                            <p className='attr'>Website: <span>{movie.Website}</span></p>
                            <p className="attr">Award(s): <span>{movie.Awards}</span></p>
                            <div className="movie-ratings">
                                <h5 className="rating">Rating(s):</h5>
                                {ratings.map(rating => (
                                    <p key={rating.Source}>{rating.Source}: <span>{rating.Value}</span></p>
                                ))}
                            </div>
                            <p className="attr">DVD Release: <span>{movie.DVD}</span></p>
                            <p className="attr">Box Office: <span>{movie.BoxOffice}</span></p>
                        </div>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default DetailMovie
