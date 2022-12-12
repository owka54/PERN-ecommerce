const pool = require("../../db");
const queries = require("./queries");

const getOrders = async (req, res) => {
    try {
        const { id } = req.body // req.user ???

        const response = await pool.query(queries.getOrders, [id]);

        res.send(response.rows);
    } catch (err) {
        console.error(err.message);
    }
}

const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params

        const response = await pool.query(queries.getOrderById, [orderId]);

        res.send(response.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}


module.exports = {
    getOrders,
    getOrderById,
}