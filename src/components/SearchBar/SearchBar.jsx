import React from 'react';
import './Search-bar.css';


const SearchBar = ({ placeholder, handleChange  }) => {
    return (
        <input className="search" type="search" placeholder={ placeholder } onChange={ handleChange } />
    ); 
};

export default SearchBar;
