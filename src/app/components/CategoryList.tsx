// components/CategoryList.tsx
import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';

interface CategoryListProps {
    onCategoryClick: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            // You can modify this based on the actual API endpoint for categories
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            const data = await response.json();
            setCategories(data.drinks.map((drink: any) => drink.strCategory));
        };

        fetchCategories();
    }, []);

    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5">Categories</Typography>
            <div>
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant="contained"
                        color="primary"
                        style={{ margin: '5px' }}
                        onClick={() => onCategoryClick(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </Paper>
    );
};

export default CategoryList;
