import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div id='searchBar'>
        <div id='logo'>
            <img src='./assets/logo.png' />
        </div>
        <div id='search'>
          <input type='text' id='searchInput' placeholder='Search' />
        </div>
        <div class='profile'></div>
        <div class='profile'></div>
        <div class='profile'></div>
    </div>
  )
}

export default SearchBar