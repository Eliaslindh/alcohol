// components/IngredientList.tsx
import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';

interface IngredientListProps {
    onIngredientClick: (ingredient: string) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ onIngredientClick }) => {
    const [ingredients, setIngredients] = useState<string[]>([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            // You can modify this based on the actual API endpoint for ingredients
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            const data = await response.json();
            setIngredients(data.drinks.map((drink: any) => drink.strIngredient1));
        };

        fetchIngredients();
    }, []);

    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5">Ingredients</Typography>
            <div>
                {ingredients.map((ingredient) => (
                    <Button
                        key={ingredient}
                        variant="contained"
                        color="primary"
                        style={{ margin: '5px' }}
                        onClick={() => onIngredientClick(ingredient)}
                    >
                        {ingredient}
                    </Button>
                ))}
            </div>
        </Paper>
    );
};

export default IngredientList;
