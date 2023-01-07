import { useEffect } from "react";
import { useState } from "react";
import AddToCart from "./addToCart";

export default function Products({search}) {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let url;
        if (search === '' || search === '%%') {
            url = "http://localhost:5000/products";
        } else {
            url = `http://localhost:5000/products?search=${search}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [search]);

    return (
        <div id="products">

            <div id="products-list">
                {/* Example product */}

                {/* <div className="product" >
                    <img src="watch.jpg" alt="Product Image"/>
                    <h3>Product Name</h3>
                    <p>Nice all black watch, very stylish...</p>
                    <i>£150</i>
                    <button>Add to cart</button>
                </div> */}

                {products[0] ? products.slice(0).map((product, idx) => {
                    return (
                        <div className="product" key={idx}>
                            <img src={product.img_src} alt="Product Image"/>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <i>{product.price}</i>
                            <AddToCart productId={product.id} />
                        </div>
                )}) : "No products found. Check your spelling or edit your search to view available items."}
                
            </div>
        </div>
    );
}