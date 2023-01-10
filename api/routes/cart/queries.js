const createCart = 'INSERT INTO carts (userId, modified, created) VALUES ($1, $2, $2) RETURNING id';
const getCart = 'SELECT * FROM carts WHERE userId = $1';
const getCartItems = 'SELECT * FROM cartItems WHERE cartId = $1';
const getCartItemById = `SELECT quantity FROM cartItems WHERE cartId = $1 AND productId = $2`;
const addItemToCart = 'INSERT INTO cartItems (cartId, productId, quantity) VALUES ($1, $2, $3)';
const deleteItemFromCart = 'DELETE FROM cartItems WHERE cartId = $1 AND productId = $2';
const updateItem = 'UPDATE cartItems SET quantity = $1 WHERE productId = $2 AND cartId = $3';
// const updateCart = 'UPDATE TABLE carts SET modified = $1 WHERE userId = $2';

module.exports = {
    createCart, 
    getCart,
    getCartItems,
    getCartItemById,
    addItemToCart,
    deleteItemFromCart,
    updateItem,
    // updateCart,
}