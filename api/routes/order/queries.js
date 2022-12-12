const getOrders = 'SELECT * FROM orders WHERE userId = $1';
const getOrderById = 'SELECT * FROM orders WHERE id = $1';

module.exports = {
    getOrders,
    getOrderById,
}