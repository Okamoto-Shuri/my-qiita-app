import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

// Propsの型定義
interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;