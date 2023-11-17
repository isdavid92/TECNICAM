const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/';
const { Recipe, Diet } = require('../db');

const getRecipeById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const resultDB = await Recipe.findOne({
            where: {
                id: id
            },
            include: Diet
        });

        if (resultDB) {
            const steps = [{number:1, step:resultDB.steps}];
            const diets = resultDB.diets.map(diet => {
                return diet.name
            });
            const origin = 'data base';
            const { id, title, image, summary, healthScore } = resultDB;
            const recipeDB = { id, title, healthScore, diets, image, summary, steps, origin };
            
            return res.status(200).json(recipeDB);
        } else {
            const response = await axios(`${URL_BASE}${id}/information?apiKey=${API_KEY}`);
            const { title, image, summary, healthScore, analyzedInstructions, diets } = response.data;
            if (analyzedInstructions.length>0) {
                const origin = 'api';
                const steps = analyzedInstructions[0].steps;
                const recipeApi = { id, title, image, summary, healthScore, steps, diets, origin };
                return res.status(200).json(recipeApi)
              } else {
                const origin = 'api';
                const steps = [];
                const recipeApi = { id, title, image, summary, healthScore, steps, diets, origin };
                return res.status(200).json(recipeApi)
              }
        } 
        
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipeById;
