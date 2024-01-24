"use client"
// App.tsx
import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import CocktailList from './components/CocktailList';
import CocktailSearch from './components/CocktailSearch';
import CocktailDetails from './components/CocktailDetails';
import CategoryList from './components/CategoryList';
import IngredientList from './components/IngredientsList'; // Add the new component
import { searchCocktailByName, searchCocktailByCategory, searchCocktailByIngredient } from './api'; // Update the import
import RandomCocktail from './components/RandomCoktail';
import { Route } from '@mui/icons-material';

const theme = createTheme();

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedCocktailId, setSelectedCocktailId] = useState<string | null>(null);

  const handleSearch = async (query: string, category?: string, ingredient?: string) => {
    let data;
    if (category) {
      data = await searchCocktailByCategory(category);
    } else if (ingredient) {
      data = await searchCocktailByIngredient(ingredient);
    } else {
      data = await searchCocktailByName(query);
    }
    setSearchResults(data || []);
  };

  const handleCocktailClick = (id: string) => {
    setSelectedCocktailId(id);
  };

  const handleCategoryClick = async (category: string) => {
    const data = await searchCocktailByCategory(category);
    setSearchResults(data || []);
  };

  const handleIngredientClick = async (ingredient: string) => {
    const data = await searchCocktailByIngredient(ingredient);
    setSearchResults(data || []);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <h1>Cocktail Website</h1>
        <CocktailSearch onSearch={handleSearch} />
        <RandomCocktail></RandomCocktail>
        <CategoryList onCategoryClick={handleCategoryClick} />
        <IngredientList onIngredientClick={handleIngredientClick} />
        {selectedCocktailId ? (
          <CocktailDetails cocktailId={selectedCocktailId} />
        ) : (
          <CocktailList cocktails={searchResults} onItemClick={handleCocktailClick} />
        )}

      </Container>
    </ThemeProvider>
  );
};

export default App;
