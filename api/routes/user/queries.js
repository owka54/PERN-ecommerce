const getUserById = 'SELECT email, firstName, lastName FROM users WHERE id = $1';
const updateUserById = 'UPDATE users SET firstName = $1, lastName = $2 WHERE id = $3 RETURNING firstName, lastName, email';

module.exports = {
    getUserById,
    updateUserById,
}