// components/CocktailSearch.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, MenuItem } from '@mui/material';

interface CocktailSearchProps {
    onSearch: (query: string, category?: string) => void;
}

const CocktailSearch: React.FC<CocktailSearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

    const handleSearch = () => {
        onSearch(searchQuery, selectedCategory);
    };

    return (
        <Paper style={{ padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={9}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Search for a drink"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Paper >
    );
};

export default CocktailSearch;
