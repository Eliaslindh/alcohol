// components/CocktailDetails.tsx
import React, { useEffect, useState } from 'react';
import { Paper, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface CocktailDetailsProps {
    cocktailId: string;
}

const CocktailDetails: React.FC<CocktailDetailsProps> = ({ cocktailId }) => {
    const [cocktail, setCocktail] = useState<any>();

    useEffect(() => {
        const fetchCocktailDetails = async () => {
            try {
                if (!cocktailId) {
                    console.error('Invalid cocktailId');
                    return;
                }

                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);

                if (!response.ok) {
                    console.error('Error fetching cocktail details. Status:', response.status);
                    return;
                }

                const data = await response.json();

                if (!data.drinks || data.drinks.length === 0) {
                    console.error('Invalid or empty response from the API');
                    return;
                }

                console.log('API Response:', data);
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error('Error fetching cocktail details:', error);
            }
        };
        fetchCocktailDetails();
    }, [cocktailId]);
    console.log(cocktail)
    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            {cocktail ? (
                <Card>
                    <CardMedia
                        component="img"
                        height="600" // Adjust the height as needed
                        image={cocktail.strDrinkThumb}
                        alt={cocktail.strDrink}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {cocktail.strDrink}
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                            Alcohol: {cocktail.strAlcoholic}%, Strength: {cocktail.strAlcoholicStrength}
                        </Typography>
                        <Typography variant="h6">Ingredients:</Typography>
                        <ul>
                            {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
                                const ingredient = cocktail[`strIngredient${index}`];
                                const measure = cocktail[`strMeasure${index}`];
                                return ingredient ? (
                                    <li key={index}>{`${measure ? `${measure} of ` : ''}${ingredient}`}</li>
                                ) : null;
                            })}
                        </ul>
                        <Typography variant="body2" color="text.secondary">
                            Instructions:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cocktail.strInstructions}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Paper>
    );
};

export default CocktailDetails;
