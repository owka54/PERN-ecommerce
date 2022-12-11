const express = require("express");
const app = express();

const usersRoute = require("./routes/user/routes");
const authRoute = require("./routes/auth/routes");
const productRoute = require("./routes/product/routes");
const cartRoute = require("./routes/cart/routes");

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes

// user
app.use('/users', usersRoute);

// auth
app.use('/auth', authRoute);

// product
app.use('/products', productRoute);

// cart
app.use('/carts', cartRoute);


app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));