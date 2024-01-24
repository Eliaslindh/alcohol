// api.ts
const apiKey = '1';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const getRandomCocktail = async () => {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        return data.drinks ? data.drinks[0] : null;
    } catch (error) {
        console.error('Error fetching random cocktail:', error);
        return null;
    }
};


export const searchCocktailByName = async (name: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${name}`);
    const data = await response.json();
    return data.drinks;
};

export const listCocktailsByFirstLetter = async (letter: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?f=${letter}`);
    const data = await response.json();
    return data.drinks;
};

export const searchIngredientByName = async (name: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?i=${name}`);
    const data = await response.json();
    return data.ingredients;
};

export const lookupCocktailById = async (id: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks;
};

export const lookupIngredientById = async (id: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/lookup.php?iid=${id}`);
    const data = await response.json();
    return data.ingredients;
};



export const searchCocktailByCategory = async (category: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/filter.php?c=${category}`);
    const data = await response.json();
    return data.drinks;
};

export const searchCocktailByIngredient = async (ingredient: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${apiKey}/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.drinks;
};

const api = {
    getRandomCocktail,

};