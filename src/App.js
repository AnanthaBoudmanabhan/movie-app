import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {

        let queryStr = query.trim();

        const movieSearch = (queryStr) => {
            if (queryStr) {
                getMovies(process.env.REACT_APP_SEARCH_MOVIES_API + queryStr);
            }
            else {
                getMovies(process.env.REACT_APP_POPULAR_MOVIES_API);
            }
        }
        const identifier = setTimeout(() => {
            movieSearch(queryStr);
        }, 300);

        return () => clearTimeout(identifier);

    }, [query])


    const getMovies = (api) => {
        fetch(api)
            .then(res => res.json())
            .then(data => setMovies(data.results));
    }

    return (
        <div className="wrapper">
            <SearchBar onSearch={setQuery} />
            {query && <p className="show-result-text">Showing results for : <span className="query">{query}</span></p>}
            {movies.length && <MovieList movies={movies} />}
            {query &&
                !movies.length &&
                (<div style={{ textAlign: 'center', marginTop: '10rem' }}>
                    <p>Sorry! No Results Found</p>
                </div>)
            }
        </div>
    )
}

export default App;