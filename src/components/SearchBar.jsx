// import React from 'react'
// import './SearchBar.css'

// const SearchBar = () => {
//   return (
//     <div id='searchBar'>
//         <div id='logo'>
//             <img src='./assets/logo.png' />
//         </div>
//         <div id='search'>
//           <input type='text' id='searchInput' placeholder='Search' />
//         </div>
//         <div class='profile'></div>
//         <div class='profile'></div>
//         <div class='profile'></div>
//     </div>
//   )
// }

// export default SearchBar




import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ setSearchTerm, setSortOrder, sortOrder }) {
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
      <TextField
        label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: '70%' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSort}
      >
        Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
      </Button>
    </Box>
  );
}

export default SearchBar;
