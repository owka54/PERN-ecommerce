const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.post('/mine', controller.createCart);

router.get('/mine', controller.getCart);

// router.put('/mine', controller.updateCart);

router.post('/mine/items', controller.addItemToCart);
router.delete('/mine/items/:cartItemId', controller.deleteItemFromCart);


module.exports = router;