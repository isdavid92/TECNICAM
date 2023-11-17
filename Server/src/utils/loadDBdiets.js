const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const URL_BASE = 'https://api.spoonacular.com/recipes/';
const { Diet } = require('../db');
const idRecipeDiet = [35, 80, 550];

const loadDBdiets = async () => {

    let dietsDB = await Diet.findAll();
    if(dietsDB.length){
        return dietsDB
    };

    const dietsR = [];
    for (const id of idRecipeDiet) {
        const response = await axios(`${URL_BASE}${id}/information?apiKey=${API_KEY}`);
        const { diets } = response.data;
        diets.map( diet => {
            dietsR.push(diet)
        })
    };
    
    const diets = [...new Set(dietsR)];
    for (const diet of diets) {
        await Diet.create({ name: diet })
    };

    dietsDB = await Diet.findAll();
    return dietsDB
    
};

module.exports = loadDBdiets