import { useEffect, useRef, useState } from "react";
import RemoveFromCart from "./removeFromCart";

export default function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    let total = 0;

    const cartId = localStorage.getItem("cartId");
    
    const getProduct = async (id) => {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProducts(products => [...products, data]);
    }

    const getCartItems = async () => {
        const response = await fetch(`http://localhost:5000/carts/items/${cartId}`);
        const data = await response.json();
        setCartItems(data)
    }
    
    useEffect(() => {
        getCartItems();
    }, [cartId]);

    useEffect(() => {
        async function getProductsFromCartItems() {
            for (const item of cartItems) {
                getProduct(item.productid)
            }
            
        }
        getProductsFromCartItems();
    }, [cartItems]);

    
    return (
        <div id="cart">
            <h1>Cart</h1>

            {/* loop through the products */} 
            {products.length > 0 ? products.map((item, idx) => {
      
                // find that product in the cartItems array
                let product = cartItems.find(cartItem => cartItem.productid == item.id)


                // remove the £ sign and turn to float
                let price = parseFloat(item.price.replace(/[£,]+/g,""));

                // set the correct price for the number of items
                price *= product.quantity;
                // add the price to the total
                total += price;

                return(
                    
                    <div className="cartItem" key={idx}>
                        <p>x{product.quantity}</p>
                        <h3>{item.name}</h3>
                        <p className="cost">£{price}</p>
                        <RemoveFromCart id={item.id} />
                    </div>
                )
            }) : "No items in cart"}<br />
            <h3>Total: £{total.toFixed(2)}</h3>
            <button>Checkout</button>
        </div>
    );
}