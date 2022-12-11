const express = require("express");
const app = express();

const usersRoute = require("./routes/user/routes");

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use('/users', usersRoute);


app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));