const getProducts = 'SELECT * FROM products';
const getProductsWithSearch = 'SELECT * FROM products WHERE LOWER(name) LIKE $1';
const getProductById = 'SELECT * FROM products WHERE id = $1';

module.exports = {
    getProducts,
    getProductsWithSearch,
    getProductById,
}