const errorHandler = require('../utils/errors');
const { Recipe } = require('../db');
const loadDBdiets = require('../utils/loadDBdiets');

const postRecipe = async (req, res) => {

    const idDB = async () => {
        const recipesDB = await Recipe.findAll();
        let idM = 1165540;
        if (!recipesDB.length) return idM;
        return idM += recipesDB.length * 2
    };

    try {
    
        await loadDBdiets();

        const { title, image, summary, healthScore, steps, diets } = req.body;
        const health_score = healthScore;
        const id = await idDB();
        const newRecipe = await Recipe.create({ id, title, image, summary, health_score, steps });
        newRecipe.addDiet(diets);
        
        res.status(201).json(newRecipe)

    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = postRecipe;
