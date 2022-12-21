const pool = require("../../db");
const queries = require("./queries");
const jwt = require("jsonwebtoken");
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
        const response = await pool.query(queries.register, [firstName, lastName, email, hashedPassword], (err) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            } else {
                res.status(200).send({ message: "User added to database" });
            }
        });

        const token = jwt.sign(
            {
                email
            },
            process.env.SECRET_KEY
        );

    } catch (err) {
        console.error(err.message);
    }
}

const login = async (req, res) => {
    // destructure
    const { email, password } = req.body;
    console.log(email, password);
    // check if user exists
    const data = await pool.query(queries.doesUserExist, [email]);
    const user = data.rows;

    if (user.length === 0) {
        return res.status(400).json({error: 'User with that email does not exist. Sign up now'});
    };
    // check if input password matches database password
    bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
            res.status(500).json({
                error: "Server error"
            });
        } else if (result === true) { // check if credentials match
            const token = jwt.sign(
                {
                    email: email
                },
                process.env.SECRET_KEY
            );
            res.status(200).json({
                message: "User signed in",
                token: token,
                user_id: user[0].id
            });
        } else {
            if (result != true) {
                res.status(400).json({
                    error: "Incorrect password"
                })
            }
        }
    })

}

module.exports = {
    register,
    login,
}