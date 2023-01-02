const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.post('/mine', controller.createCart);
router.get('/mine/:id', controller.getCart);
router.get('/items/:cartId', controller.getCartItems);
router.get('/items/:cartId/:productId', controller.getCartItemById);
// router.put('/mine', controller.updateCart);

router.post('/mine/items', controller.addItemToCart); // add item
router.put('/mine/items/:cartItemId', controller.updateItem); // change item quantity
// router.delete('/mine/items/:cartItemId', controller.deleteItemFromCart); // remove item
router.post('/mine/checkout', controller.checkout);


module.exports = router;