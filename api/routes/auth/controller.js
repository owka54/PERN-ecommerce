const pool = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        // destructure
        const { firstName, lastName, email, password } = req.body;

        // check if user exists
        const user = await pool.query(queries.doesUserExist, [email]);

        if (user.rows[0]) {
            return res.send('User with that email already exists');
        };

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // add to database
        const response = await pool.query(queries.register, [firstName, lastName, email, hashedPassword]);

        res.send('New user registered');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    register,
}