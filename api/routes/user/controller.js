const pool = require("../../db");
const queries = require("./queries");

const getUserById = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        
        const response = await pool.query(queries.getUserById, [userId]);
        const user = response.rows[0];

        res.status(200).send(user);
    } catch (err) {
        console.error(err.message);
    }
};

const updateUserById = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        const { firstName, lastName } = req.body;

        const response = await pool.query(queries.updateUserById, [firstName, lastName, userId]);
        const user = response.rows[0];

        res.send(user);
        
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    getUserById,
    updateUserById,
}