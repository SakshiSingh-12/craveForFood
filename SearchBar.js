// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Trigger search
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

