import { useEffect, useState } from "react";

export default function AddToCart({productId}) {

    const [cartId, setCartId] = useState();

    const getCartId = async () => {
        const user_id = localStorage.getItem('user_id');
        const response = await fetch(`http://localhost:5000/carts/mine/${user_id}`);
        setCartId(await response.json());
    }

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
        console.log(data)
        const response = await fetch("http://localhost:5000/carts/mine/items", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        
    }
    return (
        <button onClick={onButtonClick}>Add to cart</button>
    );
}