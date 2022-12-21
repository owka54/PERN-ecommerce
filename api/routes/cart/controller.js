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

const checkout = async (req, res) => {
    try {
        const { id } = req.body // req.user ???
        const { cartId, paymentInfo } = req.body;

        console.log(id, cartId, paymentInfo);

        const response = async (cartId, id, paymentInfo) => {
            // const stripe = require('stripe')('sk_test_FOY6txFJqPQvJJQxJ8jpeLYQ');

            // load cart items
            const cartItems = await pool.query(queries.getCart, [id]);
            res.send(cartItems);

            // generate total price from cart items
            const total = cartItems.reduce((total, item) => {
                return total += Number(item.price);
            }, 0);

            console.log(total);
        }
    res.send(response);
    } catch (err) {
        console.error(err.message);        
    }
}

module.exports = {
    createCart,
    getCart,
    addItemToCart,
    deleteItemFromCart,
    updateItem,
    checkout,
}