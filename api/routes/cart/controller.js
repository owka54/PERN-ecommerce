const pool = require("../../db");
const queries = require("./queries");

const createCart = async (req, res) => {
    try {
        const { id } = req.body; // req.user ???

        // gets date in 'yyyy-mm-dd' format
        const date = new Date();
        date.toLocaleDateString('en-GB').split('-').join('');

        const response = await pool.query(queries.createCart, [id, date, date]);

        res.status(200).send('Cart created');
    } catch (err) {
        console.error(err.message);
    }
}


const getCart = async (req, res) => {
    try {
        const { id } = req.body; // req.user ???

        const response = await pool.query(queries.getCart, [id]);
        const cart = response.rows[0];

        res.status(200).send(cart);
        
    } catch (err) {
        console.error(err.message);
    }
}

const addItemToCart = async (req, res) => {
    try {
        const { id } = req.body; // req.user ???
        const { productId, quantity } = req.body;
        
        const response = await pool.query(queries.addItemToCart, [id, productId, quantity]);

        res.status(200).send('Item added to cart');
    } catch (err) {
        console.error(err.message);
    }
}

const deleteItemFromCart = async (req, res) => {
    try {
        const { cartItemId } = req.params
        const { cartId } = req.body;

        const response = await pool.query(queries.deleteItemFromCart, [cartId, cartItemId]);

        res.status(200).send('Item removed from cart');
    } catch (err) {
        console.error(err.message);
    }
}

const updateItem = async (req, res) => {
    try {
        const { cartItemId } = req.params;
        const { quantity } = req.body;

        const response = await pool.query(queries.updateItem, [quantity, cartItemId]);

        res.status(200).send('item updated');

    } catch (err) {
        console.error(err.message);
    }
}

// const updateCart = async (req, res) => {
//     try {
//         const { id } = req.body; // req.user ???

//         const response = await pool.query(queries.updateCart, [id]);
//         const cart = resposne.rows[0];

//         res.status(200).send(cart);
//     } catch (err) {
//         console.error(err.message);
//     }
// }

module.exports = {
    createCart,
    getCart,
    addItemToCart,
    deleteItemFromCart,
    updateItem,
    // updateCart,
}