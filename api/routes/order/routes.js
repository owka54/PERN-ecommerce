const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get('/', controller.getOrders);

router.get('/:orderId', controller.getOrderById)


module.exports = router;