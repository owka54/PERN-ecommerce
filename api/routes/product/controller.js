const pool = require("../../db");
const queries = require("./queries");

const getProducts = async (req, res) => {
    try {
        const data = await pool.query(queries.getProducts);
        res.status(200).send(data.rows);
    } catch (err) {
        console.error(err.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const { productId } = req.params;

        const response = await pool.query(queries.getProductById, [productId]);
        const product = response.rows[0];

        res.status(200).send(product);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    getProducts,
    getProductById,
}