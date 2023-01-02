import { useEffect, useState } from "react";

export default function AddToCart({ productId }) {

    const [cartId, setCartId] = useState();

    const getCartId = async () => {
        const user_id = localStorage.getItem('user_id');
        const response = await fetch(`http://localhost:5000/carts/mine/${user_id}`);
        setCartId(await response.json());
    };

    useEffect(() => {
        getCartId();
    }, []);

    const onButtonClick = async () => {
        console.log(productId);

        const data = {
            id: cartId.id,
            productId,
            quantity: 1
        }

        //check if item is already in cart, if so increase quantity
        const check = await fetch(`http://localhost:5000/carts/items/${cartId.id}/${productId}`);
        const result = await check.json();
        
        if (result.length != 0) {
            const num = result[0].quantity += 1;
            const response = await fetch(`http://localhost:5000/carts/mine/items/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    quantity: num,
                    cartId: cartId.id
                })
            });
        } else { // else add item to cart
            const response = await fetch("http://localhost:5000/carts/mine/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        }
    }

    return (
        <button onClick={onButtonClick}>Add to cart</button>
    );
}