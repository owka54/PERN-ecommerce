import { useEffect, useState } from "react";

export default function Cart() {

    const [cartId, setCartId] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([])

    const getProduct = async (id) => {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProducts(products => [...products, data]);
        console.log(products);
    }

    const getCartId = async () => {
        const user_id = localStorage.getItem('user_id');
        const response = await fetch(`http://localhost:5000/carts/mine/${user_id}`);
        setCartId(await response.json());
    }

    const getCartItems = async () => {
        const response = await fetch(`http://localhost:5000/carts/items/${cartId.id}`);
        const data = await response.json();
        setCartItems(data);
    }

    useEffect(() => {
        getCartId();
    }, [])

    useEffect(() => {
        getCartItems();
    }, [cartId])

    useEffect(() => {
        console.log(cartItems)
        cartItems.map((item) => {
            getProduct(item.id);
        })
    }, [cartItems])

    return (
        <div id="cart">
            <h1>Cart</h1>

            {products.map((item, idx) => {
                console.log(products);
                let a = cartItems.find(cartItem => cartItem.id == item.id)
                return (
                    <div className="cartItem" key={idx}>
                        <p>x{a.quantity}</p>
                        <h3>{item.name}</h3>
                        <button>Remove</button>
                    </div>
                )
            })}
            <button>Checkout</button>
        </div>

    );
}