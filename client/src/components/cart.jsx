import { useEffect, useState } from "react";

export default function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

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
        async function test() {
            console.log("async func working")
            // cartItems.map(async (item) => {
            //     console.log(item);
            //     const product = await getProduct(item.id);
            //     console.log(product);
            // })
            for (const item of cartItems) {
                getProduct(item.productid)
            }
        }
        test();
    }, [cartItems]);
    
    return (
        <div id="cart">
            <h1>Cart</h1>

            {products ? products.map((item, idx) => {
                console.log(products);
                console.log(idx);
                let product = cartItems.find(cartItem => cartItem.productid == item.id)
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