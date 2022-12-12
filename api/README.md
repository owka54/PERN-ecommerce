## Database diagram:

![Database diagram](https://github.com/owka54/PERN-ecommerce/blob/master/api/resources/db.png)

# Routes:

http://localhost:5000/

## /users
Get a user by id
- /:userId
GET request

Update a users info
- /:userId
PUT request
requires req.body with (
    firstName
    lastName
)

## /auth
Register a new user
- /register
POST request
requires req.body with (
    firstName
    lastName
    email
    password
)

Log in an existing user
- /login
POST request
requires req.body with (
    email
    password
)

## /products

Get all products
- /

Get product by id
- /:productId

## /carts

Create a cart
- /mine
POST request
Takes an id from the req.body currently

Get products from cart
- /mine
GET request
Takes an id from the req.body currently

Add an item to the cart
- /mine/items
POST
Takes an id from the req.body currently
req.body with productId & quantity

Update the quantity of the item in the cart
- /mine/items/:cartItemId
PUT request
req.body with quantity

Delete an item from the cart
- /mine/items/:cartItemId
DELETE request
req.body with cartId

* /orders

Get all orders
- /
Takes an id from the req.body currently

Get order by id
- /:orderId