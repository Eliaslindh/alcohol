// components/CocktailList.tsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, Typography } from '@mui/material';

interface CocktailListProps {
    cocktails: any[];
    onItemClick: (id: string) => void;
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails, onItemClick }) => {
    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            {cocktails.length === 0 ? (
                <Typography>No results found.</Typography>
            ) : (
                <List>
                    {cocktails.map((cocktail) => (
                        <ListItem button key={cocktail.idDrink} onClick={() => onItemClick(cocktail.idDrink)}>
                            <ListItemAvatar>
                                <Avatar alt={cocktail.strDrink} src={cocktail.strDrinkThumb} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={cocktail.strDrink}
                                secondary={`Alcohol: ${cocktail.strAlcoholic}%, Strength: ${cocktail.strAlcoholicStrength}`}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
};

export default CocktailList;
