const register = 'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
const doesUserExist = 'SELECT * FROM users WHERE email = $1';

module.exports = {
    register,
    doesUserExist,
}