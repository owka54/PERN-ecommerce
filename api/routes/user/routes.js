const { Router } = require("express");
const controller = require("./controller");
const router = Router();

//
router.get('/:userId', controller.getUserById);
router.put('/:userId', controller.updateUserById);


module.exports = router;