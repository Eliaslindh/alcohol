// components/RandomCocktail.tsx
// components/RandomCocktail.tsx
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import * as api from '../api'; // Use * as api to import all exports


const RandomCocktail: React.FC = () => {
    const [randomCocktail, setRandomCocktail] = useState<any>(null);

    const fetchRandomCocktail = async () => {
        try {
            const cocktail = await api.getRandomCocktail();
            setRandomCocktail(cocktail);
        } catch (error) {
            console.error('Error fetching random cocktail:', error);
        }
    };

    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5">Random Cocktail</Typography>
            <Button variant="contained" color="primary" onClick={fetchRandomCocktail}>
                Get Random Cocktail
            </Button>

            {randomCocktail && (
                <Card>
                    <CardMedia
                        component="img"
                        height="600"
                        image={randomCocktail.strDrinkThumb}
                        alt={randomCocktail.strDrink}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {randomCocktail.strDrink}
                        </Typography>
                        <Typography variant="subtitle1">Ingredients:</Typography>
                        <ul>
                            {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
                                const ingredient = randomCocktail[`strIngredient${index}`];
                                const measure = randomCocktail[`strMeasure${index}`];
                                return ingredient ? (
                                    <li key={index}>{`${measure ? `${measure} of ` : ''}${ingredient}`}</li>
                                ) : null;
                            })}
                        </ul>
                        <Typography variant="body1">Instructions:</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {randomCocktail.strInstructions}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Paper>
    );
};

export default RandomCocktail;