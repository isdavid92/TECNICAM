const loadDBdiets = require('../utils/loadDBdiets');

const getDiets = async (req, res) => {
    try {

        const dietsDB = await loadDBdiets();
        return res.status(200).json(dietsDB)

    } catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getDiets