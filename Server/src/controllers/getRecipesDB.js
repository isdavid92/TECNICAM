const errorHandler = require('../utils/errors');
const { Recipe, Diet } = require('../db');

const getRecipesDB = async (req, res) => {
    try {

        const resultDB = await Recipe.findAll({
            include: Diet
        });
        const recipesDB = resultDB.map(recipe => {
            const recipeToJson = recipe.toJSON();
            const origin = 'data base';
            const steps = [{number:1, step:recipeToJson.steps}];
            const diets = recipeToJson.diets.map(diet => {
                return diet.name
            });
            const { id, title, image, summary, health_score } = recipeToJson;
            const healthScore = health_score;
            const recipeEnd = { id, title, healthScore, diets, image, summary, steps, origin };
            return recipeEnd
        });
        return res.status(200).json(recipesDB)
    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getRecipesDB;
