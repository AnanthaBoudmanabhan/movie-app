import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
    return (
        <div className="movies-container">
            {movies.length && movies.map(movie => (
                <Movie {...movie} key={movie.id} />
            ))}
        </div>
    )
}

export default MovieList