const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/autocomplete?query=';
const { Recipe } = require('../db');

const getRecipeByTitle = async (req, res) => {
    const titleRecipe = req.params.title;

    const searchDB = async () => {
        const recipes = await Recipe.findAll();
        const result = recipes.filter((recipe) => {
            return recipe.title.toLowerCase().startsWith(titleRecipe.toLowerCase())
        });
        return result
    };

    try {
        const response = await axios(`${URL_BASE}${titleRecipe}&number=25&apiKey=${API_KEY}`);
        const resultApi = response.data;
        const resultDB = await searchDB();
        
        const results = [...resultDB, ...resultApi];

        return res.status(200).json(results)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipeByTitle