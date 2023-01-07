import { useEffect, useState } from "react";

export default function Cart() {

    const [cartId, setCartId] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    
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
        console.log(cartId.id);
        const response = await fetch(`http://localhost:5000/carts/items/${cartId.id}`);
        const data = await response.json();
        console.log(data);
        setCartItems(data)
    }

    useEffect(() => {
        getCartId();
    }, [])
    
    useEffect(() => {
        getCartItems();
    }, [cartId]);

    useEffect(() => {
        console.log(cartItems);
        cartItems.map(async (item, idx) => {
            console.log(item);
            const product = await getProduct(item.id);
            console.log(product);
            setProducts(products => [...products, product]);
        })
    }, [cartItems]);
    
    return (
        <div id="cart">
            <h1>Cart</h1>

            {products ? products.map((item, idx) => {
                console.log(products);
                let product = cartItems.find(cartItem => cartItem.id == item.id)
                return (
                    <div className="cartItem" key={idx}>
                        <p>x{product.quantity}</p>
                        <h3>{item.name}</h3>
                        <button>Remove</button>
                    </div>
                )
            }) : "dslfhjgksdjfg"}
            <button>Checkout</button>
        </div>
    );
}