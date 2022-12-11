const { Router } = require("express");
const pool = require("../../db");
const controller = require("./controller");
const router = Router();

//
router.post('/register', controller.register);


module.exports = router;