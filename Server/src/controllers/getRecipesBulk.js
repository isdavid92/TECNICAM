const axios = require('axios');
const errorHandler = require('../utils/errors');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/';
const { Recipe, Diet } = require('../db');

const getRecipesBulk = async (req, res) => {
    try {

        const ids = req.params.ids;
        const idsSplit = ids.split(',').map(Number);
        const resultDB = await Recipe.findAll();
        const resultDBOrigin = resultDB.map(recipe => {
            return {...recipe.dataValues, origin: 'data base'}
        });
        const response = await axios(`${URL_BASE}informationBulk?ids=${ids}&apiKey=${API_KEY}`);
        const data = [];
            
        for (let i = 0; i < idsSplit.length; i++) {
            const idDB = resultDBOrigin.find(recipe => recipe.id===idsSplit[i]);
            if (idDB && idDB.origin==='data base') {
                const resultDB = await Recipe.findOne({
                    where: {
                        id: idDB.id
                    },
                    include: Diet
                });
                const steps = [{number:1, step:resultDB.steps}];
                const diets = resultDB.diets.map(diet => {
                    return diet.name
                });
                const origin = 'data base';
                const { id, title, image, summary, healthScore } = resultDB;
                const recipeDB = { id, title, healthScore, diets, image, summary, steps, origin }
                data.push(recipeDB)
            }
        };
        
        for (let i = 0; i < response.data.length; i++) {
            const { id, title, image, summary, healthScore, analyzedInstructions, diets } = response.data[i];
            if (analyzedInstructions.length>0) {
                const origin = 'api';
                const steps = analyzedInstructions[0].steps;
                data.push({ id, title, image, summary, healthScore, steps, diets, origin })
              } else {
                const origin = 'api';
                const steps = [];
                data.push({ id, title, image, summary, healthScore, steps, diets, origin });
              }
        };
        return res.status(200).json(data)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipesBulk;