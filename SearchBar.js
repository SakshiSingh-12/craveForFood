// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

   
    };

    return (
        <input
            type="text"
            placeholder="Search for food or restaurants..."
            value={query}
            onChange={handleInputChange}
            style={styles.searchInput}
        />
    );
};

const styles = {
    searchInput: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
};


export default SearchBar;
