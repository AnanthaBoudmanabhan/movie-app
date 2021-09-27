import React from 'react';

const SearchBar = ({ onSearch }) => {

    const searchHandler = (e) => {
        onSearch(e.target.value);
    }

    return (
        <header>
            <input type="search" className="search" placeholder="Search Movies..." onChange={searchHandler} />
        </header>
    )
}

export default SearchBar;