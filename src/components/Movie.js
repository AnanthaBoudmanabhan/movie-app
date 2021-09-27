import React from 'react';

const Movie = ({ title, overview, poster_path, vote_average }) => {

    const setVoteClass = (vote_average) => {
        if (vote_average >= 8)
            return "green";
        else if (vote_average >= 6)
            return "orange";
        else
            return "red";
    }

    return (
        <div className="movie">
            <img src={poster_path ? process.env.REACT_APP_IMAGE_PATH + poster_path : "/movie.jpg"} alt={title + " poster"} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview : </h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;