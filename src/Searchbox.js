import React from 'react';
import './Searchbox.css'
const SearchBox = ({searchChange}) =>{
    return(
        <input type="text" name="box" placeholder="search for a character" onChange={searchChange}></input>
    )
}

export default SearchBox